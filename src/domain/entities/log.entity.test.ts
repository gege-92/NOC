import { LogEntity, LogSeverityLevel } from "./log.entity"



describe('log.entity.ts', () => {
    
    const dataObj = {
        message:'Test message',
        level: LogSeverityLevel.low,
        origin: 'log.entity.test.ts'
    }

    test('should create a LogEntity instance', () => {

        const log = new LogEntity( dataObj );

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createAt ).toBeInstanceOf( Date );

    })


    test('should create a LogEntity instance from json', () => {

        const json = `{"message":"Service: https://www.google.com is working","level":"low","createAt":"2025-06-23T09:56:30.076Z","origin":"check-service.ts"}`;

        const log = LogEntity.fromJSON( json );

        expect( log.message ).toBe( "Service: https://www.google.com is working" );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe( "check-service.ts" );
        expect( log.createAt ).toBeInstanceOf( Date );

    });


    test('should create a LogEntity instance from Object', () => {

        const log = LogEntity.fromObject( dataObj );

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createAt ).toBeInstanceOf( Date );

    });


});