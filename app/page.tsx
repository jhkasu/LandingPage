'use client'

import { useState } from 'react'

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'AUTOPRIME'

// ─── Translations ─────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: { cta: 'Get Your Offer', tagline: 'Auto Sales, Leasing, & Trade In' },
    hero: {
      badge: 'Vehicle Appraisal',
      headingLine1: 'Best Price on',
      headingAccent: 'Lease & Used',
      headingLine2: 'Vehicles',
      sub1: 'Better prices than CarMax',
      sub2: 'Instant Contact · Same-Day Pickup · Fast Payment',
      cta: 'Get Your Price in One Click',
    },
    features: {
      heading: 'The Smarter Way to Sell Your Car',
      items: [
        { title: 'Fill Out in Minutes', desc: 'Enter your VIN and a few vehicle details. No lengthy paperwork, no appointments needed.' },
        { title: 'Expert Evaluation', desc: 'Our specialist reviews your submission and prepares a real, personalized offer.' },
        { title: 'Same-Day Response', desc: 'We reach out with a competitive, market-based offer.' },
        { title: 'We Come to You', desc: "Accept the offer and we'll pick up your vehicle at any location, on your schedule." },
      ],
    },
    form: {
      s1num: '01', s1title: 'Vehicle\nInfo',
      s2num: '02', s2title: 'Condition',
      s3num: '03', s3title: 'Financial\nStatus',
      s4num: '04', s4title: 'Contact\nInfo',
      vinLabel: 'Vehicle Identification Number (VIN)',
      vinPlaceholder: 'Enter 17-digit VIN',
      milesLabel: 'Total Accumulated Miles',
      milesPlaceholder: '00,000',
      milesSuffix: 'mi',
      colorLabel: 'Exterior Finish',
      accidentLabel: 'Accident History',
      accidentOptions: [
        { label: 'No Accident', value: 'NO ACCIDENT' },
        { label: 'Minor', value: 'MINOR' },
        { label: 'Major', value: 'MAJOR' },
      ],
      financialLabel: 'Financial Status',
      financialOptions: [
        { label: 'Finance', value: 'FINANCE' },
        { label: 'Lease', value: 'LEASE' },
        { label: 'Paid in Full', value: 'PAID IN FULL' },
      ],
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      phonePlaceholder: 'Phone Number',
      privacyPolicy: 'Privacy Policy',
      consentText: `I acknowledge the Privacy Policy and authorize the ${COMPANY} team to contact me via Phone/SMS/Email regarding this appraisal.`,
      getOffer: 'Get My Offer',
      sending: 'Sending...',
    },
    success: {
      title: "You're All Set!",
      desc: "We've received your vehicle details. A specialist will contact you shortly with a competitive offer.",
    },
    footer: {
      about: 'Best lease deals. Best prices. No hassle. We make car buying simple.',
      contactTitle: 'Contact',
      linksTitle: 'Legal',
      links: ['Privacy Policy', 'Terms & Conditions', 'Data Privacy Rights'],
      copyright: `© 2026 ${COMPANY}. All Rights Reserved.`,
    },
  },
  ko: {
    nav: { cta: '견적 받기', tagline: '자동차 판매, 리스 & 트레이드인' },
    hero: {
      badge: 'Vehicle Appraisal',
      headingLine1: '리스 · 중고차',
      headingAccent: '최대가격',
      headingLine2: '으로 매입합니다',
      sub1: '카맥스보다 더 좋은 가격',
      sub2: '즉시 연락 · 당일 픽업 · 빠른 입금',
      cta: '클릭 한번으로 가격확인',
    },
    features: {
      heading: '더 스마트한 차량 판매 방법',
      items: [
        { title: '2분 만에 완료', desc: 'VIN과 간단한 차량 정보만 입력하세요. 복잡한 서류나 방문이 필요 없습니다.' },
        { title: '전문가 직접 검토', desc: '전문가가 제출하신 정보를 검토하고 맞춤 오퍼를 준비합니다.' },
        { title: '당일 연락', desc: '실시간 시장 데이터를 기반으로 경쟁력 있는 오퍼를 직접 연락드립니다.' },
        { title: '원하는 곳으로 픽업', desc: '오퍼 수락 시 원하시는 장소와 시간에 맞춰 차량을 픽업해 드립니다.' },
      ],
    },
    form: {
      s1num: '01', s1title: '차량\n기본정보',
      s2num: '02', s2title: '차량\n상태',
      s3num: '03', s3title: '재정\n상태',
      s4num: '04', s4title: '연락처\n정보',
      vinLabel: '차량 식별 번호 (VIN)',
      vinPlaceholder: 'VIN 17자리 입력',
      milesLabel: '총 주행 거리',
      milesPlaceholder: '00,000',
      milesSuffix: '마일',
      colorLabel: '외부 색상',
      accidentLabel: '사고 이력',
      accidentOptions: [
        { label: '무사고', value: 'NO ACCIDENT' },
        { label: '경미한 사고', value: 'MINOR' },
        { label: '중대한 사고', value: 'MAJOR' },
      ],
      financialLabel: '재정 상태',
      financialOptions: [
        { label: '파이낸스', value: 'FINANCE' },
        { label: '리스', value: 'LEASE' },
        { label: '완납', value: 'PAID IN FULL' },
      ],
      namePlaceholder: '이름',
      emailPlaceholder: '이메일 주소',
      phonePlaceholder: '전화번호',
      privacyPolicy: '개인정보 처리방침',
      consentText: `개인정보 처리방침에 동의하며 ${COMPANY} 담당자가 본 감정과 관련하여 전화/문자/이메일로 연락하는 것에 동의합니다.`,
      getOffer: '견적 받기',
      sending: '전송 중...',
    },
    success: {
      title: '접수 완료!',
      desc: '차량 정보가 접수되었습니다. 전문가가 곧 경쟁력 있는 견적을 가지고 연락드릴 예정입니다.',
    },
    footer: {
      about: '최고의 리스 가격. 최저가 보장. 복잡함 없이 간단하게. 차량 구매를 쉽게 만들어 드립니다.',
      contactTitle: '연락처',
      linksTitle: '법적 고지',
      links: ['개인정보 처리방침', '이용약관', '개인정보 판매 거부'],
      copyright: `© 2026 ${COMPANY}. All Rights Reserved.`,
    },
  },
}

