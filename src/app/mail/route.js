import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_9ZCfaV36_PbbhghpfH7QxndYfQ6FPLKMp');

export async function GET() {
  try {
    const { data } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'akashh.sapkota@gmail.com',
        subject: 'Hello World',
        html: '<h1>hello akashh</h1>',
      });
      return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}