'use client'

import { useState } from 'react'

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'AUTOPRIME'

// ─── Translations ─────────────────────────────────────────────────────────────
const translations = {
  en: {
    logoTagline: 'AUTO SALES, LEASING, & TRADE IN',
    heroTag: 'Vehicle Appraisal',
    heroTitle1: 'Best Price on',
    heroTitle2: 'Lease & Used Vehicles',
    heroSub: 'Better prices than CarMax',
    heroSubSmall: 'Instant Contact · Same-Day Pickup · Fast Payment',
    heroCta: 'Get Your Price in One Click',
    processTitle: 'The Smarter Way to Sell Your Car',
    steps: [
      { title: 'Fill Out in Minutes', desc: 'Enter your VIN and a few vehicle details. No lengthy paperwork, no appointments needed.' },
      { title: 'Expert Evaluation', desc: 'Our specialist reviews your submission and prepares a real, personalized offer.' },
      { title: 'Same-Day Response', desc: 'We reach out with a competitive, market-based offer.' },
      { title: 'We Come to You', desc: "Accept the offer and we'll pick up your vehicle at any location, on your schedule." },
    ],
    formEyebrow: 'Vehicle Appraisal',
    formTitle: 'Tell Us About Your Vehicle',
    formSub: 'Accurate information helps us provide a faster, more precise offer.',
    vinLabel: 'Vehicle Identification Number (VIN)',
    vinPlaceholder: 'VIN (17 DIGITS)',
    mileageLabel: 'Total Accumulated Miles',
    colorLabel: 'Exterior Finish',
    accidentLabel: 'Accident History',
    accidentOptions: [
      { label: 'No Accident', value: 'NO ACCIDENT' },
      { label: 'Minor', value: 'MINOR' },
      { label: 'Major', value: 'MAJOR' },
    ],
    financeLabel: 'Financial Status',
    financeOptions: [
      { label: 'Finance', value: 'FINANCE' },
      { label: 'Lease', value: 'LEASE' },
      { label: 'Paid in Full', value: 'PAID IN FULL' },
    ],
    optionsLabel: 'Vehicle Options (Select All That Apply)',
    vehicleOptions: [
      { label: 'Heated Seats', value: 'HEATED_SEATS' },
      { label: 'Cooled Seats', value: 'COOLED_SEATS' },
      { label: 'Sunroof', value: 'SUNROOF' },
      { label: 'Leather Seats', value: 'LEATHER_SEATS' },
      { label: 'Power Trunk', value: 'POWER_TRUNK' },
      { label: 'Parking Sensor', value: 'PARKING_SENSOR' },
      { label: 'Smart Key', value: 'SMART_KEY' },
      { label: 'Premium Package', value: 'PREMIUM_PKG' },
      { label: 'M Sport PKG', value: 'M_SPORT_PKG' },
    ],
    nameLabel: 'Full Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'example@email.com',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '(000) 000-0000',
    privacy: `Privacy Policy — I acknowledge the Privacy Policy and authorize the ${COMPANY} team to contact me via Phone/SMS/Email regarding this appraisal.`,
    submit: 'Get My Offer',
    sending: 'Sending...',
    successTitle: "You're All Set!",
    successDesc: "We've received your vehicle details. A specialist will contact you shortly with a competitive offer.",
    footerTagline: 'Best lease deals. Best prices. No hassle. We make car buying simple.',
    footerContact: 'Contact',
    footerLegal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    dataRights: 'Data Privacy Rights',
    copyright: `© 2026 ${COMPANY}. All Rights Reserved.`,
  },
  ko: {
    logoTagline: '자동차 판매 · 리스 · 트레이드인',
    heroTag: '차량 감정 견적',
    heroTitle1: '최고의 가격으로',
    heroTitle2: '리스 & 중고차 거래',
    heroSub: 'CarMax보다 더 좋은 가격',
    heroSubSmall: '즉시 연락 · 당일 픽업 · 빠른 입금',
    heroCta: '한 번에 견적 받기',
    processTitle: '더 똑똑하게 차를 파는 방법',
    steps: [
      { title: '간단한 정보 입력', desc: 'VIN과 차량 정보 몇 가지만 입력하세요. 복잡한 서류, 방문 약속 필요 없습니다.' },
      { title: '전문가 검토', desc: '전문 담당자가 직접 검토하여 실제 적용 가능한 맞춤 견적을 준비합니다.' },
      { title: '당일 답변', desc: '시장가 기반 경쟁력 있는 견적으로 당일 안에 연락드립니다.' },
      { title: '방문 픽업', desc: '견적 수락 시 원하시는 시간과 장소로 직접 차량을 픽업하러 갑니다.' },
    ],
    formEyebrow: '차량 감정',
    formTitle: '차량 정보를 알려주세요',
    formSub: '정확한 정보를 입력해주시면 더 빠르고 정확한 견적이 가능합니다.',
    vinLabel: '차대번호 (VIN)',
    vinPlaceholder: 'VIN (17자리)',
    mileageLabel: '총 주행거리',
    colorLabel: '외장 색상',
    accidentLabel: '사고 이력',
    accidentOptions: [
      { label: '무사고', value: 'NO ACCIDENT' },
      { label: '경미한 사고', value: 'MINOR' },
      { label: '중대 사고', value: 'MAJOR' },
    ],
    financeLabel: '금융 상태',
    financeOptions: [
      { label: '파이낸스', value: 'FINANCE' },
      { label: '리스', value: 'LEASE' },
      { label: '완납', value: 'PAID IN FULL' },
    ],
    optionsLabel: '차량 옵션 (해당 사항 모두 선택)',
    vehicleOptions: [
      { label: '열선시트', value: 'HEATED_SEATS' },
      { label: '통풍시트', value: 'COOLED_SEATS' },
      { label: '선루프', value: 'SUNROOF' },
      { label: '가죽시트', value: 'LEATHER_SEATS' },
      { label: '트렁크 자동', value: 'POWER_TRUNK' },
      { label: '파킹센서', value: 'PARKING_SENSOR' },
      { label: '스마트키', value: 'SMART_KEY' },
      { label: '프리미엄 패키지', value: 'PREMIUM_PKG' },
      { label: 'M Sport PKG', value: 'M_SPORT_PKG' },
    ],
    nameLabel: '성함',
    namePlaceholder: '홍길동',
    emailLabel: '이메일',
    emailPlaceholder: 'example@email.com',
    phoneLabel: '연락처',
    phonePlaceholder: '(000) 000-0000',
    privacy: `개인정보 처리방침 — 본인은 개인정보 처리방침을 확인하였으며, 본 견적과 관련하여 ${COMPANY} 팀이 전화/SMS/이메일로 연락하는 것에 동의합니다.`,
    submit: '견적 받기',
    sending: '전송 중...',
    successTitle: '접수 완료!',
    successDesc: '차량 정보가 접수되었습니다. 전문가가 곧 경쟁력 있는 견적을 가지고 연락드릴 예정입니다.',
    footerTagline: '최고의 리스 조건, 최고의 가격, 번거로움 없이 차량 거래를 간편하게 만듭니다.',
    footerContact: '연락처',
    footerLegal: '법적 고지',
    privacyPolicy: '개인정보 처리방침',
    terms: '이용약관',
    dataRights: '개인정보 권리',
    copyright: `© 2026 ${COMPANY}. All Rights Reserved.`,
  },
}

