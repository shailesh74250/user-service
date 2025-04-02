resource "aws_ecs_cluster" "nestjs_cluster" {
  name = "nestjs-cluster"
}

resource "aws_ecr_repository" "nestjs_repo" {
  name = "nestjs-repo"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }
}

resource "aws_iam_role" "ecs_execution_role" {
  name = "ecsExecutionRole"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_execution_role_policy" {
  role       = aws_iam_role.ecs_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_ecs_task_definition" "nestjs_task" {
  family                   = "nestjs-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_execution_role.arn
  container_definitions = jsonencode([
    {
      name  = "nestjs-container"
      image =  "${aws_ecr_repository.nestjs_repo.repository_url}:latest"
      cpu   = 256
      memory = 512
      networkMode = "awsvpc"
      environment = [  
        { name = "NODE_ENV", value = "production" }
      ]
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "nestjs_service" {
  name            = "nestjs-service"
  cluster         = aws_ecs_cluster.nestjs_cluster.id
  task_definition = aws_ecs_task_definition.nestjs_task.arn
  desired_count   = 2
  launch_type     = "FARGATE"
  network_configuration {
    subnets = var.public_subnets
    security_groups = [var.ecs_sg_id]
  }
}