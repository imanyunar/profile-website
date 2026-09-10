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
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 28 }}>
            <Text style={{ fontSize: 8.5, fontWeight: 500, color: C.lightBlue }}>0851-7224-7452</Text>
            <Text style={{ fontSize: 8.5, fontWeight: 400, color: C.lightBlue }}>imanyunar@gmail.com</Text>
            <Text style={{ fontSize: 8.5, fontWeight: 400, color: C.lightBlue }}>imanyunar.my.id</Text>
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
              { label: 'Education & GPA', val: 'UNNES CS · GPA: 3.84 out of 4.00' },
              { label: 'Industry Project', val: 'Enterprise DMS (TAS · EXCELLENT)' },
              { label: 'Testing Record', val: '77 Functional Scenarios Validated' },
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
    { num: '3.84', label: 'CUMULATIVE GPA', desc: 'Bachelor of Computer Science at UNNES (out of 4.00)' },
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
            <Text style={{ fontSize: 9.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.6 }}>
              Computer Science undergraduate at Universitas Negeri Semarang and McKinsey Forward Program Participant
              with strong capabilities in software engineering, applied AI, and project leadership. Proven track record
              architecting enterprise solutions (Laravel, Vue.js, PostgreSQL) and conducting rigorous functional QA across 77 test scenarios.
            </Text>
            <Text style={{ fontSize: 9.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.6, marginTop: 7 }}>
              Skilled in bridging technical execution with strategic organizational goals, experienced in leading cross-institutional
              initiatives and managing multi-stakeholder projects. Eager to drive measurable business value and digital transformation
              in consulting and global enterprise environments.
            </Text>
          </View>

          {/* Pull Quote Box */}
          <View
            style={{
              marginTop: 12,
              backgroundColor: '#EFF6FF',
              borderRadius: 6,
              borderLeftWidth: 3,
              borderLeftStyle: 'solid',
              borderLeftColor: C.accent,
              paddingVertical: 10,
              paddingHorizontal: 14,
            }}
          >
            <Text style={{ fontSize: 9.5, fontWeight: 500, color: C.navy, lineHeight: 1.5 }}>
              &quot;Bridging technical execution with strategic organizational goals to drive measurable business value and digital transformation.&quot;
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
          marginTop: 14,
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
            detail: 'Enterprise Laravel, Vue.js & PostgreSQL architecture with rigorous QA across 77 functional test scenarios.',
          },
          {
            pillar: 'STRATEGIC PROBLEM SOLVING',
            detail: 'McKinsey Forward participant applying MECE frameworks, issue trees, and digital transformation.',
          },
          {
            pillar: 'PROJECT LEADERSHIP',
            detail: 'Cross-university event chairperson, multi-stakeholder coordination, and international exchange.',
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
      role: 'McKinsey Forward Program Participant',
      org: 'McKinsey & Company',
      period: 'SEP 2026 – PRESENT',
      badge: 'Global Initiative',
      detail: 'Selected for intensive global learning initiative. Applying MECE frameworks, issue trees, and digital transformation to evaluate complex business scenarios.',
    },
    {
      num: '02',
      role: 'Web Developer Intern',
      org: 'PT Teknologi Aplikasi Sejahtera (TAS)',
      period: 'FEB – JUL 2026',
      badge: 'Corporate Internship',
      detail: 'Engineered enterprise Document Management System (Laravel, Vue.js, TypeScript, PostgreSQL) and executed 77 Black Box test scenarios with zero critical defects. Rating: EXCELLENT.',
    },
    {
      num: '03',
      role: 'Inbound Virtual Student Mobility',
      org: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
      period: 'JUL – SEP 2026',
      badge: 'International Mobility',
      detail: 'Completed international academic exchange focusing on Industrial Revolution 4.0 concepts, digital transformation trends, and cross-border technical discussions.',
    },
    {
      num: '04',
      role: 'Secretary, Public Relations Dept',
      org: 'UKMP, Universitas Negeri Semarang',
      period: 'FEB – NOV 2025',
      badge: 'Department Leadership',
      detail: 'Event Chairperson for 2 cross-university comparative study programs with UNESA & UB. Managed stakeholder communications, logistics, and student delegations.',
    },
    {
      num: '05',
      role: 'Staff of Internal & Organizational Supervision',
      org: 'ISAFIS (Indonesian Student Assoc. for Int. Studies)',
      period: 'APR – DEC 2024',
      badge: 'Systems & Governance',
      detail: 'Developed and deployed secure online voting system for presidential election. Maintained central member databases and co-executed MOCA 2024 orientation.',
    },
    {
      num: '06',
      role: 'Corresponding Author & Lead Researcher',
      org: 'UNNES Journal (Mediasi)',
      period: 'AUG 2023 – FEB 2024',
      badge: 'Academic Research',
      detail: 'Authored peer-reviewed paper on AI chatbot instructional efficacy in university Operating Systems education, conducting statistical and usability analysis.',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="02 / Track Record"
        title="Professional Experience & Leadership Trajectory"
        subtitle="Demonstrated delivery across software engineering, strategic problem-solving, and institutional governance."
        icon={<IconBriefcase size={10} color="#FFFFFF" />}
      />

      {/* Main Content Layout */}
      <View style={{ flexDirection: 'row', gap: 20, marginTop: 4 }}>
        {/* Left Column: 6 Structured Milestone Rows */}
        <View style={{ flex: 1.3 }}>
          {experiences.map((exp, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: 'row',
                gap: 10,
                backgroundColor: idx % 2 === 0 ? C.bgAlt : C.bg,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: C.cardBorder,
                borderRadius: 5,
                paddingVertical: 6,
                paddingHorizontal: 9,
                marginBottom: 5,
              }}
            >
              {/* Number Badge */}
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: C.navy,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 8, fontWeight: 700, color: '#FFFFFF' }}>{exp.num}</Text>
              </View>

              {/* Details */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 9, fontWeight: 700, color: C.navy }}>{exp.role}</Text>
                  <Text style={{ fontSize: 7, fontWeight: 700, color: C.accent, letterSpacing: 0.6 }}>
                    {exp.period}
                  </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 1 }}>
                  <Text style={{ fontSize: 7.5, fontWeight: 500, color: C.textSecondary }}>{exp.org}</Text>
                  <Text style={{ fontSize: 6.5, fontWeight: 600, color: C.textMuted }}>•</Text>
                  <Text style={{ fontSize: 7, fontWeight: 600, color: C.accentCyan }}>{exp.badge}</Text>
                </View>

                <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.4, marginTop: 2 }}>
                  {exp.detail}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Right Column: Experience Highlights Card */}
        <View style={{ flex: 0.6 }}>
          <View
            style={{
              backgroundColor: C.navy,
              borderRadius: 6,
              padding: 14,
            }}
          >
            <Text style={{ fontSize: 8, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1.3, textTransform: 'uppercase' }}>
              Execution Highlights
            </Text>
            <Text style={{ fontSize: 26, fontWeight: 300, color: '#FFFFFF', marginTop: 2 }}>
              6 Key
            </Text>
            <Text style={{ fontSize: 9.5, fontWeight: 600, color: C.lightBlue, marginTop: -2 }}>
              Milestones &amp; Responsibilities
            </Text>

            <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.12)', marginTop: 8, marginBottom: 8 }} />

            {[
              { title: 'Strategic Leadership', desc: 'McKinsey Forward consulting toolkit' },
              { title: 'Academic Honors', desc: 'UNNES CS · GPA: 3.84 out of 4.00' },
              { title: 'Industry Delivery', desc: 'Enterprise DMS & 77 QA scenarios (EXCELLENT)' },
              { title: 'Global Mobility', desc: 'International exchange with UTHM Malaysia' },
              { title: 'Peer-Reviewed Science', desc: 'Lead author on AI chatbots in UNNES Journal' },
            ].map((item, i) => (
              <View key={i} style={{ marginBottom: 6 }}>
                <Text style={{ fontSize: 7.5, fontWeight: 700, color: '#FFFFFF' }}>{item.title}</Text>
                <Text style={{ fontSize: 6.5, fontWeight: 400, color: C.paleBlue, marginTop: 1 }}>
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
                padding: 6,
                marginTop: 2,
              }}
            >
              <Text style={{ fontSize: 7, fontWeight: 500, color: '#FFFFFF', lineHeight: 1.35 }}>
                Bridges technical software execution with strategic problem-solving and institutional governance.
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
      title: 'CONSULTING & STRATEGY',
      tagline: 'Problem Solving & Leadership',
      skills: [
        { name: 'Structured Problem Solving', level: 'ADVANCED', focus: 'MECE framework, issue trees, hypothesis analysis' },
        { name: 'Data-Driven Business Analysis', level: 'EXPERT', focus: 'Synthesizing metrics into strategic executive decisions' },
        { name: 'Team Leadership & Governance', level: 'ADVANCED', focus: 'Cross-functional delegation, institutional partnerships' },
        { name: 'Digital Transformation', level: 'ADVANCED', focus: 'Process digitization, agile PM, tech adoption' },
      ],
    },
    {
      title: 'LANGUAGES & FRAMEWORKS',
      tagline: 'Full-Stack Software Engineering',
      skills: [
        { name: 'Python & Applied AI', level: 'EXPERT', focus: 'Deep learning, automation scripts, data analytics' },
        { name: 'Laravel & PHP', level: 'EXPERT', focus: 'Enterprise MVC architecture, Eloquent ORM, Auth' },
        { name: 'Vue.js & Next.js', level: 'EXPERT', focus: 'Composition API, Pinia, SSR, reactive web apps' },
        { name: 'TypeScript & JavaScript', level: 'ADVANCED', focus: 'Strict type safety, modern async patterns, clean code' },
      ],
    },
    {
      title: 'DATABASES, CLOUD & TOOLS',
      tagline: 'Infrastructure, Data & DevOps',
      skills: [
        { name: 'PostgreSQL & MySQL', level: 'EXPERT', focus: 'Relational schema design, RBAC, indexing, optimization' },
        { name: 'Docker & Git', level: 'EXPERT', focus: 'Containerized setups, branch workflows, CI/CD' },
        { name: 'Amazon Web Services', level: 'ADVANCED', focus: 'Certified cloud fundamentals, security, deployment' },
        { name: 'RESTful APIs & Postman', level: 'ADVANCED', focus: 'Contract design, automated testing, documentation' },
      ],
    },
  ];

  return (
    <Page size="A4" orientation="landscape" wrap={false} style={s.pageLight}>
      <SlideHeader
        category="03 / Core Capabilities"
        title="Technical Architecture & Strategic Competency Matrix"
        subtitle="Comprehensive capabilities bridging executive-level consulting frameworks with robust software engineering."
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
              padding: 13,
            }}
          >
            {/* Pillar Header */}
            <Text style={{ fontSize: 9.5, fontWeight: 700, color: C.navy, letterSpacing: 1.2, textTransform: 'uppercase' }}>
              {p.title}
            </Text>
            <Text style={{ fontSize: 7.5, fontWeight: 500, color: C.textMuted, marginTop: 2, marginBottom: 10 }}>
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
                  paddingVertical: 6,
                  paddingHorizontal: 8,
                  marginBottom: 7,
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontSize: 8.5, fontWeight: 700, color: C.navy }}>{sk.name}</Text>
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
                <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.textSecondary, marginTop: 2 }}>
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
          marginTop: 12,
          backgroundColor: C.navy,
          borderRadius: 6,
          padding: 11,
        }}
      >
        {[
          { title: 'STRATEGIC CONSULTING', desc: 'McKinsey Forward participant applying MECE problem-solving & digital fluency.' },
          { title: 'ENGINEERING RIGOR', desc: 'Production systems with comprehensive test coverage across 77 functional scenarios.' },
          { title: 'BILINGUAL COMMUNICATION', desc: 'Bahasa Indonesia (Native) & English (Fluent professional working proficiency).' },
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
            <Text style={{ fontSize: 8, fontWeight: 700, color: C.accentCyanLight, letterSpacing: 1 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 7, fontWeight: 400, color: C.lightBlue, textAlign: 'center', marginTop: 2 }}>
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
      org: 'McKinsey & Company · Sep 2026 – Present',
      description:
        'Selected for intensive global learning initiative. Applying MECE frameworks, issue trees, digital transformation, and agile adaptation to evaluate complex business scenarios.',
      stat: 'ACCEPTED',
    },
    {
      category: 'PEER-REVIEWED PUBLICATION',
      title: 'Corresponding Author & Lead Researcher',
      org: 'UNNES Journal (Mediasi) · Published Feb 2024',
      description:
        'Authored peer-reviewed paper on AI chatbot instructional efficacy in university Operating Systems education. Conducted statistical data analysis and usability evaluation.',
      stat: 'PUBLISHED',
    },
    {
      category: 'NATIONAL ESSAY COMPETITIONS',
      title: 'Activation 7.0 & MEDISPRO Honors',
      org: 'Universitas Brawijaya & UNNES · 2024–2025',
      description:
        'Top 10 Finalist for "Stoddlers" (interactive edutech platform, UB, Nov 2024) and 5th Place for "SkinAlyzr" (deep learning multi-task mobile app for skin diseases, UNNES FK, Sep 2025).',
      stat: 'HONORS',
    },
    {
      category: 'INDUSTRY CERTIFICATION & INTERNSHIP',
      title: 'AWS Cloud DevOps & PT TAS Rating EXCELLENT',
      org: 'Dicoding Indonesia × AWS & PT TAS · 2023–2026',
      description:
        'Completed Web Dev Internship rated EXCELLENT with 77 functional Black Box test scenarios passed. Certified in AWS DevOps Fundamentals (Verification ID: 1RXY0GQM3ZVM).',
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
              padding: 13,
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
            <Text style={{ fontSize: 10.5, fontWeight: 700, color: C.navy, marginTop: 7 }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 7.5, fontWeight: 500, color: C.textMuted, marginTop: 2 }}>
              {item.org}
            </Text>

            {/* Description */}
            <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.textSecondary, lineHeight: 1.45, marginTop: 5 }}>
              {item.description}
            </Text>
          </View>
        ))}
      </View>

      {/* Bottom Summary Banner */}
      <View
        style={{
          marginTop: 14,
          backgroundColor: C.navy,
          borderRadius: 6,
          paddingVertical: 11,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: C.accent,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconAward size={13} color="#FFFFFF" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, color: '#FFFFFF' }}>
            Verified Commitment to Technical Excellence & Academic Rigor
          </Text>
          <Text style={{ fontSize: 7.5, fontWeight: 400, color: C.lightBlue, marginTop: 2, lineHeight: 1.35 }}>
            From peer-reviewed publication to national competitive writing, McKinsey leadership, and AWS cloud certification,
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
      desc: 'Preferred for recruitment, consulting inquiries, and formal interview invitations.',
      icon: <IconMail size={14} color="#FFFFFF" />,
    },
    {
      title: 'DIRECT PHONE / WHATSAPP',
      val: '+62 851-7224-7452',
      desc: 'Available for immediate contact and professional discussions via voice or WhatsApp.',
      icon: <IconExternalLink size={14} color="#FFFFFF" />,
    },
    {
      title: 'PROFESSIONAL NETWORK & CODE',
      val: 'linkedin.com/in/iman-yunar-noviadhi',
      desc: 'Connect on LinkedIn & browse production repositories on github.com/imanyunar.',
      icon: <IconCode size={14} color="#FFFFFF" />,
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
        subtitle="Available for software engineering roles, management consulting tracks, and digital transformation initiatives."
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
            <Text style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF', marginTop: 2 }}>
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
          <Text style={{ fontSize: 9, fontWeight: 500, color: '#FFFFFF', marginTop: 2 }}>
            Based in Semarang, Central Java, Indonesia  •  DOB: 08 Nov 2005  •  GPA: 3.84 / 4.00  •  Open to Opportunities
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
