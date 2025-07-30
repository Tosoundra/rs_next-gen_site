import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_BDBWxaro_ETxDTW527BSkXhSmwNiAeV3i');

export async function POST(request: NextRequest) {
  try {
    console.log('API endpoint called');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { fullname, company, email, message, budget } = body;

    console.log('Sending email with data:', { fullname, company, email, message, budget });

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['hayyabusa_01@mail.ru'],
      subject: `Новая заявка от ${fullname} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Новая заявка с сайта Ronix Systems
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Информация о клиенте:</h3>
            <p><strong>Имя:</strong> ${fullname}</p>
            <p><strong>Компания:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Бюджет:</strong> ${budget}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Сообщение:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 14px;">
              Это автоматическое уведомление с сайта Ronix Systems
            </p>
          </div>
        </div>
      `,
    });

    console.log('Resend response:', { data, error });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.log('Email sent successfully');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке email' },
      { status: 500 }
    );
  }
} 