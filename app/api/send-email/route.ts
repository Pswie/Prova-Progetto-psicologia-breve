import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Email addresses mapping
const EMAIL_MAPPING = {
  psicoterapia: 'psicoterapiabreve.cmt@outlook.it',
  counselling: 'counselling@cmt-ig.org',
} as const

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      nome, 
      cognome, 
      email, 
      telefono, 
      servizio,
      motivazione,
      preferenzeGiornoOrario,
      preferenzeZona,
      sessoTerapeuta,
      etaTerapeuta,
      formData 
    } = body

    // Determina l'email di destinazione
    const toEmail = EMAIL_MAPPING[servizio as keyof typeof EMAIL_MAPPING] || EMAIL_MAPPING.counselling

    // Crea l'HTML dell'email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              border-left: 4px solid hsl(142.1, 76.2%, 36.3%);
              padding-left: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: hsl(142.1, 76.2%, 36.3%);
              font-size: 24px;
              margin: 0 0 10px 0;
            }
            .header p {
              color: #666;
              margin: 0;
              font-size: 14px;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              color: hsl(142.1, 76.2%, 36.3%);
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 10px;
              border-bottom: 2px solid #f0f0f0;
              padding-bottom: 5px;
            }
            .info-row {
              display: flex;
              margin-bottom: 8px;
              padding: 8px;
              background-color: #f9f9f9;
              border-radius: 4px;
            }
            .info-label {
              font-weight: 600;
              color: #555;
              min-width: 180px;
            }
            .info-value {
              color: #333;
              flex: 1;
            }
            .badge {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
            }
            .badge-psicoterapia {
              background-color: hsl(142.1, 70%, 95%);
              color: hsl(142.1, 76.2%, 36.3%);
            }
            .badge-counselling {
              background-color: hsl(24.6, 95%, 95%);
              color: hsl(24.6, 95%, 53%);
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #f0f0f0;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <h2 style="color: hsl(142.1, 76.2%, 36.3%); margin: 0;">Psicoterapia Breve & Counselling CMT</h2>
            </div>
            
            <div class="header">
              <h1>📋 Nuova Richiesta di Consulto</h1>
              <p>Una nuova richiesta è stata ricevuta dal sito web</p>
            </div>

            <div class="section">
              <div class="section-title">🎯 Servizio Richiesto</div>
              <div class="info-row">
                <span class="badge ${servizio === 'psicoterapia' ? 'badge-psicoterapia' : 'badge-counselling'}">
                  ${servizio === 'psicoterapia' ? 'PSICOTERAPIA BREVE' : 'COUNSELLING PSICOLOGICO'}
                </span>
              </div>
            </div>

            <div class="section">
              <div class="section-title">👤 Dati Personali</div>
              <div class="info-row">
                <span class="info-label">Nome e Cognome:</span>
                <span class="info-value">${nome} ${cognome}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">Telefono:</span>
                <span class="info-value"><a href="tel:${telefono}">${telefono}</a></span>
              </div>
            </div>

            ${motivazione ? `
            <div class="section">
              <div class="section-title">💭 Motivazione della Richiesta</div>
              <div style="padding: 15px; background-color: #f9f9f9; border-radius: 4px; border-left: 3px solid hsl(142.1, 76.2%, 36.3%);">
                ${motivazione}
              </div>
            </div>
            ` : ''}

            <div class="section">
              <div class="section-title">⚙️ Preferenze</div>
              ${preferenzeGiornoOrario ? `
              <div class="info-row">
                <span class="info-label">📅 Giorno e Orario:</span>
                <span class="info-value">${preferenzeGiornoOrario}</span>
              </div>
              ` : ''}
              ${preferenzeZona ? `
              <div class="info-row">
                <span class="info-label">📍 Zona:</span>
                <span class="info-value">${preferenzeZona}</span>
              </div>
              ` : ''}
              ${sessoTerapeuta && sessoTerapeuta !== 'nessuna' ? `
              <div class="info-row">
                <span class="info-label">👨‍⚕️ Sesso Terapeuta:</span>
                <span class="info-value">${sessoTerapeuta === 'maschile' ? 'Maschile' : 'Femminile'}</span>
              </div>
              ` : ''}
              ${etaTerapeuta && etaTerapeuta !== 'nessuna' ? `
              <div class="info-row">
                <span class="info-label">🎂 Età Terapeuta:</span>
                <span class="info-value">${
                  etaTerapeuta === 'giovane' ? 'Giovane (25-35 anni)' :
                  etaTerapeuta === 'media' ? 'Media età (36-50 anni)' :
                  'Esperto (50+ anni)'
                }</span>
              </div>
              ` : ''}
            </div>

            <div class="footer">
              <p><strong>Rete Psicoterapia Breve & Counselling CMT</strong></p>
              <p>Questo messaggio è stato inviato automaticamente dal form di contatto del sito web</p>
              <p style="margin-top: 10px;">
                <a href="https://prova-progetto-psicologia-breve.vercel.app" style="color: hsl(142.1, 76.2%, 36.3%);">
                  www.cmt-psicoterapiabreve.it
                </a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Invia l'email
    const { data, error } = await resend.emails.send({
      from: 'CMT Psicoterapia <onboarding@resend.dev>', // Sostituire con il dominio verificato
      to: [toEmail],
      replyTo: email,
      subject: `Nuova richiesta ${servizio === 'psicoterapia' ? 'Psicoterapia Breve' : 'Counselling'} - ${nome} ${cognome}`,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Errore nell\'invio dell\'email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Errore del server' }, { status: 500 })
  }
}
