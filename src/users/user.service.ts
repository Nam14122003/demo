import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { StoreConfig } from "src/store/store.config";

@Injectable()
export class UserService {
    constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
        console.log(storeConfig);     
    }
    create(dto: UserDto) :UserDto {
       return dto;
    }
}