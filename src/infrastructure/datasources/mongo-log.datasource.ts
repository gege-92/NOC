import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";




export class MongoLogDatasource implements LogDatasource {


    async saveLog(log: LogEntity): Promise<void> {
        
        const newLog = await LogModel.create( log );
        //await newLog.save()
        console.log('Mongo log created: ', newLog.id);
    }

    async getLogs(level: LogSeverityLevel): Promise<LogEntity[]> {
        
        const logs = await LogModel.find({
            level: level
        });

        const newLogs = logs.map( log => LogEntity.fromObject( log ) );

        return newLogs;
        
    }

}