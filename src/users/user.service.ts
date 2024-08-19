import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { StoreConfig } from "src/store/store.config";
import { StoreService } from "src/store/store.service";

@Injectable()
export class UserService {
    constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig, @Inject('STORE_SERVICE')private storeService: StoreService) {}
    create(dto: UserDto) :UserDto {
        this.storeService.save(dto);
        return dto;
    }
}