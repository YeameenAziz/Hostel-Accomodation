import { RoomService } from './room.service';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getRoom_HomePae(): string;
    getAll_Room(): Promise<import("./room.entity").Room[]>;
    getSearchRoom(id: string): Promise<import("./room.entity").Room | {
        message: string;
    }>;
    addNewRoom(data: any): Promise<{
        message: string;
        Data: import("./room.entity").Room[];
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
        deletedRoom: import("./room.entity").Room;
    }>;
}
