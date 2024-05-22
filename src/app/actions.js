'use server';

import nodeMailer from 'nodemailer';

const sanitize = (d) => JSON.parse(JSON.stringify(d));

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

export async function sendEmail(body) {
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
        return sanitize({ message: 'Message sent successfully' }, { status: 200 })
    } catch (error) {
        console.log(error);;
    }
}
