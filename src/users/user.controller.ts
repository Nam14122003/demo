import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";
import { UserService } from "./user.service";
import { plainToInstance } from "class-transformer";


@Controller('users')
export default class UserController {      
    constructor(@Inject('USER_SERVICE_NAM') private readonly userService: UserService) {

    }
    @Get()
    get() {
        return [
            {
                name: 'giang',
                age: 18,
            },
            {
                name: 'binh',
                age: 18,
            }
        ]
    }

    @Post()
    createUser(@Body() dto: UserDto): UserDto{
        return plainToInstance(UserDto, this.userService.create(dto));
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        console.log(id);
        return 'test';
    }
}   

