import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // Show All Users
    @Get()
    getAllUsers() {
        return this.userService.getAll_Users();
    }

    // Search a User by user_ID
    @Get('/searchUser/:id')
    searchUser(@Param('id') user_id: string) {
        return this.userService.getSearchUser(user_id);
    }

    // Post a New User
    @Post('/addNewUser')
    addNewUser(@Body() data) {
        return this.userService.addNewUser(data);
    }

    // Update a User by user_ID
    @Put('/updateUser/:id')
    updateUser(@Param('id') user_id: string, @Body() update_data) {
        return this.userService.updateUser(user_id, update_data);
    }

    // Delete a User by user_ID
    @Delete('/deleteUser/:id')
    deleteUser(@Param('id') user_id: string) {
        return this.userService.deleteUser(user_id);
    }
}



