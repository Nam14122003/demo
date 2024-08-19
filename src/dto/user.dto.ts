import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto{

    @ApiProperty({ example: 'lenam123'})
    @Expose()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'Lê Đoàn Ngọc'})
    firstName: string;

    @ApiProperty({ example: 'Nam'})
    lastName: string;

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName: string;
    
    @ApiProperty({ example: '123123123'})
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}