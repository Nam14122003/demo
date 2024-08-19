import { Module  } from "@nestjs/common";
import { UserModule } from "./users/user.module";
import { UserMockService } from "./users/user-mock.service";

@Module({
    imports: [UserModule],
    providers: [{
            provide: 'App_USER',
            useClass: UserMockService
    }]

})

export class AppModule {

}