type Lang = 'en' | 'ko'

// ─── Colors ───────────────────────────────────────────────────────────────────
const COLORS = [
  { value: 'WHITE',  label: { en: 'White',  ko: '화이트' }, hex: '#FFFFFF', border: '#E5E7EB' },
  { value: 'BLACK',  label: { en: 'Black',  ko: '블랙' },  hex: '#000000' },
  { value: 'SILVER', label: { en: 'Silver', ko: '실버' },  hex: '#D4D8DC' },
  { value: 'GREY',   label: { en: 'Grey',   ko: '그레이' }, hex: '#374151' },
  { value: 'BLUE',   label: { en: 'Blue',   ko: '블루' },  hex: '#0066FF' },
  { value: 'RED',    label: { en: 'Red',    ko: '레드' },  hex: '#FF1F1F' },
  { value: 'GOLD',   label: { en: 'Gold',   ko: '골드' },  hex: '#FFB800' },
  { value: 'GREEN',  label: { en: 'Green',  ko: '그린' },  hex: '#00A03B' },
  { value: 'BROWN',  label: { en: 'Brown',  ko: '브라운' }, hex: '#7B3F0F' },
  { value: 'OTHER',  label: { en: 'Other',  ko: '기타' },  hex: 'linear-gradient(135deg,#A0A8B0 0%,#D8DCE0 50%,#F0F2F4 100%)' },
]

