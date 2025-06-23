import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { PrismaClient, SeverityLevel } from "../../generated/prisma";


const prisma = new PrismaClient();

const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH
}

export class PostgresLogDatasource implements LogDatasource {


    async saveLog(log: LogEntity): Promise<void> {

        const level = severityEnum[log.level];

        const newLog = await prisma.logModel.create({
            data : {
                message: log.message,
                level: level,
                origin: log.origin,
                createdAt: log.createAt
            }
        });

        console.log('Postgres Log created!');

    }

    async getLogs(level: LogSeverityLevel): Promise<LogEntity[]> {

        const levelSeverity = severityEnum[level];

        const logs = await prisma.logModel.findMany({
            where : {
                level: levelSeverity
            }
        });
        
        const newLogs = logs.map( log => LogEntity.fromObject( log ) );

        return newLogs;
    }

    
}