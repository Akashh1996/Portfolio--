import { NextResponse } from 'next/server';
import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
    service: process.env.SERVICE,
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(req) {
    const body = await req.json();

    const { name, email, message } = body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        html: `<p>Email: ${email}</p>\n\n${message.replace(/\n/g, '<br>')}`,
        replyTo: email,
    };

    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
