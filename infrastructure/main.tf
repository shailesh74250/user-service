provider "aws" {
  region = "ap-south-1" # Change to your preferred region
}

module "vpc" {
  source = "./modules/vpc"
}

module "security" {
  source = "./modules/security"
  vpc_id = module.vpc.vpc_id
}

module "alb" {
  source = "./modules/ecs/alb"
  ecs_sg_id  = module.security.ecs_sg_id
  public_subnets = module.vpc.public_subnets 
  vpc_id  = module.vpc.vpc_id
}

module "ecr" {
  source = "./modules/ecs/ecr"
}

module "ecs" {
  source = "./modules/ecs"
  ecs_sg_id  = module.security.ecs_sg_id
  public_subnets = module.vpc.public_subnets 
}