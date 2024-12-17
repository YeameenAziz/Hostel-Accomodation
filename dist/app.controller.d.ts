import { AppService } from './app.service';
import { homeMessageType } from './app.datatype';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHomePage(): homeMessageType;
}
