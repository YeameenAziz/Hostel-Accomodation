import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    setUser_HomePage(): string;
    getAll_Users(): Promise<User[]>;
    getSearchUser(id: string): Promise<User | {
        message: string;
    }>;
    addNewUser(data: any): Promise<{
        message: string;
        Data: User[];
    }>;
    updateUser(updateId: string, updatedData: any): Promise<{
        message: string;
        updatedUser?: undefined;
    } | {
        message: string;
        updatedUser: any;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
        deletedUser?: undefined;
    } | {
        message: string;
        deletedUser: User;
    }>;
}
