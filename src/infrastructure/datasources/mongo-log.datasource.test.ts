import mongoose from "mongoose";
import { envs } from "../../config/envs.plugin";
import { LogModel, MongoDatabase } from "../../data/mongo"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { MongoLogDatasource } from "./mongo-log.datasource"




describe('mongo-log.datasource.ts', () => {

    const mongoLogDatasource = new MongoLogDatasource();

    const newLog = new LogEntity({
            message: 'test message',
            level: LogSeverityLevel.low,
            origin: 'mongo-log.datasource.test.ts'
        });

    beforeAll( async() => {

        await MongoDatabase.connect({
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME
        });

    })

    afterEach( async() => {
        await LogModel.deleteMany();
    })

    afterAll( () => {
        mongoose.connection.close();
    })

    test('should create a log', async() => {

        const logSpy = jest.spyOn(console, 'log');

        await mongoLogDatasource.saveLog( newLog );

        expect( logSpy ).toHaveBeenCalled();
        expect( logSpy ).toHaveBeenCalledWith("Mongo log created: ", expect.any(String));

    });


    test('should get logs', async() => {

        await mongoLogDatasource.saveLog( newLog );

        const logs = await mongoLogDatasource.getLogs( LogSeverityLevel.low );

        expect( logs.length ).toBe(1);
        expect( logs[0].level ).toBe( LogSeverityLevel.low );
    })
    
})