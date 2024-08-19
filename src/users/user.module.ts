import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { StoreConfig } from "src/store/store.config";



const configFacebook = {
    appId: 'facebook001',
    appSecret: 'facebook001',
}

@Module({
    controllers: [UserController],
    providers: [UserService, {
        provide: 'STORE_CONFIG',
        useValue: {
            dir: 'store',
            path: 'user'
        } as StoreConfig
    },],
})
export class UserModule {

}