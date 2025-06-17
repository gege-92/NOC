import { EmailService } from "../../../presentation/email/email.service";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface SendEmailLogsUseCase {
    execute: ( to:string | string[] ) => Promise<boolean>;
}


export class SendEmailLogs implements SendEmailLogsUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly emailService: EmailService
    ){}

    async execute( to:string | string[] ){

        try {

            const sent = await this.emailService.sendEmailWithFileSystemLogs( to );

            if (!sent){
                throw new Error('Email log not sent');
            }

            const log = new LogEntity({
                message: 'Email sent successfully',
                level: LogSeverityLevel.low,
                origin: 'send-email-logs.ts'
            })

            this.logRepository.saveLog( log );
            
            return true;
        } catch (error) {
            
            const log = new LogEntity({
                message: `Email not sent. ${ error }`,
                level: LogSeverityLevel.high,
                origin: 'send-email-logs.ts'
            })

            this.logRepository.saveLog( log );

            return false;
        }

    }

}