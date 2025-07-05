import path from "path"
import { FileSystemDatasource } from "./file-system.datasource"
import fs from "fs";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


describe('file-system.datasource.ts', () => {

    const logPath = path.join( __dirname, '../../../logs');

    beforeEach( () => {
        fs.rmSync( logPath, { recursive: true, force: true } );
    });


    test('should create logs files if they do noy exists', () => {

        new FileSystemDatasource();
        const files = fs.readdirSync( logPath );

        expect( files ).toEqual([ 'logs-all.log', 'logs-high.log', 'logs-low.log', 'logs-medium.log' ]);
        
    });


    test('should save a log in /logs-all.log & /logs-low.log', () => {

        const fileSystemLogDatasource = new FileSystemDatasource();

        const log = new LogEntity({
            message: 'Test message',
            level: LogSeverityLevel.low,
            origin: 'file-system.datasource.test.ts'
        });

        fileSystemLogDatasource.saveLog( log );

        const allLogs = fs.readFileSync( `${ logPath }/logs-all.log`, 'utf-8' );
        const allLogsLow = fs.readFileSync( `${ logPath }/logs-low.log`, 'utf-8' );

        expect( allLogs ).toContain( JSON.stringify(log) );
        expect( allLogsLow ).toContain( JSON.stringify(log) );

    });


    test('should save a log in /logs-all.log & /logs-medium.log', () => {

        const fileSystemLogDatasource = new FileSystemDatasource();

        const log = new LogEntity({
            message: 'Test message',
            level: LogSeverityLevel.medium,
            origin: 'file-system.datasource.test.ts'
        });

        fileSystemLogDatasource.saveLog( log );

        const allLogs = fs.readFileSync( `${ logPath }/logs-all.log`, 'utf-8' );
        const allLogsMedium = fs.readFileSync( `${ logPath }/logs-medium.log`, 'utf-8' );

        expect( allLogs ).toContain( JSON.stringify(log) );
        expect( allLogsMedium ).toContain( JSON.stringify(log) );

    });


    test('should save a log in /logs-all.log & /logs-high.log', () => {

        const fileSystemLogDatasource = new FileSystemDatasource();

        const log = new LogEntity({
            message: 'Test message',
            level: LogSeverityLevel.high,
            origin: 'file-system.datasource.test.ts'
        });

        fileSystemLogDatasource.saveLog( log );

        const allLogs = fs.readFileSync( `${ logPath }/logs-all.log`, 'utf-8' );
        const allLogsHigh = fs.readFileSync( `${ logPath }/logs-high.log`, 'utf-8' );

        expect( allLogs ).toContain( JSON.stringify(log) );
        expect( allLogsHigh ).toContain( JSON.stringify(log) );

    });


})