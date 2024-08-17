import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/dto/user.dto";

@Controller('users')
export default class UserController {
    @Get()
    getUser() {
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
        dto.createAt = new Date();
        dto.id = 1;
        dto.updatedAt = new Date();
        console.log(dto);
        return UserDto.plainToClass(dto);
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        console.log(id);
        return 'test';
    }
}   

