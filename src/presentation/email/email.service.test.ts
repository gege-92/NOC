import nodemailer from 'nodemailer';
import { EmailService, SendMailOptions, Attachments } from './email.service';



describe('email.service.ts', () => {

    const mockSendMail = jest.fn();

    nodemailer.createTransport = jest.fn().mockReturnValue({
        sendMail: mockSendMail
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    const emailService = new EmailService();

    test('should send email', async() => {

        const options: SendMailOptions = {
            to: 'test@test.com',
            subject: 'test message',
            htmlBody: `<h1>Test</h1>`,
        }

        await emailService.sendEmail( options );

        expect( mockSendMail ).toHaveBeenCalledWith({
            attachments: expect.any(Array),
            html: "<h1>Test</h1>",
            subject: "test message",
            to: "test@test.com",
        });

    });


    test('send email with attachments', async() => {

        await emailService.sendEmailWithFileSystemLogs('test@test.com');

        expect( mockSendMail ).toHaveBeenCalledWith({
            attachments: expect.arrayContaining([
                { filename: 'logs-all.log', path: './logs/logs-all.log' },
                { filename: 'logs-low.log', path: './logs/logs-low.log' },
                { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
                { filename: 'logs-high.log', path: './logs/logs-high.log' }
            ]),
            html: expect.any(String),
            subject: 'Logs del sistema',
            to: 'test@test.com'
        });
    })

});