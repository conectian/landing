import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, time, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Conectian <waitlist@conectian.com>', 
      to: ['info@conectian.com', 'rafaeloriolorticarrio@gmail.com', 'pharoortega@gmail.com'],
      subject: 'Nueva solicitud de Waitlist',
      html: `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #334155; line-height: 1.5;">
          <div>Se ha recibido una nueva solicitud para la <strong>Waitlist de Conectian</strong>. Por favor, responde a la mayor brevedad posible.</div>
          <div
            style="
              margin-top: 20px;
              padding: 20px 0;
              border-width: 1px 0;
              border-style: dashed;
              border-color: #e2e8f0;
            "
          >
            <table role="presentation">
              <tr>
                <td style="vertical-align: top; padding-right: 15px;">
                  <div
                    style="
                      padding: 10px;
                      background-color: #f0f9ff;
                      border-radius: 50%;
                      font-size: 24px;
                      text-align: center;
                      width: 40px;
                      height: 40px;
                      line-height: 40px;
                    "
                    role="img"
                  >
                    👤
                  </div>
                </td>
                <td style="vertical-align: top">
                  <div style="color: #0f172a; font-size: 18px; margin-bottom: 4px;">
                    <strong>${name}</strong>
                  </div>
                  <div style="color: #94a3b8; font-size: 12px; margin-bottom: 15px;">${time}</div>
                  
                  <!-- Contenedor para el mensaje formateado -->
                  <div style="
                    background-color: #f8fafc; 
                    padding: 15px; 
                    border-radius: 10px; 
                    color: #334155; 
                    font-size: 15px; 
                    white-space: pre-wrap;
                  ">${message}</div>
                </td>
              </tr>
            </table>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
            Este mensaje ha sido generado automáticamente desde el formulario de la landing page.
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