interface FormData {
  vin: string
  miles: string
  color: string
  accidentHistory: string
  financialStatus: string
  vehicleOptions: string[]
  fullName: string
  email: string
  phone: string
  consent: boolean
}

const initialForm: FormData = {
  vin: '', miles: '', color: '', accidentHistory: '',
  financialStatus: '', vehicleOptions: [],
  fullName: '', email: '', phone: '', consent: false,
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ lang, setLang, tr }: { lang: Lang; setLang: (l: Lang) => void; tr: typeof translations.en }) {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: '#0F1B2D', padding: '18px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.5px', lineHeight: 1 }}>
          <span style={{ color: '#FFFFFF' }}>Auto</span>
          <span style={{ color: '#E5C77B' }}>Prime</span>
        </span>
        <span className="logo-tagline" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, letterSpacing: '2.5px', fontWeight: 500, textTransform: 'uppercase' }}>{tr.logoTagline}</span>
      </a>
      <div style={{ display: 'flex', gap: 4, fontSize: 12 }}>
        <button onClick={() => setLang('ko')} style={{ background: lang === 'ko' ? '#E5C77B' : 'transparent', border: 'none', cursor: 'pointer', color: lang === 'ko' ? '#0F1B2D' : 'rgba(255,255,255,0.5)', padding: '5px 12px', borderRadius: 4, fontSize: 12, fontFamily: 'inherit', fontWeight: lang === 'ko' ? 600 : 400 }}>한국어</button>
        <button onClick={() => setLang('en')} style={{ background: lang === 'en' ? '#E5C77B' : 'transparent', border: 'none', cursor: 'pointer', color: lang === 'en' ? '#0F1B2D' : 'rgba(255,255,255,0.5)', padding: '5px 12px', borderRadius: 4, fontSize: 12, fontFamily: 'inherit', fontWeight: lang === 'en' ? 600 : 400 }}>EN</button>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ tr }: { tr: typeof translations.en }) {
  return (
    <section className="hero" style={{ background: '#FBF7E8', color: '#0F1B2D', padding: '88px 32px 96px', textAlign: 'center', borderBottom: '1px solid #E8E4D6' }}>
      <div style={{ display: 'inline-block', background: 'rgba(168,127,26,0.12)', color: '#A87F1A', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', padding: '6px 14px', borderRadius: 4, marginBottom: 24 }}>{tr.heroTag}</div>
      <h1 className="hero-h1" style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.2, marginBottom: 20, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto', color: '#2D2418', letterSpacing: '-0.5px' }}>
        <span>{tr.heroTitle1}</span><br />
        <span style={{ color: '#A87F1A' }}>{tr.heroTitle2}</span>
      </h1>
      <p style={{ fontSize: 18, color: '#8B7B5C', marginBottom: 10 }}>{tr.heroSub}</p>
      <p style={{ fontSize: 13, color: '#B5A989', marginBottom: 36, letterSpacing: '0.5px' }}>{tr.heroSubSmall}</p>
      <a href="#appraisal" style={{ display: 'inline-block', background: '#0F1B2D', color: '#E5C77B', padding: '16px 36px', borderRadius: 6, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>{tr.heroCta}</a>
    </section>
  )
}

// ─── Process Section ─────────────────────────────────────────────────────────
function Process({ tr }: { tr: typeof translations.en }) {
  return (
    <section style={{ padding: '72px 32px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 className="process-title" style={{ fontSize: 32, fontWeight: 700, color: '#2D2418', lineHeight: 1.3 }}>{tr.processTitle}</h2>
        </div>
        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {tr.steps.map((step, i) => (
            <div key={i} className="process-card" style={{ background: '#E0F2FE', border: '1px solid #BAE6FD', borderRadius: 10, padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ color: '#0369A1', fontSize: 32, fontWeight: 700, marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#0F1B2D', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Form ─────────────────────────────────────────────────────────────────────
function Form({ lang, tr, onSubmit, submitting }: {
  lang: Lang; tr: typeof translations.en; onSubmit: (form: FormData) => void; submitting: boolean
}) {
  const [form, setForm] = useState<FormData>(initialForm)

  function set<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function toggleOption(value: string) {
    setForm(prev => ({
      ...prev,
      vehicleOptions: prev.vehicleOptions.includes(value)
        ? prev.vehicleOptions.filter(v => v !== value)
        : [...prev.vehicleOptions, value],
    }))
  }

  const canSubmit =
    form.vin.trim().length === 17 && form.miles.trim().length > 0 &&
    form.color !== '' && form.accidentHistory !== '' &&
    form.financialStatus !== '' && form.fullName.trim() !== '' &&
    form.email.trim() !== '' && form.phone.trim() !== '' && form.consent

  const labelStyle: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, color: '#A87F1A', letterSpacing: '2px', marginBottom: 12, textTransform: 'uppercase' }
  const inputStyle: React.CSSProperties = { width: '100%', border: '1px solid #E8E4D6', borderRadius: 10, padding: '22px 24px', fontSize: 18, fontFamily: 'inherit', color: '#2D2418', background: '#FFFFFF', outline: 'none' }

  return (
    <section className="form-section" id="appraisal" style={{ background: '#FDFBF2', padding: '80px 32px' }}>
      <div className="form-card" style={{ maxWidth: 760, margin: '0 auto', background: '#FFFFFF', borderRadius: 12, padding: 48, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ fontSize: 11, color: '#A87F1A', letterSpacing: '2px', fontWeight: 700, marginBottom: 10, textTransform: 'uppercase', textAlign: 'center' }}>{tr.formEyebrow}</div>
        <h2 className="form-h2" style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, textAlign: 'center', color: '#2D2418' }}>{tr.formTitle}</h2>
        <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 40, textAlign: 'center' }}>{tr.formSub}</p>

        {/* VIN */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.vinLabel}</label>
          <input style={inputStyle} type="text" placeholder={tr.vinPlaceholder} maxLength={17} value={form.vin} onChange={e => set('vin', e.target.value.toUpperCase())} />
        </div>

        {/* Mileage */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.mileageLabel}</label>
          <div style={{ position: 'relative' }}>
            <input style={inputStyle} type="text" placeholder="00,000" value={form.miles} onChange={e => {
              const digits = e.target.value.replace(/\D/g, '')
              set('miles', digits ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '')
            }} />
            <span style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', fontSize: 12, color: '#9CA3AF', letterSpacing: '1.5px' }}>MILES</span>
          </div>
        </div>

        {/* Color */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.colorLabel}</label>
          <div className="swatch-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
            {COLORS.map(c => {
              const selected = form.color === c.value
              return (
                <button key={c.value} type="button" onClick={() => set('color', c.value)} style={{
                  background: '#FFFFFF',
                  border: selected ? '1px solid #A87F1A' : '1px solid #E8E4D6',
                  boxShadow: selected ? '0 0 0 1.5px #A87F1A' : 'none',
                  borderRadius: 8,
                  padding: 6,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  textAlign: 'center',
                  fontFamily: 'inherit',
                }}>
                  <div style={{
                    width: '100%',
                    aspectRatio: '1.6 / 1',
                    borderRadius: 5,
                    marginBottom: 6,
                    border: '1px solid rgba(0,0,0,0.06)',
                    background: c.hex,
                  }} />
                  <div style={{ fontSize: 11, fontWeight: 500, color: '#2D2418', letterSpacing: '0.3px', lineHeight: 1.3, paddingBottom: 2 }}>{c.label[lang]}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Accident */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.accidentLabel}</label>
          <div className="option-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {tr.accidentOptions.map(opt => (
              <OptionCard key={opt.value} label={opt.label} active={form.accidentHistory === opt.value} onClick={() => set('accidentHistory', opt.value)} />
            ))}
          </div>
        </div>

        {/* Finance */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.financeLabel}</label>
          <div className="option-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {tr.financeOptions.map(opt => (
              <OptionCard key={opt.value} label={opt.label} active={form.financialStatus === opt.value} onClick={() => set('financialStatus', opt.value)} />
            ))}
          </div>
        </div>

        {/* Vehicle Options (multi-select) */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.optionsLabel}</label>
          <div className="multi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {tr.vehicleOptions.map(opt => {
              const active = form.vehicleOptions.includes(opt.value)
              return (
                <button key={opt.value} type="button" onClick={() => toggleOption(opt.value)} style={{
                  background: active ? '#F5EDD0' : '#FFFFFF',
                  border: active ? '1px solid #A87F1A' : '1px solid #E8E4D6',
                  boxShadow: active ? '0 0 0 1px #A87F1A' : 'none',
                  borderRadius: 8,
                  padding: '12px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 13,
                  fontWeight: 500,
                  color: active ? '#8B6815' : '#6B7280',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                }}>
                  <span style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: active ? '1.5px solid #A87F1A' : '1.5px solid #D1D5DB',
                    background: active ? '#A87F1A' : 'transparent',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {active && (
                      <span style={{
                        width: 8, height: 5,
                        borderLeft: '2px solid white',
                        borderBottom: '2px solid white',
                        transform: 'rotate(-45deg) translateY(-1px)',
                      }} />
                    )}
                  </span>
                  <span>{opt.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Name */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>{tr.nameLabel}</label>
          <input style={inputStyle} type="text" placeholder={tr.namePlaceholder} value={form.fullName} onChange={e => set('fullName', e.target.value)} />
        </div>

        {/* Email + Phone */}
        <div className="row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ marginBottom: 32 }}>
            <label style={labelStyle}>{tr.emailLabel}</label>
            <input style={inputStyle} type="email" placeholder={tr.emailPlaceholder} value={form.email} onChange={e => set('email', e.target.value)} />
          </div>
          <div style={{ marginBottom: 32 }}>
            <label style={labelStyle}>{tr.phoneLabel}</label>
            <input style={inputStyle} type="tel" placeholder={tr.phonePlaceholder} value={form.phone} onChange={e => {
              const d = e.target.value.replace(/\D/g, '').slice(0, 10)
              set('phone', d.length >= 7 ? `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}` : d.length >= 4 ? `(${d.slice(0,3)}) ${d.slice(3)}` : d.length > 0 ? `(${d}` : '')
            }} />
          </div>
        </div>

        {/* Privacy consent */}
        <label style={{ background: '#FDFBF2', borderRadius: 8, padding: '16px 18px', margin: '32px 0 24px', display: 'flex', gap: 12, fontSize: 13, color: '#6B7280', lineHeight: 1.6, cursor: 'pointer' }}>
          <input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)} style={{ marginTop: 3, flexShrink: 0, accentColor: '#A87F1A' }} />
          <span>
            <a href="/privacy-policy" style={{ color: '#A87F1A', fontWeight: 600, textDecoration: 'underline' }}>{tr.privacyPolicy}</a>
            {' — '}
            {tr.privacy.replace(/^[^—]+—\s*/, '')}
          </span>
        </label>

        <button
          onClick={() => canSubmit && onSubmit(form)}
          disabled={!canSubmit || submitting}
          style={{
            width: '100%',
            background: canSubmit && !submitting ? '#0F1B2D' : '#D1D5DB',
            color: canSubmit && !submitting ? '#E5C77B' : '#9CA3AF',
            padding: 18,
            border: 'none',
            borderRadius: 8,
            fontSize: 16,
            fontWeight: 600,
            cursor: canSubmit && !submitting ? 'pointer' : 'not-allowed',
            fontFamily: 'inherit',
            letterSpacing: '1px',
          }}
        >
          {submitting ? tr.sending : tr.submit}
        </button>
      </div>
    </section>
  )
}

function OptionCard({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} style={{
      background: active ? '#F5EDD0' : '#FFFFFF',
      border: active ? '1px solid #A87F1A' : '1px solid #E8E4D6',
      boxShadow: active ? '0 0 0 1px #A87F1A' : 'none',
      color: active ? '#A87F1A' : '#6B7280',
      borderRadius: 10,
      padding: '16px 18px',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontFamily: 'inherit',
    }}>
      {label}
    </button>
  )
}

// ─── Success ──────────────────────────────────────────────────────────────────
function SuccessScreen({ tr }: { tr: typeof translations.en }) {
  return (
    <div style={{ background: '#FDFBF2', padding: '80px 32px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', background: '#FFFFFF', borderRadius: 12, padding: 60, textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F5EDD0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A87F1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#2D2418', marginBottom: 12 }}>{tr.successTitle}</h2>
        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{tr.successDesc}</p>
      </div>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ tr }: { tr: typeof translations.en }) {
  return (
    <footer style={{ background: '#0F1B2D', color: 'rgba(255,255,255,0.7)', padding: '48px 32px 24px' }}>
      <div className="footer-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, marginBottom: 32 }}>
        <div>
          <div style={{ color: '#E5C77B', fontSize: 18, fontWeight: 600, letterSpacing: '1.5px', marginBottom: 12 }}>{COMPANY}</div>
          <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 320 }}>{tr.footerTagline}</p>
        </div>
        <div>
          <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{tr.footerContact}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}>autoprimeinc24@gmail.com</li>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}>6281 Beach Blvd</li>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}>Buena Park, CA 90621</li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{tr.footerLegal}</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}><a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{tr.privacyPolicy}</a></li>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}><a href="/terms" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{tr.terms}</a></li>
            <li style={{ fontSize: 13, lineHeight: 1.9 }}><a href="/data-privacy-rights" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{tr.dataRights}</a></li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
        {tr.copyright}
      </div>
    </footer>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>('ko')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const tr = translations[lang]

  async function handleSubmit(form: FormData) {
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, lang }),
      })
      if (res.ok) {
        setSubmitted(true)
        document.getElementById('appraisal')?.scrollIntoView({ behavior: 'smooth' })
      } else alert(lang === 'ko' ? '오류가 발생했습니다. 다시 시도해 주세요.' : 'Something went wrong. Please try again.')
    } catch {
      alert(lang === 'ko' ? '오류가 발생했습니다. 다시 시도해 주세요.' : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        body { color: #2D2418; line-height: 1.6; -webkit-font-smoothing: antialiased; }
        @media (max-width: 768px) {
          .hero { padding: 64px 20px 72px !important; }
          .hero-h1 { font-size: 34px !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .process-card { padding: 22px 18px !important; }
          .form-section { padding: 48px 14px !important; }
          .form-card { padding: 28px 22px !important; }
          .form-h2 { font-size: 22px !important; }
          .option-grid { grid-template-columns: 1fr !important; }
          .swatch-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 6px !important; }
          .multi-grid { grid-template-columns: 1fr 1fr !important; gap: 6px !important; }
          .row-2 { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .logo-tagline { font-size: 8.5px !important; letter-spacing: 1.8px !important; }
        }
      `}</style>
      <Navbar lang={lang} setLang={setLang} tr={tr} />
      <main>
        <Hero tr={tr} />
        <Process tr={tr} />
        {submitted ? <SuccessScreen tr={tr} /> : <Form lang={lang} tr={tr} onSubmit={handleSubmit} submitting={submitting} />}
      </main>
      <Footer tr={tr} />
    </>
  )
}
