import fs from 'fs'
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";



export class FileSystemDatasource implements LogDatasource {

    private readonly logPath        = 'logs/';
    private readonly allLogsPath    = 'logs/logs-all.log';
    private readonly lowLogsPath    = 'logs/logs-low.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath   = 'logs/logs-high.log';

    constructor(){
        this.createLogsFiles();
    }

    private createLogsFiles = () => {

        if ( !fs.existsSync( this.logPath ) ){
                fs.mkdirSync( this.logPath )
            }

        [
            this.allLogsPath,
            this.lowLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ]
        .forEach( (path) => {
            if ( !fs.existsSync( path ) ) return;

            fs.writeFileSync( path, '' );        
        })
    }

    async saveLog(log: LogEntity): Promise<void> {

        const logAsJSON = `${ JSON.stringify( log ) }\n`;

        fs.appendFileSync( this.allLogsPath, logAsJSON );

        switch ( log.level ) {

            case LogSeverityLevel.low:
                return fs.appendFileSync( this.lowLogsPath, logAsJSON );
                
            case LogSeverityLevel.medium:
                return fs.appendFileSync( this.mediumLogsPath, logAsJSON );
                
            case LogSeverityLevel.high:
                return fs.appendFileSync( this.highLogsPath, logAsJSON );

            default:
                throw new Error(`${ log.level } not implemented`);
        }
    }

    
    private getLogsFromFile = ( path: string ): LogEntity[] => {

        const content = fs.readFileSync( path, 'utf-8');

        const logs = content.split('\n').map( log => LogEntity.fromJSON( log ) );

        return logs;   

    }

    async getLogs(level: LogSeverityLevel): Promise<LogEntity[]> {

        switch ( level ) {
            case LogSeverityLevel.low:
              return this.getLogsFromFile( this.lowLogsPath );

            case LogSeverityLevel.medium:
              return this.getLogsFromFile( this.mediumLogsPath );
              
            case LogSeverityLevel.high:
              return this.getLogsFromFile( this.highLogsPath );
        
            default:
                throw new Error(`${ level } not implemented`);
        }
    }


}