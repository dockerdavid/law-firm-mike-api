import { Module } from '@nestjs/common';
import { MailerModule } from './mailer/mailer.module';
import { MailerModule as MailerModules } from '@nestjs-modules/mailer';
import envVars from './config/env';

@Module({
  imports: [
    MailerModule,
    MailerModules.forRoot({
      transport: {
        secure: false,
        port: 587,
        host: envVars.EMAIL_HOST,
        auth: {
          user: envVars.EMAIL_USERNAME,
          pass: envVars.EMAIL_PASSWORD,
        },
        tls: {
          ciphers: 'SSLv3'
        }
      },
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }
