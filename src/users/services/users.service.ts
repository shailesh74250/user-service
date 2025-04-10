import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Keyv } from '@keyv/redis';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject('KEYV_REDIS') private readonly cache: Keyv
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const cached = await this.cache.get(`user`);
    console.log({cached});
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return 'update'
    // return this.usersRepository.update(id, { UpdateUserDto });
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
