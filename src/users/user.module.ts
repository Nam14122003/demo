import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { StoreConfig } from "src/store/store.config";
import { StoreService } from "src/store/store.service";
function createStore(config: StoreConfig): StoreService {
    console.log(config);
    return new StoreService();
}
@Module({
    controllers: [UserController],
    providers: [UserService, {
        provide: 'STORE_CONFIG',
        useValue: {
            dir: 'store',
            path: 'user'
        } as StoreConfig
        },
        {
            provide: 'STORE_SERVICE',
            useFactory: createStore,
            inject: [{
                token: 'STORE_CONFIG',
                optional: true,
            }]
        }
    ],

})
export class UserModule {

}