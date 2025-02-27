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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    setUser_HomePage() {
        return "This is User Management Page!";
    }
    async getAll_Users() {
        return await this.userRepository.find();
    }
    async getSearchUser(id) {
        const user = await this.userRepository.findOne({ where: { user_id: id } });
        return user || { message: "User not found!" };
    }
    async addNewUser(data) {
        const newUser = this.userRepository.create(data);
        await this.userRepository.save(newUser);
        return {
            message: "New User Added Successfully",
            Data: newUser,
        };
    }
    async updateUser(updateId, updatedData) {
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
    async deleteUser(id) {
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
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map