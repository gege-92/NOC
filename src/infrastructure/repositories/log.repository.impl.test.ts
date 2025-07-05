import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepositoryImpl } from "./log.repository.impl";




describe('log.repository.impl.ts', () => {

    const mockLogRepositoryImpl = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const logRepositoryImpl = new LogRepositoryImpl( mockLogRepositoryImpl );

    const log = new LogEntity({
        message: 'test message',
        level: LogSeverityLevel.low,
        origin: 'log.repository.impl.test.ts'
    });


    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('saveLog should call the datasource with arguments', async() => {

        await logRepositoryImpl.saveLog( log );

        expect( mockLogRepositoryImpl.saveLog ).toHaveBeenLastCalledWith( log );
        

    });


    test('getLogs should call the datasource with arguments', async() => {

        const lowSeverityLevel = LogSeverityLevel.low;

        await logRepositoryImpl.getLogs( lowSeverityLevel );

        expect( mockLogRepositoryImpl.getLogs ).toHaveBeenCalledWith( lowSeverityLevel );

    });

})