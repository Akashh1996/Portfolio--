import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_AAbGAbsQ_2wgkbvaSRjewnnygD2wKG4xS');

export async function POST(req) {
  try {
    const body = await req.json()
    const { data } = await resend.emails.send({
        from: body.email,
        to: 'akashh.sapkota@gmail.com',
        subject: 'testing',
        html: `<h1>${body.message}</h1>`,
      });
      const lisnt = await resend.domains.list();
      await resend.domains.verify('af7230d7-d6dc-4179-a633-8e09aeac331a');

      console.log(lisnt);
      return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}