'use client'

import { useState } from 'react'

const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'AUTOPRIME'

// ─── Translations ─────────────────────────────────────────────────────────────
const translations = {
  en: {
    nav: { cta: 'Get Your Offer', tagline: 'Auto Sales, Leasing, & Trade In' },
    hero: {
      badge: 'Vehicle Appraisal',
      headingPre: 'Get an',
      headingAccent: 'Instant Quote',
      headingPost: 'for Your Vehicle',
      subtitle: 'Fill out the form below and receive a real, competitive market-value offer — no haggling, no dealership visits.',
    },
    features: {
      heading: 'The Smarter Way to Sell Your Car',
      items: [
        { title: 'Fill Out in Minutes', desc: 'Enter your VIN and a few vehicle details. No lengthy paperwork, no appointments needed.' },
        { title: 'Expert Evaluation', desc: 'Our specialist reviews your submission and prepares a real, personalized offer.' },
        { title: 'Same-Day Response', desc: 'We contact you directly with a competitive offer based on live market data.' },
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
        { label: 'No Accidents', value: 'NO ACCIDENTS' },
        { label: '1 Incident', value: '1 INCIDENT' },
        { label: '2+ Incidents', value: '2+ INCIDENTS' },
      ],
      financialLabel: 'Financial Status',
      financialOptions: [
        { label: 'Finance / Loan', value: 'FINANCE / LOAN' },
        { label: 'Active Lease', value: 'ACTIVE LEASE' },
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
      badge: '차량 감정 서비스',
      headingPre: '내 차량의',
      headingAccent: '즉시 견적',
      headingPost: '을 받아보세요',
      subtitle: '아래 양식을 작성하시면 실제 시장 가치에 기반한 경쟁력 있는 오퍼를 받으실 수 있습니다.',
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
        { label: '무사고', value: 'NO ACCIDENTS' },
        { label: '1회 사고', value: '1 INCIDENT' },
        { label: '2회 이상', value: '2+ INCIDENTS' },
      ],
      financialLabel: '재정 상태',
      financialOptions: [
        { label: '할부 / 대출', value: 'FINANCE / LOAN' },
        { label: '리스 중', value: 'ACTIVE LEASE' },
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
  { value: 'WHITE',  label: { en: 'White',  ko: '흰색' },  hex: '#ffffff', border: '#d1d5db' },
  { value: 'BLACK',  label: { en: 'Black',  ko: '검정' },  hex: '#1a1a1a' },
  { value: 'SILVER', label: { en: 'Silver', ko: '은색' },  hex: '#c0c0c0' },
  { value: 'GREY',   label: { en: 'Grey',   ko: '회색' },  hex: '#808080' },
  { value: 'BLUE',   label: { en: 'Blue',   ko: '파란색' }, hex: '#2563eb' },
  { value: 'RED',    label: { en: 'Red',    ko: '빨간색' }, hex: '#dc2626' },
  { value: 'BROWN',  label: { en: 'Brown',  ko: '갈색' },  hex: '#7c3929' },
  { value: 'GOLD',   label: { en: 'Gold',   ko: '골드' },  hex: '#d4a017' },
  { value: 'BEIGE',  label: { en: 'Beige',  ko: '베이지' }, hex: '#d4c5a9' },
  { value: 'GREEN',  label: { en: 'Green',  ko: '초록색' }, hex: '#16a34a' },
  { value: 'ORANGE', label: { en: 'Orange', ko: '주황색' }, hex: '#ea580c' },
  { value: 'OTHER',  label: { en: 'Other',  ko: '기타' },  hex: '#9ca3af' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,0,0,0.55)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black tracking-tight text-white">{COMPANY}</span>
          <span className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{tr.nav.tagline}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full p-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <button
              onClick={() => setLang('en')}
              className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all"
              style={lang === 'en' ? { backgroundColor: 'white', color: '#0a0a0a' } : { color: 'rgba(255,255,255,0.5)' }}
            >EN</button>
            <button
              onClick={() => setLang('ko')}
              className="px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all"
              style={lang === 'ko' ? { backgroundColor: 'white', color: '#0a0a0a' } : { color: 'rgba(255,255,255,0.5)' }}
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
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/hero.jpg)' }} />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block rounded-full px-5 py-1.5 mb-8" style={{ border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.08)' }}>
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-white">{tr.hero.badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          {tr.hero.headingPre}{' '}
          <span className="text-white">{tr.hero.headingAccent}</span>
          {' '}{tr.hero.headingPost}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10 font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {tr.hero.subtitle}
        </p>

        {/* CTA */}
        <button
          onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all bg-white text-gray-900 hover:bg-gray-100"
        >
          {tr.nav.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-white text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
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
      <label className="text-[10px] font-bold tracking-widest uppercase text-gray-400">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={e => onChange(e.target.value)}
          className="w-full bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#3B7B9C] outline-none py-3 text-sm text-gray-900 placeholder-gray-300 transition-colors pr-10"
          style={{ borderRadius: 0 }}
        />
        {suffix && <span className="absolute right-0 bottom-3 text-[11px] tracking-widest text-gray-300 uppercase">{suffix}</span>}
      </div>
    </div>
  )
}

// ─── Solid Option Button ──────────────────────────────────────────────────────
function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3.5 rounded-lg text-xs font-bold tracking-wide transition-all border"
      style={selected
        ? { backgroundColor: '#3B7B9C', color: 'white', borderColor: '#3B7B9C' }
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
    form.vin.trim().length > 0 && form.miles.trim().length > 0 &&
    form.color !== '' && form.accidentHistory !== '' &&
    form.financialStatus !== '' && form.fullName.trim() !== '' &&
    form.email.trim() !== '' && form.phone.trim() !== '' && form.consent

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-10">

        {/* Heading */}
        <div>
          <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: '#3B7B9C' }}>
            {lang === 'ko' ? '차량 감정 신청' : 'Vehicle Appraisal'}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-snug">
            {lang === 'ko' ? '차량 정보를\n입력해 주세요' : "Tell Us About\nYour Vehicle"}
          </h2>
        </div>

        {/* VIN + Miles */}
        <div className="space-y-6 pb-10 border-b border-gray-100">
          <UnderlineInput label={f.vinLabel} placeholder={f.vinPlaceholder} value={form.vin}
            onChange={v => set('vin', v.toUpperCase())} maxLength={17} />
          <UnderlineInput label={f.milesLabel} placeholder={f.milesPlaceholder} value={form.miles}
            onChange={v => set('miles', v.replace(/\D/g, ''))} suffix={f.milesSuffix} />
        </div>

        {/* Color */}
        <div className="pb-10 border-b border-gray-100">
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">{f.colorLabel}</p>
          <div className="grid grid-cols-4 gap-3">
            {COLORS.map(({ value, label, hex, border }) => {
              const selected = form.color === value
              return (
                <button key={value} onClick={() => set('color', value)}
                  className="flex flex-col items-center gap-2 py-3 px-1 rounded-xl border transition-all"
                  style={selected
                    ? { borderColor: '#3B7B9C', backgroundColor: '#f0f7fc' }
                    : { borderColor: '#e5e7eb', backgroundColor: 'white' }
                  }
                >
                  <span className="w-5 h-5 rounded-full" style={{ backgroundColor: hex, border: `1.5px solid ${border || 'transparent'}`, boxShadow: selected ? '0 0 0 2px #3B7B9C' : 'none' }} />
                  <span className="text-[10px] font-semibold" style={{ color: selected ? '#3B7B9C' : '#9ca3af' }}>{label[lang]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Accident History */}
        <div className="pb-10 border-b border-gray-100">
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">{f.accidentLabel}</p>
          <div className="flex flex-wrap gap-3">
            {f.accidentOptions.map(opt => (
              <OptionButton key={opt.value} label={opt.label} selected={form.accidentHistory === opt.value} onClick={() => set('accidentHistory', opt.value)} />
            ))}
          </div>
        </div>

        {/* Financial Status */}
        <div className="pb-10 border-b border-gray-100">
          <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">{f.financialLabel}</p>
          <div className="flex flex-wrap gap-3">
            {f.financialOptions.map(opt => (
              <OptionButton key={opt.value} label={opt.label} selected={form.financialStatus === opt.value} onClick={() => set('financialStatus', opt.value)} />
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6 pb-10 border-b border-gray-100">
          <UnderlineInput label={f.namePlaceholder} placeholder={f.namePlaceholder} value={form.fullName} onChange={v => set('fullName', v)} />
          <UnderlineInput label={f.emailPlaceholder} placeholder={f.emailPlaceholder} value={form.email} onChange={v => set('email', v)} type="email" />
          <UnderlineInput label={f.phonePlaceholder} placeholder={f.phonePlaceholder} value={form.phone} onChange={v => set('phone', v)} type="tel" />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)}
            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[#3B7B9C]" />
          <span className="text-xs text-gray-400 leading-relaxed">
            <span className="underline" style={{ color: '#3B7B9C' }}>{f.privacyPolicy}</span>
            {' — '}{f.consentText}
          </span>
        </label>

        {/* Submit */}
        <button
          onClick={() => canSubmit && onSubmit(form)}
          disabled={!canSubmit || submitting}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all"
          style={canSubmit && !submitting
            ? { backgroundColor: '#0a0a0a', color: 'white' }
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
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: '#0F1F3D' }}>
          {tr.features.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {tr.features.items.map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-4">{FEATURE_ICONS[i]}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
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
      <p className="text-gray-400 text-base max-w-sm mx-auto">{tr.success.desc}</p>
    </div>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ tr }: { tr: typeof translations.en }) {
  return (
    <footer className="bg-[#141414] text-white overflow-hidden">
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
            <p className="text-gray-400 text-sm leading-relaxed">{tr.footer.about}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-5">{tr.footer.contactTitle}</h4>
            <ul className="space-y-3">
              {[
                { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.15 3.44 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z', text: '(000) 000-0000' },
                { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6', text: 'contact@yourcompany.com' },
                { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', text: 'Your Address Here' },
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
              {tr.footer.links.map(link => (
                <li key={link}><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{link}</a></li>
              ))}
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
      if (res.ok) { setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }
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
