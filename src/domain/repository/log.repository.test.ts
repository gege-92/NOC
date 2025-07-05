import { LogDatasource } from "../datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../entities/log.entity"



describe('log.datasource.ts', () => {

    const newLog = new LogEntity({
        message: 'Test message',
        origin: 'log.datasource.test.ts',
        level: LogSeverityLevel.low
    });

    class MockLogDatasource implements LogDatasource {

        async saveLog(log: LogEntity): Promise<void> {
            return;
        }


        async getLogs(level: LogSeverityLevel): Promise<LogEntity[]> {
            return [newLog];
        }

    }
    


    test('should test the abstract class', async() => {

        const mockLogDatasource = new MockLogDatasource();

        expect( mockLogDatasource ).toBeInstanceOf( MockLogDatasource );

        expect( typeof mockLogDatasource.saveLog ).toBe( 'function' ); 
        expect( typeof mockLogDatasource.getLogs ).toBe( 'function' );

        await mockLogDatasource.saveLog( newLog );

        const logs = await mockLogDatasource.getLogs(LogSeverityLevel.low);
        expect( logs ).toHaveLength(1);
        expect( logs[0] ).toBeInstanceOf( LogEntity );
        expect( logs[0] ).toEqual( newLog );

    })


});