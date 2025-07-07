import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserProfileService } from '../../domain/services/user-profile.service';
import { CreateUserProfileDto } from '../../domain/dto/create-user-profile.dto';
import { UpdateUserProfileDto } from '../../domain/dto/update-user-profile.dto';

@ApiTags('user-profiles')
@Controller('user-profiles')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get()
  @ApiOperation({ summary: 'Get all user profiles' })
  @ApiResponse({ status: 200, description: 'User profiles retrieved successfully' })
  async getAllUserProfiles() {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user profile by ID' })
  @ApiParam({ name: 'id', description: 'User profile ID' })
  @ApiResponse({ status: 200, description: 'User profile found' })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async getUserProfile(@Param('id') id: string) {
    return this.userProfileService.findById(id);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get user profile by user ID' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User profile found' })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async getUserProfileByUserId(@Param('userId') userId: string) {
    return this.userProfileService.findByUserId(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user profile' })
  @ApiBody({ 
    type: CreateUserProfileDto,
    description: 'User profile data to create',
  })
  @ApiResponse({ status: 201, description: 'User profile created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @HttpCode(HttpStatus.CREATED)
  async createUserProfile(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.userProfileService.create(createUserProfileDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user profile by ID' })
  @ApiParam({ name: 'id', description: 'User profile ID' })
  @ApiBody({ 
    type: UpdateUserProfileDto,
    description: 'User profile data to update',
  })
  @ApiResponse({ status: 200, description: 'User profile updated successfully' })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async updateUserProfile(
    @Param('id') id: string,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    return this.userProfileService.update(id, updateUserProfileDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user profile by ID' })
  @ApiParam({ name: 'id', description: 'User profile ID' })
  @ApiResponse({ status: 204, description: 'User profile deleted successfully' })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUserProfile(@Param('id') id: string) {
    return this.userProfileService.delete(id);
  }
}
