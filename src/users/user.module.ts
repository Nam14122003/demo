import { Module } from "@nestjs/common";
import UserController from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [{
        provide: 'USER_SERVICE_NAM',
        useClass: UserService
    }]
})
export class UserModule {

}