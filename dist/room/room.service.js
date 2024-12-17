"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const room_entity_1 = require("./room.entity");
let RoomService = class RoomService {
    constructor(roomRepository) {
        this.roomRepository = roomRepository;
    }
    setRoom_HomePage() {
        return "This is Hostel Room Page!";
    }
    async getAll_Room() {
        return await this.roomRepository.find();
    }
    async getSearchRoom(id) {
        const room = await this.roomRepository.findOne({ where: { room_id: id } });
        return room || { message: "Room not found!" };
    }
    async addNewRoom(data) {
        const newRoom = this.roomRepository.create(data);
        await this.roomRepository.save(newRoom);
        return {
            message: "New Room Added Successfully",
            Data: newRoom,
        };
    }
    async updateRoom(updateId, updatedData) {
        const room = await this.roomRepository.findOne({ where: { room_id: updateId } });
        if (!room) {
            return { message: "Room not found!" };
        }
        await this.roomRepository.update(room.id, updatedData);
        return {
            message: "Room updated successfully!",
            updatedRoom: { ...room, ...updatedData },
        };
    }
    async deleteRoom(id) {
        const room = await this.roomRepository.findOne({ where: { room_id: id } });
        if (!room) {
            return { message: "Room not found!" };
        }
        await this.roomRepository.delete(room.id);
        return {
            message: `Room with ID ${id} deleted successfully.`,
            deletedRoom: room,
        };
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoomService);
//# sourceMappingURL=room.service.js.map