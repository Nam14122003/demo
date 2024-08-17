import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto{

    @ApiProperty()
    @Expose()
    @IsString()
    @IsNotEmpty()
    username: string;

    firstName: string;

    lastName: string;

    @Expose()
    @Transform(({obj}) => obj.firstName + ' ' + obj.lastName)
    fullName: string;
    @ApiProperty()
    @Expose()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}