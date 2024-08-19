import { UserDto } from "src/dto/user.dto";

export class UserMockService {
    create(dto : UserDto): UserDto {
        return {
            id: 2,
            password: 'mockPassword',
            username: 'nam123456',
            firstName: 'Le',
            lastName: 'Nam',
            fullName: 'Le Nam',
            createAt: new Date(),
            updatedAt: new Date()
        }
    }
}