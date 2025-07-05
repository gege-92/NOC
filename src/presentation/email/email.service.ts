import nodemailer from 'nodemailer';
import { envs } from '../../config/envs.plugin';


export interface SendMailOptions {
    to: string | string[],
    subject: string,
    htmlBody: string,
    attachments?: Attachments[]
}


export interface Attachments {
    filename: string,
    path: string
}



export class EmailService {

    constructor(){}

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });


    async sendEmail( options: SendMailOptions ): Promise<boolean> {

        const { to, subject, htmlBody, attachments = [] } = options;

        try {

            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachments
            })

            //console.log( sentInformation );
            
            return true;
        } catch (error) {
            
            return false;
        }

    }

    async sendEmailWithFileSystemLogs( to:string | string[] ) {

        const subject = 'Logs del sistema';
        const htmlBody = `
            <h3>Logs</h3>
            <p>Logs del sistema segun su nivel de severidad</p>
            <p>Ver archivos adjuntos.</p>
        `;

        const attachments: Attachments[] = [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-low.log', path: './logs/logs-low.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' }
        ];


        return this.sendEmail({
            to,
            subject,
            htmlBody,
            attachments
        });
    }

}