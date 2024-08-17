import { Expose, plainToClass } from "class-transformer";

export abstract class BaseDto {

    @Expose()// return to client
    id: number;

    @Expose()
    createAt: Date;

    @Expose()
    updatedAt: Date;

    static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
        return plainToClass(this, obj, {excludeExtraneousValues: true})
    }
}