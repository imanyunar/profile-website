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
  navyDark: '#03121E',
  navyCard: '#0A253A',
  accent: '#2251FF',
  accentCyan: '#00A9F4',
  accentCyanLight: '#38BDF8',
  bg: '#FFFFFF',
  bgAlt: '#F8FAFC',
  cardBg: '#F1F5F9',
  cardBorder: '#E2E8F0',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  lightLine: '#E2E8F0',
  tagBg: '#EEF2FF',
  tagBorder: '#C7D2FE',
  tagText: '#3730A3',
  lightBlue: '#93C5FD',
  paleBlue: '#CBD5E1',
};

const SLIDE_W = 841.89; // A4 landscape width in pts
const SLIDE_H = 595.28; // A4 landscape height in pts

/* ============================================
   STYLES
   ============================================ */
const s = StyleSheet.create({
  pageLight: {
    width: SLIDE_W,
    height: SLIDE_H,
    fontFamily: 'Inter',
    backgroundColor: C.bg,
    paddingTop: 34,
    paddingBottom: 36,
    paddingHorizontal: 48,
    position: 'relative',
  },
  pageDark: {
    width: SLIDE_W,
    height: SLIDE_H,
    fontFamily: 'Inter',
    backgroundColor: C.navy,
    paddingTop: 34,
    paddingBottom: 36,
    paddingHorizontal: 48,
    position: 'relative',
  },

  /* Header */
  headerContainer: {
    marginBottom: 16,
  },
  headerEyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  eyebrowBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerEyebrowTextLight: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.accent,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  headerEyebrowTextDark: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.accentCyanLight,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  headerTitleLight: {
    fontSize: 22,
    fontWeight: 700,
    color: C.navy,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  headerTitleDark: {
    fontSize: 22,
    fontWeight: 700,
    color: C.bg,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  headerSubtitleLight: {
    fontSize: 9.5,
    fontWeight: 400,
    color: C.textSecondary,
    marginTop: 3,
  },
  headerSubtitleDark: {
    fontSize: 9.5,
    fontWeight: 400,
    color: C.lightBlue,
    marginTop: 3,
  },
  headerDividerLight: {
    height: 1,
    backgroundColor: C.lightLine,
    marginTop: 10,
  },
  headerDividerDark: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    marginTop: 10,
  },

  /* Footer */
  footerContainer: {
    position: 'absolute',
    bottom: 18,
    left: 48,
    right: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    paddingTop: 8,
  },
  footerBorderLight: {
    borderTopColor: C.lightLine,
  },
  footerBorderDark: {
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  footerNameLight: {
    fontSize: 7.5,
    fontWeight: 600,
    color: C.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  footerNameDark: {
    fontSize: 7.5,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.45)',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  footerIndexLight: {
    fontSize: 8,
    fontWeight: 700,
    color: C.accent,
    letterSpacing: 0.5,
  },
  footerIndexDark: {
    fontSize: 8,
    fontWeight: 700,
    color: C.accentCyanLight,
    letterSpacing: 0.5,
  },
});

/* ============================================
   HEADER & FOOTER HELPERS
   ============================================ */
function SlideHeader({
  category,
  title,
  subtitle,
  isDark = false,
  icon,
}: {
  category: string;
  title: string;
  subtitle: string;
  isDark?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <View style={s.headerContainer}>
      <View style={s.headerEyebrowRow}>
        {icon && (
          <View style={[s.eyebrowBadge, isDark ? { backgroundColor: C.accentCyan } : {}]}>
            {icon}
          </View>
        )}
        <Text style={isDark ? s.headerEyebrowTextDark : s.headerEyebrowTextLight}>
          {category}
        </Text>
      </View>
      <Text style={isDark ? s.headerTitleDark : s.headerTitleLight}>
        {title}
      </Text>
      <Text style={isDark ? s.headerSubtitleDark : s.headerSubtitleLight}>
        {subtitle}
      </Text>
      <View style={isDark ? s.headerDividerDark : s.headerDividerLight} />
    </View>
  );
}

function SlideFooter({
  slideNum,
  isDark = false,
}: {
  slideNum: string;
  isDark?: boolean;
}) {
  return (
    <View style={[s.footerContainer, isDark ? s.footerBorderDark : s.footerBorderLight]}>
      <Text style={isDark ? s.footerNameDark : s.footerNameLight}>
        IMAN YUNAR NOVIADHI  |  PORTFOLIO 2026
      </Text>
      <Text style={isDark ? s.footerIndexDark : s.footerIndexLight}>
        {slideNum} / 06
      </Text>
    </View>
  );
}

/* ============================================
   ICON SVGs (Small, safe dimensions)
   ============================================ */
function IconUser({ size = 10, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconBriefcase({ size = 10, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconLayers({ size = 10, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M12 2L2 7l10 5 10-5-10-5z" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M2 17l10 5 10-5" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M2 12l10 5 10-5" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconAward({ size = 10, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="8" r="7" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconMail({ size = 12, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M22 6l-10 7L2 6" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconCode({ size = 12, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M16 18l6-6-6-6" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M8 6l-6 6 6 6" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

function IconExternalLink({ size = 12, color = '#FFFFFF' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M15 3h6v6" stroke={color} strokeWidth="2" fill="none" />
      <Path d="M10 14L21 3" stroke={color} strokeWidth="2" fill="none" />
    </Svg>
  );
}

/* ============================================
   SLIDE 1 — COVER (Navy Theme)
   ============================================ */
function SlideCover() {
  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageDark}>
      {/* Top Accent Strip */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: C.accent,
      }} />

      {/* Main Content Layout (2 Columns) */}
      <View style={{ flexDirection: 'row', gap: 36, marginTop: 40, flex: 1 }}>
        {/* Left Column: Headline & Bio */}
        <View style={{ flex: 1 }}>
          {/* Eyebrow */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: C.accent, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>I</Text>
            </View>
            <Text style={{ fontSize: 9, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 2, textTransform: 'uppercase' }}>
              Executive Portfolio  |  2026 Edition
            </Text>
          </View>

          {/* Name */}
          <Text style={{ fontSize: 36, fontWeight: 300, color: '#FFFFFF', letterSpacing: -0.5 }}>
            Iman Yunar
          </Text>
          <Text style={{ fontSize: 36, fontWeight: 700, color: '#FFFFFF', letterSpacing: -0.5 }}>
            Noviadhi
          </Text>

          {/* Role */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 10 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: C.accentCyan }} />
            <Text style={{ fontSize: 14, fontWeight: 600, color: C.lightBlue, letterSpacing: 0.3 }}>
              Full-Stack Developer & Applied AI Practitioner
            </Text>
          </View>

          {/* Divider */}
          <View style={{ width: 48, height: 2, backgroundColor: C.accent, marginTop: 14, marginBottom: 14 }} />

          {/* Value Proposition Statement */}
          <Text style={{ fontSize: 10.5, fontWeight: 300, color: C.paleBlue, lineHeight: 1.65, maxWidth: 430 }}>
            Building reliable digital systems — combining rigorous full-stack software engineering
            depth (Laravel, Vue.js, TypeScript, PostgreSQL) with applied machine learning and
            a proven track record of cross-university leadership.
          </Text>

          {/* Core Stack Pill Badges */}
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 20 }}>
            {[
              'Laravel & Vue.js',
              'TypeScript & Next.js',
              'PostgreSQL',
              'Applied AI & Python',
            ].map((tag, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: 4,
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 8, fontWeight: 600, color: C.lightBlue }}>{tag}</Text>
              </View>
            ))}
          </View>

          {/* Contact Bar */}
          <View style={{ flexDirection: 'row', gap: 20, marginTop: 28 }}>
            <Text style={{ fontSize: 8.5, fontWeight: 400, color: C.lightBlue }}>imanyunar@gmail.com</Text>
            <Text style={{ fontSize: 8.5, fontWeight: 400, color: C.lightBlue }}>github.com/imanyunar</Text>
            <Text style={{ fontSize: 8.5, fontWeight: 400, color: C.lightBlue }}>Semarang, Indonesia</Text>
          </View>
        </View>

        {/* Right Column: Executive Snapshot Card */}
        <View style={{ width: 250 }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: 8,
              padding: 20,
            }}
          >
            {/* Monogram Circle */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: C.accent,
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: C.accentCyan,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', letterSpacing: 1 }}>IYN</Text>
              </View>
              <View>
                <Text style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Candidate Snapshot</Text>
                <Text style={{ fontSize: 8, fontWeight: 400, color: C.lightBlue, marginTop: 1 }}>
                  UNNES Computer Science
                </Text>
              </View>
            </View>

            {/* Quick Metrics Rows */}
            {[
              { label: 'Leadership', val: 'McKinsey.org Forward (2026)' },
              { label: 'Primary Focus', val: 'Full-Stack & Applied AI' },
              { label: 'Industry Project', val: 'Document Management (TAS)' },
              { label: 'Testing Record', val: '100% Pass (77 Scenarios)' },
              { label: 'International', val: 'Inbound Mobility (UTHM)' },
              { label: 'Academic Impact', val: 'Published Journal Author' },
            ].map((row, idx) => (
              <View
                key={idx}
                style={{
                  borderTopWidth: idx > 0 ? 1 : 0,
                  borderTopStyle: 'solid',
                  borderTopColor: 'rgba(255, 255, 255, 0.08)',
                  paddingVertical: 7,
                }}
              >
                <Text style={{ fontSize: 7, fontWeight: 600, color: C.textMuted, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                  {row.label}
                </Text>
                <Text style={{ fontSize: 9, fontWeight: 600, color: '#FFFFFF', marginTop: 1 }}>
                  {row.val}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <SlideFooter slideNum="01" isDark />
    </Page>
  );
}

/* ============================================
   SLIDE 2 — ABOUT (White Theme)
   ============================================ */
function SlideAbout() {
  const stats = [
    { num: '100%', label: 'QA PASS RATE', desc: '77 Black-Box test scenarios passed with zero defects' },
    { num: 'McKinsey', label: 'FORWARD PROGRAM', desc: 'Selected for McKinsey.org global leadership program' },
    { num: '1', label: 'JOURNAL PUBLICATION', desc: 'Corresponding author on AI chatbot research in UNNES Journal' },
    { num: '2×', label: 'EVENT CHAIRPERSON', desc: 'Led cross-university comparative studies with UNESA & UB' },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="01 / Profile Overview"
        title="Executive Summary & Value Proposition"
        subtitle="A dedicated technologist bridging solid engineering practices with strategic organizational leadership."
        icon={<IconUser size={10} color="#FFFFFF" />}
      />

      {/* Main Content Area */}
      <View style={{ flexDirection: 'row', gap: 24, marginTop: 4 }}>
        {/* Left Column: Narrative & Quote */}
        <View style={{ flex: 1.1 }}>
          {/* Paragraphs */}
          <View
            style={{
              backgroundColor: C.bgAlt,
              borderRadius: 6,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: C.cardBorder,
              padding: 16,
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: 700, color: C.navy, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Professional Background
            </Text>
            <Text style={{ fontSize: 9.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.65 }}>
              Undergraduate Computer Science student at Universitas Negeri Semarang with extensive hands-on
              experience in production web application development. Proven track record architecting robust
              database solutions and full-stack systems using Laravel, Vue.js, TypeScript, and PostgreSQL.
            </Text>
            <Text style={{ fontSize: 9.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.65, marginTop: 8 }}>
              Demonstrated capability to combine technical execution with academic research rigor and organizational
              governance. Adaptable communicator experienced in cross-institutional study programs and international
              student mobility.
            </Text>
          </View>

          {/* Pull Quote Box */}
          <View
            style={{
              marginTop: 14,
              backgroundColor: '#EFF6FF',
              borderRadius: 6,
              borderLeftWidth: 3,
              borderLeftStyle: 'solid',
              borderLeftColor: C.accent,
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: 500, color: C.navy, lineHeight: 1.55 }}>
              &quot;Driven to deliver verifiable impact through rigorous testing, robust engineering, and AI-enabled innovation.&quot;
            </Text>
          </View>
        </View>

        {/* Right Column: 4 Key Metric Cards (2x2 Grid) */}
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {stats.map((stat, i) => (
              <View
                key={i}
                style={{
                  width: '47.5%',
                  backgroundColor: C.navy,
                  borderRadius: 6,
                  padding: 14,
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: 300, color: '#FFFFFF' }}>{stat.num}</Text>
                <Text style={{
                  fontSize: 7.5,
                  fontWeight: 700,
                  color: C.accentCyanLight,
                  letterSpacing: 0.8,
                  textTransform: 'uppercase',
                  marginTop: 3,
                }}>
                  {stat.label}
                </Text>
                <Text style={{
                  fontSize: 7.5,
                  fontWeight: 400,
                  color: C.lightBlue,
                  lineHeight: 1.4,
                  marginTop: 4,
                }}>
                  {stat.desc}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Bottom Core Pillars Banner */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          backgroundColor: C.cardBg,
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: C.cardBorder,
          overflow: 'hidden',
        }}
      >
        {[
          {
            pillar: 'ENGINEERING RIGOR',
            detail: 'Full-stack development with disciplined black-box testing and reliable database modeling.',
          },
          {
            pillar: 'APPLIED INTELLIGENCE',
            detail: 'Practical integration of Python, machine learning workflows, and data-informed decision making.',
          },
          {
            pillar: 'COLLABORATIVE LEADERSHIP',
            detail: 'Cross-university event chairmanship, department administration, and international mobility.',
          },
        ].map((item, idx) => (
          <View
            key={idx}
            style={{
              flex: 1,
              padding: 12,
              borderRightWidth: idx < 2 ? 1 : 0,
              borderRightStyle: 'solid',
              borderRightColor: C.cardBorder,
            }}
          >
            <Text style={{ fontSize: 8, fontWeight: 700, color: C.accent, letterSpacing: 1, textTransform: 'uppercase' }}>
              {item.pillar}
            </Text>
            <Text style={{ fontSize: 8, fontWeight: 400, color: C.textSecondary, marginTop: 2, lineHeight: 1.4 }}>
              {item.detail}
            </Text>
          </View>
        ))}
      </View>

      <SlideFooter slideNum="02" />
    </Page>
  );
}

/* ============================================
   SLIDE 3 — EXPERIENCE (White Theme)
   ============================================ */
function SlideExperience() {
  const experiences = [
    {
      num: '01',
      role: 'Web Developer Intern',
      org: 'PT Teknologi Aplikasi Sejahtera',
      period: 'FEB – JUL 2026',
      badge: 'Corporate Internship',
      detail: 'Engineered Document Management System using Laravel, Vue.js, TypeScript, and PostgreSQL. Achieved 100% pass rate across 77 Black Box test scenarios. Rated EXCELLENT by corporate supervisor.',
    },
    {
      num: '02',
      role: 'Secretary, Public Relations Dept',
      org: 'UKMP, Universitas Negeri Semarang',
      period: 'FEB – NOV 2025',
      badge: 'Department Leadership',
      detail: 'Served as Event Chairperson for 2 major cross-university comparative study visits with Universitas Negeri Surabaya (UNESA) and Universitas Brawijaya (UB). Managed stakeholder communications.',
    },
    {
      num: '03',
      role: 'Inbound Virtual Student Mobility',
      org: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
      period: 'JUL – SEP 2026',
      badge: 'International Mobility',
      detail: 'Completed international academic exchange in computer science, participating in cross-border technical discussions and collaborative coursework.',
    },
    {
      num: '04',
      role: 'Staff, Internal & Organizational Supervision',
      org: 'ISAFIS (Indonesian Student Association for International Studies)',
      period: 'APR – DEC 2024',
      badge: 'Organizational Governance',
      detail: 'Engineered secure online voting system for presidential election, ensuring ballot integrity and transparency. Contributed to institutional governance policies.',
    },
    {
      num: '05',
      role: 'Corresponding Author & Lead Researcher',
      org: 'UNNES Journal',
      period: 'AUG 2023 – FEB 2024',
      badge: 'Academic Research',
      detail: 'Authored and published scientific article investigating AI chatbot instructional efficacy in university Operating Systems education.',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="02 / Track Record"
        title="Professional Experience & Leadership Trajectory"
        subtitle="Demonstrated delivery across software engineering, academic research, and institutional governance."
        icon={<IconBriefcase size={10} color="#FFFFFF" />}
      />

      {/* Main Content Layout */}
      <View style={{ flexDirection: 'row', gap: 24, marginTop: 4 }}>
        {/* Left Column: 5 Structured Milestone Rows */}
        <View style={{ flex: 1.25 }}>
          {experiences.map((exp, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: 'row',
                gap: 12,
                backgroundColor: idx % 2 === 0 ? C.bgAlt : C.bg,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: C.cardBorder,
                borderRadius: 5,
                padding: 10,
                marginBottom: 8,
              }}
            >
              {/* Number Badge */}
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: C.navy,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 8.5, fontWeight: 700, color: '#FFFFFF' }}>{exp.num}</Text>
              </View>

              {/* Details */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 10, fontWeight: 700, color: C.navy }}>{exp.role}</Text>
                  <Text style={{ fontSize: 7.5, fontWeight: 700, color: C.accent, letterSpacing: 0.8 }}>
                    {exp.period}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 1 }}>
                  <Text style={{ fontSize: 8.5, fontWeight: 500, color: C.textSecondary }}>{exp.org}</Text>
                  <Text style={{ fontSize: 7, fontWeight: 600, color: C.textMuted }}>•</Text>
                  <Text style={{ fontSize: 7.5, fontWeight: 600, color: C.accentCyan }}>{exp.badge}</Text>
                </View>

                <Text style={{ fontSize: 8, fontWeight: 400, color: C.textSecondary, lineHeight: 1.45, marginTop: 3 }}>
                  {exp.detail}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Right Column: Experience Highlights Card */}
        <View style={{ flex: 0.65 }}>
          <View
            style={{
              backgroundColor: C.navy,
              borderRadius: 6,
              padding: 18,
            }}
          >
            <Text style={{ fontSize: 8.5, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Execution Highlights
            </Text>
            <Text style={{ fontSize: 32, fontWeight: 300, color: '#FFFFFF', marginTop: 4 }}>
              5 Key
            </Text>
            <Text style={{ fontSize: 11, fontWeight: 600, color: C.lightBlue, marginTop: -2 }}>
              Milestones &amp; Responsibilities
            </Text>

            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.12)', marginTop: 12, marginBottom: 12 }} />

            {[
              { title: 'Industry Delivery', desc: 'Built production DMS with strict QA' },
              { title: 'Global Mobility', desc: 'International exchange with UTHM' },
              { title: 'Peer-Reviewed Science', desc: 'Published lead author in UNNES Journal' },
              { title: 'Team Leadership', desc: 'Led 2 comparative study delegations' },
            ].map((item, i) => (
              <View key={i} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 8.5, fontWeight: 700, color: '#FFFFFF' }}>{item.title}</Text>
                <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.paleBlue, marginTop: 1 }}>
                  {item.desc}
                </Text>
              </View>
            ))}

            <View
              style={{
                backgroundColor: 'rgba(34, 81, 255, 0.25)',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: C.accent,
                borderRadius: 4,
                padding: 8,
                marginTop: 4,
              }}
            >
              <Text style={{ fontSize: 7.5, fontWeight: 500, color: '#FFFFFF', lineHeight: 1.4 }}>
                Combines high-discipline software architecture with proven communication leadership.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <SlideFooter slideNum="03" />
    </Page>
  );
}

/* ============================================
   SLIDE 4 — SKILLS & ARCHITECTURE (White Theme)
   ============================================ */
function SlideSkills() {
  const pillars = [
    {
      title: 'FRONTEND ENGINEERING',
      tagline: 'Modern Web & Interactive UIs',
      skills: [
        { name: 'Next.js & React', level: 'ADVANCED', focus: 'App Router, SSR, Server Components' },
        { name: 'TypeScript', level: 'ADVANCED', focus: 'Type safety, generics, interfaces' },
        { name: 'Vue.js', level: 'PROFICIENT', focus: 'Composition API, Pinia state management' },
        { name: 'TailwindCSS', level: 'ADVANCED', focus: 'Design tokens, responsive layouts' },
      ],
    },
    {
      title: 'BACKEND & DATABASE',
      tagline: 'APIs, Security & Data Modeling',
      skills: [
        { name: 'Laravel / PHP', level: 'ADVANCED', focus: 'Eloquent ORM, Auth, MVC architecture' },
        { name: 'RESTful API Design', level: 'ADVANCED', focus: 'Clean contracts, Swagger documentation' },
        { name: 'PostgreSQL / MySQL', level: 'PROFICIENT', focus: 'Schema design, indexing, optimization' },
        { name: 'Docker & Linux', level: 'COMPETENT', focus: 'Containerized setups, shell workflows' },
      ],
    },
    {
      title: 'APPLIED AI & DATA',
      tagline: 'Machine Learning & Analytics',
      skills: [
        { name: 'Python', level: 'ADVANCED', focus: 'Automation scripts, data pipelines' },
        { name: 'Data Analytics', level: 'PROFICIENT', focus: 'Pandas, NumPy, exploratory analysis' },
        { name: 'Machine Learning', level: 'COMPETENT', focus: 'TensorFlow, PyTorch, model testing' },
        { name: 'AI / LLM Workflows', level: 'PROFICIENT', focus: 'Prompt engineering, API integration' },
      ],
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="03 / Core Capabilities"
        title="Technical Architecture & Competency Matrix"
        subtitle="Comprehensive full-stack engineering capabilities categorized by layer, stack, and proficiency."
        icon={<IconLayers size={10} color="#FFFFFF" />}
      />

      {/* 3 Structured Pillar Cards */}
      <View style={{ flexDirection: 'row', gap: 16, marginTop: 6 }}>
        {pillars.map((p, idx) => (
          <View
            key={idx}
            style={{
              flex: 1,
              backgroundColor: C.bgAlt,
              borderRadius: 6,
              borderTopWidth: 3,
              borderTopStyle: 'solid',
              borderTopColor: C.accent,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: C.cardBorder,
              padding: 14,
            }}
          >
            {/* Pillar Header */}
            <Text style={{ fontSize: 9.5, fontWeight: 700, color: C.navy, letterSpacing: 1.2, textTransform: 'uppercase' }}>
              {p.title}
            </Text>
            <Text style={{ fontSize: 7.5, fontWeight: 500, color: C.textMuted, marginTop: 2, marginBottom: 12 }}>
              {p.tagline}
            </Text>

            {/* Skills List */}
            {p.skills.map((sk, sIdx) => (
              <View
                key={sIdx}
                style={{
                  backgroundColor: C.bg,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: C.cardBorder,
                  borderRadius: 4,
                  padding: 8,
                  marginBottom: 8,
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 9, fontWeight: 700, color: C.navy }}>{sk.name}</Text>
                  <View
                    style={{
                      backgroundColor: C.tagBg,
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: C.tagBorder,
                      borderRadius: 3,
                      paddingVertical: 1,
                      paddingHorizontal: 4,
                    }}
                  >
                    <Text style={{ fontSize: 6.5, fontWeight: 700, color: C.tagText }}>{sk.level}</Text>
                  </View>
                </View>
                <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.textSecondary, marginTop: 3 }}>
                  {sk.focus}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Bottom Architectural Highlights Strip */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 14,
          backgroundColor: C.navy,
          borderRadius: 6,
          padding: 12,
        }}
      >
        {[
          { title: '12+ TECHNOLOGIES', desc: 'Spanning modern frontend, backend, databases, and applied AI.' },
          { title: 'TESTING DISCIPLINE', desc: '100% verified test scenarios and clean code conventions.' },
          { title: 'BILINGUAL COMMUNICATION', desc: 'English (Professional working proficiency) & Indonesian (Native).' },
        ].map((item, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              alignItems: 'center',
              borderRightWidth: i < 2 ? 1 : 0,
              borderRightStyle: 'solid',
              borderRightColor: 'rgba(255, 255, 255, 0.12)',
              paddingHorizontal: 12,
            }}
          >
            <Text style={{ fontSize: 8.5, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.lightBlue, textAlign: 'center', marginTop: 2 }}>
              {item.desc}
            </Text>
          </View>
        ))}
      </View>

      <SlideFooter slideNum="04" />
    </Page>
  );
}

/* ============================================
   SLIDE 5 — ACHIEVEMENTS & HONORS (White Theme)
   ============================================ */
function SlideAchievements() {
  const honors = [
    {
      category: 'GLOBAL LEADERSHIP INITIATIVE',
      title: 'Selected Participant — McKinsey Forward',
      org: 'McKinsey.org · Accepted 2026',
      description:
        'Selected for McKinsey & Company’s Forward program. Developing structured problem-solving, digital toolkits, adaptable leadership, and executive communication competencies.',
      stat: 'ACCEPTED',
    },
    {
      category: 'PEER-REVIEWED PUBLICATION',
      title: 'Corresponding Author & Lead Researcher',
      org: 'UNNES Journal  |  Published Feb 2024',
      description:
        'Published empirical study examining AI chatbot pedagogical efficacy in computer science higher education (Operating Systems course). Conducted statistical analysis and literature synthesis.',
      stat: 'PUBLISHED',
    },
    {
      category: 'NATIONAL COMPETITIONS',
      title: 'Top 10 Finalist & 5th Place Award',
      org: 'Activation 7.0 & MEDISPRO  |  2024–2025',
      description:
        'Recognized nationwide for analytical research essays regarding technological integration, health data systems, and digital education policies.',
      stat: 'HONORS',
    },
    {
      category: 'INDUSTRY CERTIFICATION',
      title: 'Cloud & DevOps Fundamentals',
      org: 'Dicoding Indonesia × Amazon Web Services (AWS)',
      description:
        'Mastered foundational AWS cloud infrastructure, CI/CD pipeline automation, virtualization, and reliable containerized application hosting.',
      stat: 'CERTIFIED',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="04 / Honors & Verification"
        title="Academic Honors, Competitions & Certifications"
        subtitle="Documented verification of analytical rigor, scientific communication, and cloud infrastructure knowledge."
        icon={<IconAward size={10} color="#FFFFFF" />}
      />

      {/* 2x2 Grid of Achievement Cards */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, marginTop: 6 }}>
        {honors.map((item, idx) => (
          <View
            key={idx}
            style={{
              width: '48.5%',
              backgroundColor: C.bgAlt,
              borderRadius: 6,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: C.cardBorder,
              padding: 14,
            }}
          >
            {/* Card Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View
                style={{
                  backgroundColor: C.tagBg,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: C.tagBorder,
                  borderRadius: 3,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                }}
              >
                <Text style={{ fontSize: 7, fontWeight: 700, color: C.accent, letterSpacing: 0.8 }}>
                  {item.category}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: C.navy,
                  borderRadius: 3,
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                }}
              >
                <Text style={{ fontSize: 6.5, fontWeight: 700, color: '#FFFFFF' }}>{item.stat}</Text>
              </View>
            </View>

            {/* Title & Organization */}
            <Text style={{ fontSize: 11, fontWeight: 700, color: C.navy, marginTop: 8 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 8, fontWeight: 500, color: C.textMuted, marginTop: 2 }}>
              {item.org}
            </Text>

            {/* Description */}
            <Text style={{ fontSize: 8, fontWeight: 400, color: C.textSecondary, lineHeight: 1.5, marginTop: 6 }}>
              {item.description}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Summary Banner */}
      <View
        style={{
          marginTop: 16,
          backgroundColor: C.navy,
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: C.accent,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconAward size={14} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>
            Verified Commitment to Technical Excellence & Academic Rigor
          </Text>
          <Text style={{ fontSize: 8, fontWeight: 400, color: C.lightBlue, marginTop: 2, lineHeight: 1.4 }}>
            From peer-reviewed publication to national competitive writing and industry cloud certification,
            each milestone demonstrates consistent quality and dedication.
          </Text>
        </View>
      </View>

      <SlideFooter slideNum="05" />
    </Page>
  );
}

/* ============================================
   SLIDE 6 — CLOSING / ENGAGEMENT (Navy Theme)
   ============================================ */
function SlideContact() {
  const channels = [
    {
      title: 'DIRECT EMAIL',
      val: 'imanyunar@gmail.com',
      desc: 'Preferred for recruitment, technical interviews, and formal inquiries.',
      icon: <IconMail size={14} color="#FFFFFF" />,
    },
    {
      title: 'CODE REPOSITORY',
      val: 'github.com/imanyunar',
      desc: 'Browse open-source projects, architecture patterns, and technical tests.',
      icon: <IconCode size={14} color="#FFFFFF" />,
    },
    {
      title: 'LINKEDIN NETWORK',
      val: 'linkedin.com/in/iman-yunar-noviadhi',
      desc: 'Explore professional endorsements, verified experience, and connections.',
      icon: <IconExternalLink size={14} color="#FFFFFF" />,
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageDark}>
      {/* Top Accent Strip */}
      <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        backgroundColor: C.accent,
      }} />

      <SlideHeader
        category="Collaboration  |  2026"
        title="Let's build reliable, high-impact systems together."
        subtitle="Available for software engineering roles, technical internships, and innovative AI-driven development."
        isDark
        icon={<IconMail size={10} color="#FFFFFF" />}
      />

      {/* Center 3 Action Cards */}
      <View style={{ flexDirection: 'row', gap: 18, marginTop: 12 }}>
        {channels.map((ch, idx) => (
          <View
            key={idx}
            style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: 8,
              padding: 18,
            }}
          >
            {/* Icon & Category */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: C.accent,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ch.icon}
              </View>
              <Text style={{ fontSize: 8, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                {ch.title}
              </Text>
            </View>

            {/* Value */}
            <Text style={{ fontSize: 10.5, fontWeight: 700, color: '#FFFFFF', marginTop: 2 }}>
              {ch.val}
            </Text>

            {/* Description */}
            <Text style={{ fontSize: 8, fontWeight: 400, color: C.paleBlue, lineHeight: 1.5, marginTop: 8 }}>
              {ch.desc}
            </Text>
          </View>
        ))}
      </View>

      {/* Location & Availability Banner */}
      <View
        style={{
          marginTop: 24,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: 6,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 8, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1, textTransform: 'uppercase' }}>
            Location &amp; Work Eligibility
          </Text>
          <Text style={{ fontSize: 9.5, fontWeight: 500, color: '#FFFFFF', marginTop: 2 }}>
            Based in Semarang, Central Java, Indonesia  •  Open to Remote, Hybrid, &amp; On-Site Opportunities
          </Text>
        </View>

        <View
          style={{
            backgroundColor: C.accent,
            borderRadius: 4,
            paddingVertical: 6,
            paddingHorizontal: 12,
          }}
        >
          <Text style={{ fontSize: 8, fontWeight: 700, color: '#FFFFFF', letterSpacing: 0.5 }}>
            READY TO CONTRIBUTE
          </Text>
        </View>
      </View>

      <SlideFooter slideNum="06" isDark />
    </Page>
  );
}

/* ============================================
   MAIN DOCUMENT
   ============================================ */
export default function PortfolioPDF() {
  return (
    <Document
      title="Iman Yunar Noviadhi — Executive Portfolio"
      author="Iman Yunar Noviadhi"
      subject="Full-Stack Developer & AI Practitioner Portfolio (McKinsey Presentation Style)"
      keywords="portfolio, full-stack, developer, AI, Iman Yunar Noviadhi, software engineer, Laravel, TypeScript, React"
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
