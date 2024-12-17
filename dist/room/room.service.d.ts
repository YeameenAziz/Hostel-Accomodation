import { Repository } from 'typeorm';
import { Room } from './room.entity';
export declare class RoomService {
    private readonly roomRepository;
    constructor(roomRepository: Repository<Room>);
    setRoom_HomePage(): string;
    getAll_Room(): Promise<Room[]>;
    getSearchRoom(id: string): Promise<Room | {
        message: string;
    }>;
    addNewRoom(data: any): Promise<{
        message: string;
        Data: Room[];
    }>;
    updateRoom(updateId: string, updatedData: any): Promise<{
        message: string;
        updatedRoom?: undefined;
    } | {
        message: string;
        updatedRoom: any;
    }>;
    deleteRoom(id: string): Promise<{
        message: string;
        deletedRoom?: undefined;
    } | {
        message: string;
        deletedRoom: Room;
    }>;
}
