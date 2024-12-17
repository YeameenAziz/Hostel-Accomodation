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
exports.NoticeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notice_entity_1 = require("./notice.entity");
let NoticeService = class NoticeService {
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    setNotice_HomePage() {
        return "This is the Notice Page!";
    }
    async getAll_Notice() {
        return await this.noticeRepository.find();
    }
    async getSearchNotice(notice_id) {
        const notice = await this.noticeRepository.findOne({ where: { notice_id: notice_id } });
        return notice || { message: "Notice not found!" };
    }
    async addNewNotice(data) {
        const newNotice = this.noticeRepository.create(data);
        await this.noticeRepository.save(newNotice);
        return {
            message: "New Notice Added Successfully",
            Data: newNotice,
        };
    }
    async updateNotice(updateId, updatedData) {
        const notice = await this.noticeRepository.findOne({ where: { notice_id: updateId } });
        if (!notice) {
            return { message: "Notice not found!" };
        }
        await this.noticeRepository.update(notice.id, updatedData);
        return {
            message: "Notice updated successfully!",
            updatedNotice: { ...notice, ...updatedData },
        };
    }
    async deleteNotice(notice_id) {
        const notice = await this.noticeRepository.findOne({ where: { notice_id: notice_id } });
        if (!notice) {
            return { message: "Notice not found!" };
        }
        await this.noticeRepository.delete(notice.id);
        return {
            message: `Notice with ID ${notice_id} deleted successfully.`,
            deletedNotice: notice,
        };
    }
};
exports.NoticeService = NoticeService;
exports.NoticeService = NoticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notice_entity_1.Notice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoticeService);
//# sourceMappingURL=notice.service.js.map