import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Home page route
  setUser_HomePage(): string {
    return "This is User Management Page!";
  }

  // Show All User Information
  async getAll_Users() {
    return await this.userRepository.find();
  }

  // Search User by using user_id
  async getSearchUser(id: string) {
    const user = await this.userRepository.findOne({ where: { user_id: id } });
    return user || { message: "User not found!" };
  }

  // Add New User
  async addNewUser(data: any) {
    const newUser = this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return {
      message: "New User Added Successfully",
      Data: newUser,
    };
  }

  // Update User Information
  async updateUser(updateId: string, updatedData: any) {
    const user = await this.userRepository.findOne({ where: { user_id: updateId } });

    if (!user) {
      return { message: "User not found!" };
    }

    await this.userRepository.update(user.id, updatedData);
    return {
      message: "User updated successfully!",
      updatedUser: { ...user, ...updatedData },
    };
  }

  // Delete User Information
  async deleteUser(id: string) {
    const user = await this.userRepository.findOne({ where: { user_id: id } });

    if (!user) {
      return { message: "User not found!" };
    }

    await this.userRepository.delete(user.id);
    return {
      message: `User with ID ${id} deleted successfully.`,
      deletedUser: user,
    };
  }
}
