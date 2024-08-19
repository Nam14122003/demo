import { Inject, Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";

@Injectable()
export class UserService {
    create(dto: any) :any {
        dto.createAt = new Date();
        dto.id = 1;
        dto.updatedAt = new Date();
        console.log(dto);
        return UserDto.plainToClass(dto);
    }
}