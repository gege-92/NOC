import mongoose from "mongoose";
import { MongoDatabase } from "../init"
import { LogModel } from "./log.model"
import { envs } from "../../../config/envs.plugin";




describe('log.model.ts', () => {

    beforeAll( async() => {
        await MongoDatabase.connect({
            mongoUrl: envs.MONGO_URL,
            dbName: envs.MONGO_DB_NAME
        });
    });

    afterAll( async() => {
        await mongoose.connection.close();
    });


    test('should return LogModel', async() => {

        const logData = {
            level: 'low',
            message: 'Test message',
            origin: 'log.model.test.ts'
        }

        const log = await LogModel.create( logData );

        expect( log ).toEqual( expect.objectContaining({
            ...logData,
            id: expect.any(String),
            createdAt: expect.any(Date)
        }));

        await LogModel.findByIdAndDelete( log.id ); //elimino el log de testing

    });


    test('should return the schema object', () => {

        const schema = LogModel.schema.obj;

        //console.log( schema );

        expect( schema ).toEqual( expect.objectContaining({
            message: { type: expect.any(Function), require: true },  //type es una function
            origin: { type: expect.any(Function) },
            level: {
                type: expect.any(Function),
                enum: [ 'low', 'medium', 'high' ],
                default: 'low'
            },
            createdAt: expect.any(Object)
        }))

    });


})