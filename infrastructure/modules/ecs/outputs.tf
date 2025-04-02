variable "ecs_sg_id" {
  description = "Security group for ECS"
  type        = string
}

variable "public_subnets" {
  description = "List of public subnet IDs"
  type        = list(string)
}