type Lang = 'en' | 'ko'

// ─── Colors ───────────────────────────────────────────────────────────────────
const COLORS = [
  { value: 'WHITE',  label: { en: 'White',  ko: '흰색' },  hex: '#f5f5f5', textColor: '#333333', border: '#d1d5db' },
  { value: 'BLACK',  label: { en: 'Black',  ko: '검정' },  hex: '#1a1a1a', textColor: '#ffffff' },
  { value: 'SILVER', label: { en: 'Silver', ko: '은색' },  hex: '#b0b0b0', textColor: '#1a1a1a' },
  { value: 'GREY',   label: { en: 'Grey',   ko: '회색' },  hex: '#707070', textColor: '#ffffff' },
  { value: 'BLUE',   label: { en: 'Blue',   ko: '파란색' }, hex: '#1e3a8a', textColor: '#ffffff' },
  { value: 'RED',    label: { en: 'Red',    ko: '빨간색' }, hex: '#b91c1c', textColor: '#ffffff' },
  { value: 'BROWN',  label: { en: 'Brown',  ko: '갈색' },  hex: '#7c3929', textColor: '#ffffff' },
  { value: 'GOLD',   label: { en: 'Gold',   ko: '골드' },  hex: '#c9930a', textColor: '#ffffff' },
  { value: 'BEIGE',  label: { en: 'Beige',  ko: '베이지' }, hex: '#d4c5a9', textColor: '#333333' },
  { value: 'GREEN',  label: { en: 'Green',  ko: '초록색' }, hex: '#15803d', textColor: '#ffffff' },
  { value: 'ORANGE', label: { en: 'Orange', ko: '주황색' }, hex: '#ea580c', textColor: '#ffffff' },
  { value: 'OTHER',  label: { en: 'Other',  ko: '기타' },  hex: '#6b7280', textColor: '#ffffff' },
]

interface FormData {
  vin: string; miles: string; color: string; accidentHistory: string
  financialStatus: string; fullName: string; email: string; phone: string; consent: boolean
}

