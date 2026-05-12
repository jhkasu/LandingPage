import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'AUTOPRIME'
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || ''
const GMAIL_USER = process.env.GMAIL_USER || ''
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || ''
const SMS_GATEWAY_EMAIL = process.env.SMS_GATEWAY_EMAIL || ''

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { vin, miles, color, accidentHistory, financialStatus, vehicleOptions, fullName, email, phone } = body

  if (!vin || !miles || !color || !accidentHistory || !financialStatus || !fullName || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const optionsList: string[] = Array.isArray(vehicleOptions) ? vehicleOptions : []
  const optionsDisplay = optionsList.length > 0 ? optionsList.join(', ') : 'None'

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !RECIPIENT_EMAIL) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  })

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" />
      <style>
        body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 40px 20px; }
        .card { background: white; border-radius: 16px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
        .header { background: #0D1B2A; padding: 32px 36px; }
        .header h1 { color: white; font-size: 20px; font-weight: 900; margin: 0 0 4px; }
        .header p { color: #F0A500; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0; }
        .body { padding: 32px 36px; }
        .section-title { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #F0A500; margin: 24px 0 12px; }
        .section-title:first-child { margin-top: 0; }
        .field { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
        .field:last-child { border-bottom: none; }
        .label { font-size: 12px; color: #9ca3af; font-weight: 500; }
        .value { font-size: 13px; color: #1a1a1a; font-weight: 600; }
        .footer { background: #f9fafb; padding: 20px 36px; border-top: 1px solid #f3f4f6; }
        .footer p { font-size: 11px; color: #9ca3af; margin: 0; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>${COMPANY}</h1>
          <p>New Vehicle Quote Request</p>
        </div>
        <div class="body">
          <div class="section-title">Vehicle Details</div>
          <div class="field"><span class="label">VIN</span><span class="value">${vin}</span></div>
          <div class="field"><span class="label">Mileage</span><span class="value">${miles} miles</span></div>
          <div class="field"><span class="label">Exterior Color</span><span class="value">${color}</span></div>
          <div class="field"><span class="label">Accident History</span><span class="value">${accidentHistory}</span></div>
          <div class="section-title">Financial Status</div>
          <div class="field"><span class="label">Status</span><span class="value">${financialStatus}</span></div>
          <div class="section-title">Vehicle Options</div>
          <div class="field"><span class="label">Options</span><span class="value">${optionsDisplay}</span></div>
          <div class="section-title">Customer Contact</div>
          <div class="field"><span class="label">Name</span><span class="value">${fullName}</span></div>
          <div class="field"><span class="label">Email</span><span class="value">${email}</span></div>
          <div class="field"><span class="label">Phone</span><span class="value">${phone}</span></div>
        </div>
        <div class="footer">
          <p>Submitted via the ${COMPANY} vehicle appraisal form.</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    // ─── 이메일 발송 ───────────────────────────────────────────────
    await transporter.sendMail({
      from: `${COMPANY} <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${fullName} | ${vin}`,
      html,
    })

    // ─── SMS via Verizon email-to-SMS gateway ─────────────────────
    if (SMS_GATEWAY_EMAIL) {
      await transporter.sendMail({
        from: GMAIL_USER,
        to: SMS_GATEWAY_EMAIL,
        subject: '',
        text: `[AUTOPRIME] 새 견적\n${fullName} / ${phone}\nVIN: ${vin}\n${miles}mi / ${color}\n사고: ${accidentHistory} / ${financialStatus}\n옵션: ${optionsDisplay}`,
      })
    }
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
