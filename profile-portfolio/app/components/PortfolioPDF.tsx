'use client';

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  Circle,
  Line,
  Rect,
  Path,
} from '@react-pdf/renderer';

/* ============================================
   REGISTER INTER FONT
   ============================================ */
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Light.ttf', fontWeight: 300 },
    { src: '/fonts/Inter-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Inter-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 700 },
  ],
});

/* ============================================
   DESIGN TOKENS — McKinsey Palette
   ============================================ */
const C = {
  navy: '#051C2C',
  accent: '#2251FF',
  accent2: '#00A9F4',
  bg: '#FFFFFF',
  bgAlt: '#F7F8FA',
  text: '#333333',
  textBody: '#444444',
  muted: '#666666',
  lightLine: '#E4E7EC',
  lightBlue: '#99B3E6',
  paleBlue: '#C7D4EE',
  navyLight: 'rgba(5, 28, 44, 0.06)',
};

const SLIDE_W = 841.89; // A4 landscape width in pts
const SLIDE_H = 595.28; // A4 landscape height in pts

/* ============================================
   STYLES
   ============================================ */
const s = StyleSheet.create({
  /* --- Pages --- */
  pageWhite: {
    width: SLIDE_W,
    height: SLIDE_H,
    fontFamily: 'Inter',
    backgroundColor: C.bg,
    position: 'relative',
    overflow: 'hidden',
  },
  pageNavy: {
    width: SLIDE_W,
    height: SLIDE_H,
    fontFamily: 'Inter',
    backgroundColor: C.navy,
    position: 'relative',
    overflow: 'hidden',
  },

  /* --- Slide body padded area --- */
  body: {
    padding: '50 60',
    flex: 1,
  },

  /* --- Section header (white slides) --- */
  accentBar: {
    width: 44,
    height: 3,
    backgroundColor: C.accent,
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: C.accent,
    textTransform: 'uppercase' as const,
    letterSpacing: 2.5,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 300,
    color: C.navy,
    letterSpacing: -0.5,
  },

  /* --- Footer bar (cover/closing dark slides) --- */
  footerBarDark: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
    backgroundColor: 'rgba(0,0,0,0.25)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 60,
    paddingRight: 60,
  },
  footerTextDark: {
    fontSize: 7.5,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },

  /* --- Footer (white slides) --- */
  slideNumber: {
    position: 'absolute',
    bottom: 20,
    right: 60,
    fontSize: 8,
    fontWeight: 500,
    color: C.muted,
    letterSpacing: 0.5,
  },
  footerName: {
    position: 'absolute',
    bottom: 20,
    left: 60,
    fontSize: 7.5,
    fontWeight: 500,
    color: C.lightLine,
    letterSpacing: 2,
    textTransform: 'uppercase' as const,
  },

  /* --- IYN Watermark (navy slides) --- */
  watermark: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    fontSize: 120,
    fontWeight: 700,
    color: 'rgba(255,255,255,0.06)',
    letterSpacing: 6,
  },
});

/* ============================================
   DIAGONAL ACCENT LINES (Cover & Closing)
   ============================================ */
function DiagonalLines() {
  return (
    <Svg
      style={{ position: 'absolute', top: 0, left: 0, width: SLIDE_W, height: SLIDE_H }}
      viewBox={`0 0 ${SLIDE_W} ${SLIDE_H}`}
    >
      <Line x1={SLIDE_W - 60} y1={0} x2={180} y2={SLIDE_H} stroke={C.accent} strokeWidth="0.8" opacity="0.12" />
      <Line x1={SLIDE_W - 20} y1={0} x2={260} y2={SLIDE_H} stroke={C.accent2} strokeWidth="0.6" opacity="0.10" />
      <Line x1={SLIDE_W + 20} y1={0} x2={340} y2={SLIDE_H} stroke={C.accent} strokeWidth="0.5" opacity="0.07" />
    </Svg>
  );
}

/* ============================================
   ICON SVGs (clean geometric line art)
   ============================================ */
