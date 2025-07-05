import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { SendEmailLogs } from "./send-email-logs";



describe('send-email-logs.ts', () => {

    const mockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    }

    const mockEmailService = {
        sendEmail: jest.fn(),
        sendEmailWithFileSystemLogs: jest.fn().mockReturnValue( true ),
    }
    
    const sendEmailLogs = new SendEmailLogs(
        mockLogRepository,
        mockEmailService as any
    );

    beforeEach( () => {
        jest.clearAllMocks();
    });


    test('should call SendEmail and save log', async() => {

        const send = await sendEmailLogs.execute( 'test@test.com' );     

        expect( send ).toBe( true );
        expect( mockEmailService.sendEmailWithFileSystemLogs ).toHaveBeenCalledTimes(1);
        expect( mockLogRepository.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepository.saveLog ).toHaveBeenCalledWith({
            createAt: expect.any( Date ),
            level: "low",
            message: "Email sent successfully",
            origin: "send-email-logs.ts"
        });

    });


    test('should return false and log the error', async() => {

        mockEmailService.sendEmailWithFileSystemLogs.mockResolvedValue( false );

        const send = await sendEmailLogs.execute( 'test@test.com' );     

        expect( send ).toBe( false );
        expect( mockLogRepository.saveLog ).toHaveBeenCalledWith( expect.any( LogEntity ) );
        expect( mockLogRepository.saveLog ).toHaveBeenCalledWith({
            createAt: expect.any( Date ),
            level: "high",
            message: "Email not sent. Error: Email log not sent",
            origin: "send-email-logs.ts"
        });

    });

})