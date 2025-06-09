import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";



export class Server {

    public static start(){
        console.log('Server started...');

        CronService.createJob(
            '*/2 * * * * *',
            () => {
                const url = 'http://localhost:3000/posts';
                new CheckService(
                    () => console.log(`${ url } is OK`),
                    ( error ) => console.log(`${ error }`)
                ).execute( url );
            }
        );
    }

}