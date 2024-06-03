import { IsString } from "class-validator";

export class CreateMailerDto {
    @IsString()
    name: string;
    @IsString()
    subject: string;
    @IsString()
    email: string;
    @IsString()
    message: string;
}
