import { MailerService as MailerServices } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

import { CreateMailerDto } from './dto/create-mailer.dto';
import envVars from 'src/config/env';

@Injectable()
export class MailerService {

  constructor(private readonly mailService: MailerServices) { }

  async create(createMailerDto: CreateMailerDto) {
    try {
      await this.mailService.sendMail({
        to: envVars.EMAIL_USERNAME,
        cc: createMailerDto.email,
        from: `${envVars.EMAIL_FROM} <${envVars.EMAIL_USERNAME}>`,
        subject: createMailerDto.subject,
        text: `Message from: ${createMailerDto.name},\n\n${createMailerDto.message}\n\nRegards,\n${envVars.EMAIL_FROM}`
      });
    } catch (error) {
      return {
        message: 'Mail not sent',
      }
    }

    return {
      message: 'Mail sent successfully',
    }
  }
}
