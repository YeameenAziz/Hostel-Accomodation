import { Repository } from 'typeorm';
import { Notice } from './notice.entity';
export declare class NoticeService {
    private readonly noticeRepository;
    constructor(noticeRepository: Repository<Notice>);
    setNotice_HomePage(): string;
    getAll_Notice(): Promise<Notice[]>;
    getSearchNotice(notice_id: string): Promise<Notice | {
        message: string;
    }>;
    addNewNotice(data: any): Promise<{
        message: string;
        Data: Notice[];
    }>;
    updateNotice(updateId: string, updatedData: any): Promise<{
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
        deletedNotice: Notice;
    }>;
}
