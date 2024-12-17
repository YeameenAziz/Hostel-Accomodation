import { NoticeService } from './notice.service';
export declare class NoticeController {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    getAllNotice(): Promise<import("./notice.entity").Notice[]>;
    searchNotice(search_id: string): Promise<import("./notice.entity").Notice | {
        message: string;
    }>;
    addNewNotice(data: any): Promise<{
        message: string;
        Data: import("./notice.entity").Notice[];
    }>;
    updateNotice(notice_id: string, update_data: any): Promise<{
        message: string;
        updatedNotice?: undefined;
    } | {
        message: string;
        updatedNotice: any;
    }>;
    deleteNotice(notice_id: string): Promise<{
        message: string;
        deletedNotice?: undefined;
    } | {
        message: string;
        deletedNotice: import("./notice.entity").Notice;
    }>;
}