function IconBriefcase({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function IconStar({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function IconLayers({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 2L2 7l10 5 10-5-10-5z" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M2 17l10 5 10-5" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M2 12l10 5 10-5" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function IconMail({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function IconCode({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M16 18l6-6-6-6" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M8 6l-6 6 6 6" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function IconLink({ color = C.accent, size = 14 }: { color?: string; size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke={color} strokeWidth="1.5" fill="none" />
      <Path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke={color} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

/* ============================================
   EYEBROW (icon badge + label)
   ============================================ */
function Eyebrow({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 }}>
      <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: C.accent, alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </View>
      <Text style={s.sectionLabel}>{label}</Text>
    </View>
  );
}

/* ============================================
   SLIDE 1 — COVER (Navy bg)
   ============================================ */
function SlideCover() {
  return (
    <Page size="A4" orientation="landscape" style={s.pageNavy}>
      <DiagonalLines />

      {/* IYN Avatar Badge — top-right */}
      <View style={{ position: 'absolute', top: 50, right: 70 }}>
        {/* Outer ring */}
        <Svg width={130} height={130} viewBox="0 0 130 130">
          <Circle cx="65" cy="65" r="62" stroke={C.accent2} strokeWidth="2" fill="none" />
          <Circle cx="65" cy="65" r="56" fill={C.accent} />
        </Svg>
        <Text style={{
          position: 'absolute', top: 38, left: 0, right: 0,
          textAlign: 'center', fontSize: 36, fontWeight: 700,
          color: C.bg, letterSpacing: 3,
        }}>IYN</Text>
      </View>

      {/* Eyebrow */}
      <View style={{ position: 'absolute', top: 80, left: 60 }}>
        <Text style={{
          fontSize: 10, fontWeight: 600, color: C.accent2,
          letterSpacing: 3, textTransform: 'uppercase' as const,
        }}>
          Portfolio · 2026
        </Text>
      </View>

      {/* Name */}
      <View style={{ position: 'absolute', top: 115, left: 60 }}>
        <Text style={{ fontSize: 44, fontWeight: 300, color: C.bg, letterSpacing: -1 }}>
          Iman Yunar
        </Text>
        <Text style={{ fontSize: 44, fontWeight: 700, color: C.bg, letterSpacing: -1 }}>
          Noviadhi
        </Text>
      </View>

      {/* Role */}
      <View style={{ position: 'absolute', top: 220, left: 60 }}>
        <Text style={{ fontSize: 18, fontWeight: 500, color: C.lightBlue, letterSpacing: 0.3 }}>
          Full-Stack Developer & AI Practitioner
        </Text>
      </View>

      {/* Tagline */}
      <View style={{ position: 'absolute', top: 260, left: 60, maxWidth: 480 }}>
        <Text style={{ fontSize: 11.5, fontWeight: 300, color: C.paleBlue, lineHeight: 1.7 }}>
          Building reliable digital systems — combining full-stack engineering
          depth with applied AI and a track record of cross-university leadership.
        </Text>
      </View>

      {/* Contact line */}
      <View style={{ position: 'absolute', bottom: 60, left: 60, flexDirection: 'row', gap: 20 }}>
        <Text style={{ fontSize: 9, fontWeight: 400, color: C.lightBlue }}>imanyunar@gmail.com</Text>
        <Text style={{ fontSize: 9, fontWeight: 400, color: C.lightBlue }}>github.com/imanyunar</Text>
        <Text style={{ fontSize: 9, fontWeight: 400, color: C.lightBlue }}>Semarang, Indonesia</Text>
      </View>

      {/* IYN Watermark */}
      <Text style={s.watermark}>IYN</Text>

      {/* Footer bar */}
      <View style={s.footerBarDark}>
        <Text style={s.footerTextDark}>Iman Yunar Noviadhi</Text>
        <Text style={s.footerTextDark}>01 / 06</Text>
      </View>
    </Page>
  );
}

/* ============================================
   SLIDE 2 — ABOUT (white bg)
   ============================================ */
function SlideAbout() {
  const stats = [
    { num: '100%', label: 'TEST PASS RATE\n(77 SCENARIOS)' },
    { num: '2×', label: 'EVENT\nCHAIRPERSON' },
    { num: '1', label: 'PUBLISHED\nRESEARCH PAPER' },
    { num: '2×', label: 'ESSAY COMPETITION\nFINALIST' },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.pageWhite}>
      <View style={s.body}>
        <Eyebrow label="About" icon={<IconLayers color={C.bg} size={12} />} />
        <Text style={s.sectionTitle}>Profile Summary</Text>

        {/* Summary paragraph */}
        <View style={{ marginTop: 20, maxWidth: 580 }}>
          <Text style={{ fontSize: 12.5, fontWeight: 400, color: C.textBody, lineHeight: 1.75 }}>
            A Computer Science undergraduate at Universitas Negeri Semarang with
            hands-on experience building production-ready web applications using
            Laravel, Vue.js, TypeScript, and PostgreSQL — combining full-stack
            depth with applied AI and a strong leadership record.
          </Text>
        </View>

        {/* Stat cards */}
        <View style={{ flexDirection: 'row', gap: 14, marginTop: 28 }}>
          {stats.map((stat, i) => (
            <View key={i} style={{
              flex: 1,
              backgroundColor: C.navy,
              borderRadius: 6,
              padding: '20 16',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative circle (bleeding off bottom-right) */}
              <Svg style={{ position: 'absolute', right: -12, bottom: -12, width: 60, height: 60 }} viewBox="0 0 60 60">
                <Circle cx="30" cy="30" r="28" fill={C.accent} opacity="0.18" />
              </Svg>
              <Text style={{ fontSize: 28, fontWeight: 300, color: C.bg }}>{stat.num}</Text>
              <Text style={{
                fontSize: 8, fontWeight: 500, color: C.lightBlue,
                textTransform: 'uppercase' as const, letterSpacing: 0.8,
                marginTop: 6, textAlign: 'center', lineHeight: 1.4,
              }}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Pull-quote */}
        <View style={{
          marginTop: 24,
          backgroundColor: C.bgAlt,
          borderRadius: 6,
          padding: '18 28',
          borderLeft: `3px solid ${C.accent}`,
        }}>
          <Text style={{
            fontSize: 14, fontWeight: 300,
            color: C.navy, lineHeight: 1.6,
          }}>
            &quot;Driven to solve complex problems and create measurable impact
            through technology-driven solutions.&quot;
          </Text>
        </View>
      </View>

      <Text style={s.footerName}>Iman Yunar Noviadhi</Text>
      <Text style={s.slideNumber}>02 / 06</Text>
    </Page>
  );
}

/* ============================================
   SLIDE 3 — EXPERIENCE (white bg)
   ============================================ */
function SlideExperience() {
  const entries = [
    {
      num: '01', role: 'Web Developer Intern',
      org: 'PT Teknologi Aplikasi Sejahtera', period: 'FEB – JUL 2026',
      detail: 'Built Document Management System (Laravel, Vue.js, TypeScript, PostgreSQL). 100% pass rate across 77 Black Box Test scenarios. Rated EXCELLENT.',
    },
    {
      num: '02', role: 'Secretary, Public Relations Dept',
      org: 'UKMP, Universitas Negeri Semarang', period: 'FEB – NOV 2025',
      detail: 'Event Chairperson for 2 cross-university comparative study visits with UNESA & Universitas Brawijaya.',
    },
    {
      num: '03', role: 'Inbound Virtual Student Mobility',
      org: 'UTHM Malaysia', period: 'JUL – SEP 2026',
      detail: 'International academic exchange program in computer science.',
    },
    {
      num: '04', role: 'Staff, Internal & Organizational Supervision',
      org: 'ISAFIS', period: 'APR – DEC 2024',
      detail: 'Built online voting system for presidential election. Organizational governance.',
    },
    {
      num: '05', role: 'Corresponding Author',
      org: 'UNNES Journal', period: 'AUG 2023 – FEB 2024',
      detail: 'Published research on AI chatbot effectiveness in Operating Systems education.',
    },
  ];

  const entryH = 82; // generous height per entry to prevent overlap
  const timelineTop = 100;

  return (
    <Page size="A4" orientation="landscape" style={s.pageWhite}>
      <View style={s.body}>
        <Eyebrow label="Experience" icon={<IconBriefcase color={C.bg} size={12} />} />
        <Text style={s.sectionTitle}>Professional Timeline</Text>

        {/* Timeline area */}
        <View style={{ flexDirection: 'row', marginTop: 20, gap: 30 }}>
          {/* Left: Timeline entries */}
          <View style={{ flex: 1, position: 'relative' }}>
            {/* Vertical connector line */}
            <Svg style={{ position: 'absolute', left: 10, top: 8, width: 2, height: entries.length * entryH - 20 }}>
              <Line x1="1" y1="0" x2="1" y2={entries.length * entryH - 20} stroke={C.lightLine} strokeWidth="1.5" />
            </Svg>

            {entries.map((e, i) => (
              <View key={i} style={{ flexDirection: 'row', gap: 14, marginBottom: 12, minHeight: entryH - 12 }}>
                {/* Numbered circle badge */}
                <View style={{ width: 22, alignItems: 'center', paddingTop: 1 }}>
                  <Svg width={22} height={22} viewBox="0 0 22 22">
                    <Circle cx="11" cy="11" r="10" fill={C.navy} />
                  </Svg>
                  <Text style={{
                    position: 'absolute', top: 5, left: 0, right: 0,
                    textAlign: 'center', fontSize: 8, fontWeight: 700, color: C.bg,
                  }}>{e.num}</Text>
                </View>
                {/* Entry content */}
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12, fontWeight: 600, color: C.navy }}>{e.role}</Text>
                  <Text style={{ fontSize: 9.5, fontWeight: 400, color: C.muted, marginTop: 1 }}>{e.org}</Text>
                  <Text style={{
                    fontSize: 8.5, fontWeight: 600, color: C.accent,
                    textTransform: 'uppercase' as const, letterSpacing: 1, marginTop: 3,
                  }}>{e.period}</Text>
                  <Text style={{ fontSize: 9.5, fontWeight: 300, color: C.textBody, lineHeight: 1.5, marginTop: 3 }}>
                    {e.detail}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Right: Summary panel */}
          <View style={{
            width: 200,
            backgroundColor: C.navy,
            borderRadius: 8,
            padding: '28 24',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            alignSelf: 'flex-start',
            marginTop: 10,
          }}>
            {/* Decorative outlined circle */}
            <Svg style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100 }} viewBox="0 0 100 100">
              <Circle cx="50" cy="50" r="45" stroke={C.accent} strokeWidth="1.5" fill="none" opacity="0.25" />
            </Svg>
            <Text style={{ fontSize: 56, fontWeight: 300, color: C.accent }}>5</Text>
            <Text style={{
              fontSize: 12, fontWeight: 600, color: C.bg,
              textAlign: 'center', marginTop: 4,
            }}>Roles &amp; Milestones</Text>
            <Text style={{
              fontSize: 9, fontWeight: 300, color: C.lightBlue,
              textAlign: 'center', marginTop: 8, lineHeight: 1.5,
            }}>
              Spanning industry internship, international mobility, research, and student leadership.
            </Text>
          </View>
        </View>
      </View>

      <Text style={s.footerName}>Iman Yunar Noviadhi</Text>
      <Text style={s.slideNumber}>03 / 06</Text>
    </Page>
  );
}

/* ============================================
   SLIDE 4 — SKILLS (white bg)
   ============================================ */
function SkillBar({ name, pct }: { name: string; pct: number }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 }}>
        <Text style={{ fontSize: 9, fontWeight: 400, color: C.text }}>{name}</Text>
        <Text style={{ fontSize: 8, fontWeight: 600, color: C.accent }}>{pct}%</Text>
      </View>
      {/* Track */}
      <View style={{ height: 5, backgroundColor: C.lightLine, borderRadius: 2.5 }}>
        {/* Fill */}
        <View style={{ height: 5, width: `${pct}%`, backgroundColor: C.accent2, borderRadius: 2.5 }} />
      </View>
    </View>
  );
}

function SlideSkills() {
  const columns = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'Next.js / Vue.js', pct: 92 },
        { name: 'TypeScript', pct: 88 },
        { name: 'TailwindCSS', pct: 85 },
      ],
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Laravel / PHP', pct: 90 },
        { name: 'REST API', pct: 88 },
        { name: 'PostgreSQL', pct: 82 },
      ],
    },
    {
      title: 'DATA / AI',
      skills: [
        { name: 'Python', pct: 88 },
        { name: 'TensorFlow / PyTorch', pct: 75 },
        { name: 'Data Analytics', pct: 80 },
      ],
    },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.pageWhite}>
      <View style={s.body}>
        <Eyebrow label="Skills" icon={<IconLayers color={C.bg} size={12} />} />
        <Text style={s.sectionTitle}>Technical Proficiency</Text>

        {/* 3 Column panels */}
        <View style={{ flexDirection: 'row', gap: 18, marginTop: 24 }}>
          {columns.map((col, ci) => (
            <View key={ci} style={{
              flex: 1,
              backgroundColor: C.bgAlt,
              borderRadius: 6,
              borderTop: `3px solid ${C.accent}`,
              padding: '18 20',
            }}>
              <Text style={{
                fontSize: 9, fontWeight: 700, color: C.navy,
                letterSpacing: 2, marginBottom: 14,
                textTransform: 'uppercase' as const,
              }}>{col.title}</Text>
              {col.skills.map((sk, si) => (
                <SkillBar key={si} name={sk.name} pct={sk.pct} />
              ))}
            </View>
          ))}
        </View>

        {/* Navy summary strip */}
        <View style={{
          flexDirection: 'row',
          marginTop: 24,
          backgroundColor: C.navy,
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          {[
            { big: '12+', label: 'TECHNOLOGIES' },
            { big: 'EXPERT', label: 'TEAMWORK & COLLABORATION' },
            { big: 'EN/ID', label: 'FLUENT & NATIVE' },
          ].map((item, i) => (
            <View key={i} style={{
              flex: 1,
              padding: '14 20',
              alignItems: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <Text style={{ fontSize: 16, fontWeight: 700, color: C.accent2 }}>{item.big}</Text>
              <Text style={{
                fontSize: 7.5, fontWeight: 500, color: C.lightBlue,
                textTransform: 'uppercase' as const, letterSpacing: 1,
                marginTop: 3, textAlign: 'center',
              }}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={s.footerName}>Iman Yunar Noviadhi</Text>
      <Text style={s.slideNumber}>04 / 06</Text>
    </Page>
  );
}

/* ============================================
   SLIDE 5 — ACHIEVEMENTS (white bg)
   ============================================ */
function SlideAchievements() {
  const items = [
    {
      tag: 'PUBLISHED ARTICLE',
      title: 'Corresponding Author',
      detail: 'AI Chatbots in Operating Systems Education, UNNES Journal, Feb 2024',
    },
    {
      tag: 'NATIONAL COMPETITION',
      title: 'Top 10 Finalist',
      detail: 'Activation 7.0 Essay Competition 2024, HIMADIKA',
    },
    {
      tag: 'NATIONAL COMPETITION',
      title: '5th Place',
      detail: 'MEDISPRO Essay Competition 2025',
    },
    {
      tag: 'CERTIFICATE',
      title: 'DevOps Fundamentals',
      detail: 'Dicoding Indonesia × Amazon Web Services',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.pageWhite}>
      <View style={s.body}>
        <Eyebrow label="Achievements & Certifications" icon={<IconStar color={C.bg} size={12} />} />
        <Text style={s.sectionTitle}>Recognition</Text>

        {/* 2x2 Grid */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginTop: 24 }}>
          {items.map((item, i) => (
            <View key={i} style={{
              width: '47.5%',
              backgroundColor: C.bgAlt,
              borderRadius: 6,
              padding: '18 20',
              flexDirection: 'row',
              gap: 14,
            }}>
              {/* Icon badge */}
              <View style={{
                width: 32, height: 32, borderRadius: 16,
                backgroundColor: C.accent, alignItems: 'center', justifyContent: 'center',
                marginTop: 2,
              }}>
                <IconStar color={C.bg} size={14} />
              </View>
              {/* Content */}
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 8, fontWeight: 600, color: C.accent,
                  textTransform: 'uppercase' as const, letterSpacing: 1.5, marginBottom: 4,
                }}>{item.tag}</Text>
                <Text style={{ fontSize: 12, fontWeight: 600, color: C.navy }}>{item.title}</Text>
                <Text style={{ fontSize: 9, fontWeight: 300, color: C.muted, marginTop: 3, lineHeight: 1.4 }}>
                  {item.detail}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Navy highlight strip */}
        <View style={{
          flexDirection: 'row',
          marginTop: 24,
          backgroundColor: C.navy,
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          {[
            { big: '4', label: 'RECOGNITIONS EARNED' },
            { big: '2024–25', label: 'ACTIVE PERIOD' },
            { big: 'NATIONAL', label: 'COMPETITION LEVEL' },
          ].map((item, i) => (
            <View key={i} style={{
              flex: 1,
              padding: '14 20',
              alignItems: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <Text style={{ fontSize: 16, fontWeight: 700, color: C.accent2 }}>{item.big}</Text>
              <Text style={{
                fontSize: 7.5, fontWeight: 500, color: C.lightBlue,
                textTransform: 'uppercase' as const, letterSpacing: 1,
                marginTop: 3, textAlign: 'center',
              }}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={s.footerName}>Iman Yunar Noviadhi</Text>
      <Text style={s.slideNumber}>05 / 06</Text>
    </Page>
  );
}

/* ============================================
   SLIDE 6 — CLOSING / CONTACT (Navy bg)
   ============================================ */
function SlideContact() {
  const contacts = [
    { icon: <IconMail color={C.bg} size={14} />, label: 'EMAIL', value: 'imanyunar@gmail.com' },
    { icon: <IconCode color={C.bg} size={14} />, label: 'GITHUB', value: 'github.com/imanyunar' },
    { icon: <IconLink color={C.bg} size={14} />, label: 'LINKEDIN', value: 'linkedin.com/in/iman-yunar-noviadhi' },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.pageNavy}>
      <DiagonalLines />

      {/* Eyebrow */}
      <View style={{ position: 'absolute', top: 100, left: 60 }}>
        <Text style={{
          fontSize: 10, fontWeight: 600, color: C.accent2,
          letterSpacing: 3, textTransform: 'uppercase' as const,
        }}>
          Contact
        </Text>
      </View>

      {/* Headline */}
      <View style={{ position: 'absolute', top: 130, left: 60 }}>
        <Text style={{ fontSize: 32, fontWeight: 300, color: C.bg, letterSpacing: -0.5 }}>
          Let&apos;s build something
        </Text>
        <Text style={{ fontSize: 32, fontWeight: 700, color: C.accent2, letterSpacing: -0.5 }}>
          reliable together.
        </Text>
      </View>

      {/* Contact pill cards */}
      <View style={{ position: 'absolute', top: 260, left: 60, right: 60, flexDirection: 'row', gap: 20 }}>
        {contacts.map((c, i) => (
          <View key={i} style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            backgroundColor: 'rgba(255,255,255,0.07)',
            borderRadius: 8,
            padding: '14 18',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {/* Icon circle */}
            <View style={{
              width: 32, height: 32, borderRadius: 16,
              backgroundColor: C.accent,
              alignItems: 'center', justifyContent: 'center',
            }}>
              {c.icon}
            </View>
            <View>
              <Text style={{
                fontSize: 8, fontWeight: 600, color: C.lightBlue,
                textTransform: 'uppercase' as const, letterSpacing: 1.5,
              }}>{c.label}</Text>
              <Text style={{ fontSize: 10, fontWeight: 400, color: C.bg, marginTop: 2 }}>
                {c.value}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Watermark */}
      <Text style={s.watermark}>IYN</Text>

      {/* Footer bar */}
      <View style={s.footerBarDark}>
        <Text style={s.footerTextDark}>Iman Yunar Noviadhi</Text>
        <Text style={s.footerTextDark}>06 / 06</Text>
      </View>
    </Page>
  );
}

/* ============================================
   MAIN DOCUMENT
   ============================================ */
export default function PortfolioPDF() {
  return (
    <Document
      title="Iman Yunar Noviadhi — Portfolio"
      author="Iman Yunar Noviadhi"
      subject="Full-Stack Developer & AI Practitioner Portfolio"
      keywords="portfolio, full-stack, developer, AI, Iman Yunar"
    >
      <SlideCover />
      <SlideAbout />
      <SlideExperience />
      <SlideSkills />
      <SlideAchievements />
      <SlideContact />
    </Document>
  );
}
