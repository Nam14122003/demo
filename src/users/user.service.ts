import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";

@Injectable()
export class UserService {
    create(dto: UserDto) :UserDto {
       return dto;
    }
}