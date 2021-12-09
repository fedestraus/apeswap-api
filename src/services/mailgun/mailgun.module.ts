import { Module } from '@nestjs/common';
import { MailgunModule as MailModule } from '@nextnm/nestjs-mailgun';
import { MailgunProvider } from './mailgun.provider';
import { MailgunService } from './mailgun.service';

@Module({
  providers: [MailgunService, MailgunProvider],
  exports: [MailgunProvider, MailgunService],
})
export class MailgunModule {}
