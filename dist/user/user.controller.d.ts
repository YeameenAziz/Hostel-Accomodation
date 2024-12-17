import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("./user.entity").User[]>;
    searchUser(user_id: string): Promise<import("./user.entity").User | {
        message: string;
    }>;
    addNewUser(data: any): Promise<{
        message: string;
        Data: import("./user.entity").User[];
    }>;
    updateUser(user_id: string, update_data: any): Promise<{
        message: string;
        updatedUser?: undefined;
    } | {
        message: string;
        updatedUser: any;
    }>;
    deleteUser(user_id: string): Promise<{
        message: string;
        deletedUser?: undefined;
    } | {
        message: string;
        deletedUser: import("./user.entity").User;
    }>;
}
