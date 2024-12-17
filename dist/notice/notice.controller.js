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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const notice_service_1 = require("./notice.service");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    getAllNotice() {
        return this.noticeService.getAll_Notice();
    }
    searchNotice(search_id) {
        return this.noticeService.getSearchNotice(search_id);
    }
    addNewNotice(data) {
        return this.noticeService.addNewNotice(data);
    }
    updateNotice(notice_id, update_data) {
        return this.noticeService.updateNotice(notice_id, update_data);
    }
    deleteNotice(notice_id) {
        return this.noticeService.deleteNotice(notice_id);
    }
};
exports.NoticeController = NoticeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "getAllNotice", null);
__decorate([
    (0, common_1.Get)('/searchNotice/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "searchNotice", null);
__decorate([
    (0, common_1.Post)('/addNewNotice'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "addNewNotice", null);
__decorate([
    (0, common_1.Put)('/updateNotice/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "updateNotice", null);
__decorate([
    (0, common_1.Delete)('/deleteNotice/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NoticeController.prototype, "deleteNotice", null);
exports.NoticeController = NoticeController = __decorate([
    (0, common_1.Controller)('notice'),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
//# sourceMappingURL=notice.controller.js.map