import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";


// const LogRepository = new LogRepositoryImpl(
//     //new FileSystemDatasource(),
//     //new MongoLogDatasource(),
//     //new PostgresLogDatasource()
// );

const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {

    public static async start(){
        console.log('Server started...');

        // use-case: SendEmailLogs
        // new SendEmailLogs(
        //     fileSystemLogRepository,
        //     emailService
        // ).execute( ['test@test.test'] );

        // use-case:  CheckService
        // CronService.createJob(
        //     '*/2 * * * * *',
        //     () => {
        //         const url = 'https://www.google.com';
        //         new CheckService(
        //             LogRepository,
        //             () => console.log(`${ url } is OK`),
        //             ( error ) => console.log(`${ error }`)
        //         ).execute( url );
        //     }
        // );

        // use-case:  CheckServiceMultiple
        CronService.createJob(
            '*/2 * * * * *',
            () => {
                const url = 'https://www.google.com';
                new CheckServiceMultiple(
                    [fsLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log(`${ url } is OK`),
                    ( error ) => console.log(`${ error }`)
                ).execute( url );
            }
        );
    }

}