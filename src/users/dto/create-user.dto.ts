import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: 'test1@example.com', type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @ApiProperty()
  @MinLength(6)
  password?: string;

  @ApiProperty({ example: 'John', type: String })
  @IsNotEmpty()
  firstName: string | null;

  @ApiProperty({ example: 'Doe', type: String })
  @IsNotEmpty()
  lastName: string | null;

  @ApiPropertyOptional({ example: 'image_path', type: String })
  @IsOptional()
  photo?: string | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  role?: string | null;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  status?: string;
}
