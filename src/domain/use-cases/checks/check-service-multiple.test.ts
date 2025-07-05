import { LogEntity } from "../../entities/log.entity";
import { CheckServiceMultiple } from "./check-service-multiple"



describe('check-service-multiple.ts', () => {

    const mockLogRepo1 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const mockLogRepo2 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }
    
    const mockLogRepo3 = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }
    
    const successCallback = jest.fn();
    const errorCallback = jest.fn();
    
    const checkServiceMultiple = new CheckServiceMultiple(
        [mockLogRepo1, mockLogRepo2, mockLogRepo3],
        successCallback,
        errorCallback
    );

    beforeEach( () => {
        jest.clearAllMocks();
    });


    test('should call successCallback when fetch return true', async() => {


        const wasOk = await checkServiceMultiple.execute('https://www.google.com');

        expect( wasOk ).toBe( true );
        expect( successCallback ).toHaveBeenCalled();
        expect( errorCallback ).not.toHaveBeenCalled();
        expect( mockLogRepo1.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepo2.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepo3.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );

    })


    test('should call errorCallback when fetch return false', async() => {


        const wasOk = await checkServiceMultiple.execute('TEST-URL');

        expect( wasOk ).toBe( false );
        expect( successCallback ).not.toHaveBeenCalled();
        expect( errorCallback ).toHaveBeenCalled();
        expect( mockLogRepo1.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepo2.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepo3.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );

    })

})