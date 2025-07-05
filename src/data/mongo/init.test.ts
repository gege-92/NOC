import mongoose from "mongoose";
import { MongoDatabase } from "./init"



describe('init.ts', () => {

    afterAll( () => {
        mongoose.connection.close();
    })

    test('should connect to MongoDB', async() => {

        const connected = await MongoDatabase.connect({
            mongoUrl: process.env.MONGO_URL!,
            dbName: process.env.MONGO_DB_NAME!
        });

        expect( connected ).toBe( true );

    });


    test('should throw an error', async() => {

        try {
            const connected = await MongoDatabase.connect({
                mongoUrl: 'process.env.MONGO_URL!',
                dbName: process.env.MONGO_DB_NAME!
            });

            expect( true ).toBe( false );
        } catch (error) {

        }

    })



})