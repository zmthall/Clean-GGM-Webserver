import { ServiceError } from '../../../utility/error-handling/frameworkError.js';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import 'dotenv/config';

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export const messageService = {
    sendEmail: async (email) => {
        const accessToken = oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
                type: 'oauth2',
                user: process.env.EMAIL_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        try {
            const sendMessageResponse = await transport.sendMail(email);
            transport.close();
            return sendMessageResponse;
        } catch (error) {
            transport.close();
            console.error(error);
            throw new ServiceError({ message: 'Failed to send email.', error });
        }
    },
    sendSMTP: async (email) => {
        const transporter = nodemailer.createTransport({
            host: process.env.BREVO_SMTP_SERVER,
            port: process.env.BREVO_PORT,
            secure: true,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.BREVO_USER,
                pass: process.env.BREVO_SMTP_KEY
            }
        })

        try {
            const sendMessageResponse = await transporter.sendMail(email);
            transporter.close();
            return sendMessageResponse;
        } catch (error) {
            transporter.close();
            console.error(error);
            throw new ServiceError({ message: 'Failed to send email.', error });
        }
    }
}