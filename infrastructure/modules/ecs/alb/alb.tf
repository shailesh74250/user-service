resource "aws_lb" "nestjs_alb" {
  name               = "nestjs-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.ecs_sg_id]
  subnets           = var.public_subnets
}

resource "aws_lb_target_group" "nestjs_tg" {
  name     = "nestjs-target-group"
  port     = 3000
  protocol = "HTTP"
  vpc_id = var.vpc_id
}

resource "aws_lb_listener" "nestjs_listener" {
  load_balancer_arn = aws_lb.nestjs_alb.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.nestjs_tg.arn
  }
}