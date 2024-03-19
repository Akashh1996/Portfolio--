import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_9ZCfaV36_PbbhghpfH7QxndYfQ6FPLKMp');

export async function POST(req) {
  try {
    const body = await req.json()
    const { data } = await resend.emails.send({
        from: body.email,
        to: 'akashh.sapkota@gmail.com',
        subject: 'testing',
        html: `<h1>${body.message}</h1>`,
      });
      return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}