const initialForm: FormData = {
  vin: '', miles: '', color: '', accidentHistory: '',
  financialStatus: '', fullName: '', email: '', phone: '', consent: false,
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function IconInfo() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B7B9C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
}
function IconShield() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B7B9C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
}
function IconTruck() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B7B9C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ onCTA, lang, setLang, tr }: { onCTA: () => void; lang: Lang; setLang: (l: Lang) => void; tr: typeof translations.en }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#0D1B2A', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="px-5 md:px-14 py-4 md:py-5 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span className="text-2xl md:text-3xl font-black tracking-tight">
            <span style={{ color: 'white' }}>Auto</span><span style={{ color: '#F0A500' }}>Prime</span>
          </span>
          <span className="hidden md:block text-[11px] tracking-widest uppercase mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{tr.nav.tagline}</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center rounded-full p-1" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <button
              onClick={() => setLang('en')}
              className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-bold tracking-wider transition-all whitespace-nowrap"
              style={lang === 'en' ? { backgroundColor: '#F0A500', color: '#0D1B2A' } : { color: 'rgba(255,255,255,0.5)' }}
            >EN</button>
            <button
              onClick={() => setLang('ko')}
              className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-bold tracking-wider transition-all whitespace-nowrap"
              style={lang === 'ko' ? { backgroundColor: '#F0A500', color: '#0D1B2A' } : { color: 'rgba(255,255,255,0.5)' }}
            >한국어</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function IconInfoLight() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
}
function IconShieldLight() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
}
function IconTruckLight() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
}

function Hero({ tr }: { tr: typeof translations.en }) {
  return (
    <section className="relative flex items-center justify-center text-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Full-bleed background image */}
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/hero.png)' }} />
      {/* Left-to-right gradient — text area bright, car stays crisp */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.1) 65%, rgba(255,255,255,0) 100%)' }} />

      {/* Content — centered, left half */}
      <div className="relative z-10 w-full px-8 md:px-14 flex items-center" style={{ minHeight: '100vh' }}>
        <div className="w-full md:w-[65%] text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full" style={{ backgroundColor: '#0D1B2A' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F0A500' }} />
            <span className="text-sm tracking-[0.25em] uppercase font-bold" style={{ color: '#F0A500' }}>{tr.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-black leading-tight mb-5" style={{ color: '#0D1B2A', fontSize: 'clamp(2.2rem, 6.5vw, 5.5rem)' }}>
            <span className="block">{tr.hero.headingLine1}</span>
            <span style={{ color: '#F0A500' }}>{tr.hero.headingAccent}</span>
            {' '}
            <span>{tr.hero.headingLine2}</span>
          </h1>

          {/* Gold divider */}
          <div className="mb-7" style={{ width: '48px', height: '2px', backgroundColor: '#F0A500' }} />

          {/* Sub lines */}
          <p className="text-xl font-semibold mb-3" style={{ color: 'rgba(0,0,0,0.75)' }}>{tr.hero.sub1}</p>
          <p className="text-lg mb-12 tracking-wide" style={{ color: 'rgba(0,0,0,0.5)' }}>{tr.hero.sub2}</p>

          {/* CTA */}
          <button
            onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-lg transition-all"
            style={{ backgroundColor: '#0D1B2A', color: 'white' }}
          >
            {tr.hero.cta}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>

    </section>
  )
}

// ─── Section Header (editorial style) ────────────────────────────────────────
function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex flex-col items-start pt-1">
      <span className="text-4xl font-black leading-none mb-2" style={{ color: '#3B7B9C', opacity: 0.25 }}>{num}</span>
      <span className="text-xs font-bold tracking-widest uppercase text-gray-500 whitespace-pre-line leading-relaxed">{title}</span>
    </div>
  )
}

// ─── Underline Input ──────────────────────────────────────────────────────────
function UnderlineInput({ label, placeholder, value, onChange, suffix, type = 'text', maxLength }: {
  label: string; placeholder: string; value: string
  onChange: (v: string) => void; suffix?: string; type?: string; maxLength?: number
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-bold tracking-widest uppercase text-gray-600 whitespace-nowrap">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={e => onChange(e.target.value)}
          className="w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#3B7B9C] outline-none py-4 text-xl text-gray-900 placeholder-gray-400 transition-colors pr-10"
          style={{ borderRadius: 0 }}
        />
        {suffix && <span className="absolute right-0 bottom-4 text-base tracking-widest text-gray-300 uppercase">{suffix}</span>}
      </div>
    </div>
  )
}

// ─── Solid Option Button ──────────────────────────────────────────────────────
function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3.5 rounded-lg text-xl font-bold tracking-wide transition-all border"
      style={selected
        ? { backgroundColor: '#0D1B2A', color: '#F0A500', borderColor: '#0D1B2A' }
        : { backgroundColor: 'white', color: '#6b7280', borderColor: '#e5e7eb' }
      }
    >
      {label}
    </button>
  )
}

// ─── Form (single page) ───────────────────────────────────────────────────────
function Form({ lang, tr, onSubmit, submitting }: {
  lang: Lang; tr: typeof translations.en; onSubmit: (form: FormData) => void; submitting: boolean
}) {
  const [form, setForm] = useState<FormData>(initialForm)
  const f = tr.form

  function set(field: keyof FormData, value: string | boolean) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const canSubmit =
    form.vin.trim().length === 17 && form.miles.trim().length > 0 &&
    form.color !== '' && form.accidentHistory !== '' &&
    form.financialStatus !== '' && form.fullName.trim() !== '' &&
    form.email.trim() !== '' && form.phone.trim() !== '' && form.consent

  return (
    <section className="bg-white py-24 px-8 md:px-16">
      <div className="max-w-4xl mx-auto space-y-14">

        {/* Heading */}
        <div>
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#3B7B9C' }}>
            {lang === 'ko' ? '차량 감정 신청' : 'Vehicle Appraisal'}
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-snug">
            {lang === 'ko' ? '차량 정보를\n입력해 주세요' : "Tell Us About\nYour Vehicle"}
          </h2>
        </div>

        {/* VIN + Miles */}
        <div className="flex flex-col md:flex-row gap-8 pb-14 border-b border-gray-100">
          <div className="flex-1 min-w-0">
            <UnderlineInput label={f.vinLabel} placeholder={f.vinPlaceholder} value={form.vin}
              onChange={v => set('vin', v.toUpperCase())} maxLength={17} />
          </div>
          <div className="md:w-64 md:flex-shrink-0">
            <UnderlineInput label={f.milesLabel} placeholder={f.milesPlaceholder} value={form.miles}
              onChange={v => {
                const digits = v.replace(/\D/g, '')
                set('miles', digits ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '')
              }} suffix={f.milesSuffix} />
          </div>
        </div>

        {/* Color */}
        <div className="pb-14 border-b border-gray-100">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-600 mb-4">{f.colorLabel}</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {COLORS.map(({ value, label, hex, textColor, border }) => {
              const selected = form.color === value
              return (
                <button key={value} onClick={() => set('color', value)}
                  className="relative flex items-center justify-center rounded-lg transition-all overflow-hidden"
                  style={{
                    backgroundColor: hex,
                    height: '72px',
                    border: selected ? '3px solid #F0A500' : `2px solid ${border || 'transparent'}`,
                    boxShadow: selected ? '0 0 0 2px #F0A500' : 'none',
                  }}
                >
                  <span className="text-base font-bold tracking-wide" style={{ color: textColor || '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                    {label[lang]}
                  </span>
                  {selected && (
                    <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0A500' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Accident History */}
        <div className="pb-14 border-b border-gray-100">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-600 mb-4">{f.accidentLabel}</p>
          <div className="flex flex-wrap gap-3">
            {f.accidentOptions.map(opt => (
              <OptionButton key={opt.value} label={opt.label} selected={form.accidentHistory === opt.value} onClick={() => set('accidentHistory', opt.value)} />
            ))}
          </div>
        </div>

        {/* Financial Status */}
        <div className="pb-14 border-b border-gray-100">
          <p className="text-sm font-bold tracking-widest uppercase text-gray-600 mb-4">{f.financialLabel}</p>
          <div className="flex flex-wrap gap-3">
            {f.financialOptions.map(opt => (
              <OptionButton key={opt.value} label={opt.label} selected={form.financialStatus === opt.value} onClick={() => set('financialStatus', opt.value)} />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6 pb-14 border-b border-gray-100">
          <UnderlineInput label={f.namePlaceholder} placeholder={f.namePlaceholder} value={form.fullName} onChange={v => set('fullName', v)} />
          <UnderlineInput label={f.emailPlaceholder} placeholder={f.emailPlaceholder} value={form.email} onChange={v => set('email', v)} type="email" />
          <UnderlineInput label={f.phonePlaceholder} placeholder="(000) 000-0000" value={form.phone}
            onChange={v => {
              const d = v.replace(/\D/g, '').slice(0, 10)
              set('phone', d.length >= 7 ? `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}` : d.length >= 4 ? `(${d.slice(0,3)}) ${d.slice(3)}` : d.length > 0 ? `(${d}` : '')
            }} type="tel" />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-4 cursor-pointer rounded-xl p-5" style={{ backgroundColor: '#0D1B2A' }}>
          <input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)}
            className="mt-1 w-5 h-5 flex-shrink-0 accent-[#F0A500]" />
          <span className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <span className="underline font-bold" style={{ color: '#F0A500' }}>{f.privacyPolicy}</span>
            {' — '}{f.consentText}
          </span>
        </label>

        {/* Submit */}
        <button
          onClick={() => canSubmit && onSubmit(form)}
          disabled={!canSubmit || submitting}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-base font-bold tracking-widest uppercase transition-all"
          style={canSubmit && !submitting
            ? { backgroundColor: '#F0A500', color: '#0D1B2A' }
            : { backgroundColor: '#f3f4f6', color: '#d1d5db', cursor: 'not-allowed' }
          }
        >
          {submitting ? f.sending : f.getOffer}
          {!submitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>}
        </button>
      </div>
    </section>
  )
}

// ─── Features ────────────────────────────────────────────────────────────────
const FEATURE_ICONS = [
  // clipboard
  <svg key="f1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
  // search/magnify
  <svg key="f2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/></svg>,
  // phone
  <svg key="f3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.15 3.44 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16z"/></svg>,
  // map pin / pickup
  <svg key="f4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
]

function Features({ tr }: { tr: typeof translations.en }) {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16" style={{ color: '#0D1B2A' }}>
        {tr.features.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {tr.features.items.map((item, i) => (
          <div key={i} className="flex flex-col">
            <div className="mb-4">{FEATURE_ICONS[i]}</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

// ─── Success ──────────────────────────────────────────────────────────────────
function SuccessScreen({ tr }: { tr: typeof translations.en }) {
  return (
    <div className="bg-white max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(59,123,156,0.1)' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3B7B9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-4">{tr.success.title}</h2>
      <p className="text-gray-600 text-base max-w-sm mx-auto">{tr.success.desc}</p>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ tr }: { tr: typeof translations.en }) {
  return (
    <footer className="text-white overflow-hidden" style={{ backgroundColor: '#0D1B2A' }}>
      {/* Watermark company name */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" style={{ height: '160px' }}>
          <span className="text-white font-black whitespace-nowrap" style={{ fontSize: 'clamp(60px, 12vw, 140px)', opacity: 0.04, letterSpacing: '-0.02em' }}>
            {COMPANY}
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <span className="text-xl font-black tracking-tight">{COMPANY}</span>
              <div className="text-[10px] tracking-widest text-gray-500 uppercase mt-0.5">{tr.nav.tagline}</div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{tr.footer.about}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">{tr.footer.contactTitle}</h4>
            <ul className="space-y-3">
              {[
                { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6', text: 'autoprimeinc24@gmail.com' },
                { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', text: '6281 Beach Blvd, Buena Park, CA 90621' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B7B9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                    <path d={icon} />
                  </svg>
                  <span className="text-gray-300 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">{tr.footer.linksTitle}</h4>
            <ul className="space-y-3">
              {tr.footer.links.map((link, i) => {
                const hrefs = ['/privacy-policy', '/terms', '/data-privacy-rights']
                return (
                  <li key={link}><a href={hrefs[i]} className="text-gray-600 text-sm hover:text-white transition-colors">{link}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <span className="text-gray-600 text-[11px] tracking-widest uppercase">{tr.footer.copyright}</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
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
      if (res.ok) { setSubmitted(true); document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' }) }
      else alert(lang === 'ko' ? '오류가 발생했습니다. 다시 시도해 주세요.' : 'Something went wrong. Please try again.')
    } catch {
      alert(lang === 'ko' ? '오류가 발생했습니다. 다시 시도해 주세요.' : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Navbar onCTA={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })} lang={lang} setLang={setLang} tr={tr} />
      <main>
        <Hero tr={tr} />
        <Features tr={tr} />
        <div className="w-full h-px bg-gray-100" />
        <section id="form-section">
          {submitted ? <SuccessScreen tr={tr} /> : <Form lang={lang} tr={tr} onSubmit={handleSubmit} submitting={submitting} />}
        </section>
      </main>
      <Footer tr={tr} />
    </>
  )
}
