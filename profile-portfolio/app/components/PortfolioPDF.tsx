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
   DESIGN TOKENS
   ============================================ */
const C = {
  primary: '#051C2C',
  accent: '#2251FF',
  accentSec: '#00A9F4',
  bg: '#FFFFFF',
  bgAlt: '#F0F0F0',
  text: '#333333',
  muted: '#666666',
  border: '#E0E0E0',
};

const SLIDE_W = 841.89; // A4 landscape width in pts
const SLIDE_H = 595.28; // A4 landscape height in pts

/* ============================================
   STYLES
   ============================================ */
const s = StyleSheet.create({
  page: {
    width: SLIDE_W,
    height: SLIDE_H,
    fontFamily: 'Inter',
    backgroundColor: C.bg,
    position: 'relative',
    overflow: 'hidden',
  },

  // Cover slide
  coverBand: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: C.primary,
  },
  coverContent: {
    position: 'absolute',
    top: 60,
    left: 60,
    right: 60,
  },
  coverName: {
    fontSize: 36,
    fontWeight: 300,
    color: C.bg,
    letterSpacing: -0.5,
  },
  coverRole: {
    fontSize: 14,
    fontWeight: 500,
    color: C.accent,
    marginTop: 8,
    letterSpacing: 1,
    textTransform: 'uppercase' as const,
  },
  coverTagline: {
    fontSize: 13,
    fontWeight: 300,
    color: C.muted,
    marginTop: 24,
    lineHeight: 1.6,
    maxWidth: 520,
  },
  coverContactRow: {
    position: 'absolute',
    bottom: 50,
    left: 60,
    right: 60,
    flexDirection: 'row',
    gap: 24,
  },
  coverContactItem: {
    fontSize: 10,
    fontWeight: 400,
    color: C.muted,
  },
  avatarPlaceholder: {
    position: 'absolute',
    top: 110,
    right: 80,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: C.bgAlt,
    border: `2px solid ${C.border}`,
  },

  // Section header
  sectionLabel: {
    fontSize: 10,
    fontWeight: 500,
    color: C.accent,
    textTransform: 'uppercase' as const,
    letterSpacing: 2,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 300,
    color: C.primary,
    letterSpacing: -0.3,
  },
  accentBar: {
    width: 40,
    height: 2,
    backgroundColor: C.accent,
    marginBottom: 8,
  },

  // Slide content area
  slideBody: {
    padding: '50 60',
    flex: 1,
  },

  // Stat cards (About slide)
  statRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
  },
  statCard: {
    flex: 1,
    padding: '20 16',
    border: `1px solid ${C.border}`,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 28,
    fontWeight: 300,
    color: C.accent,
  },
  statLabel: {
    fontSize: 9,
    fontWeight: 500,
    color: C.muted,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.8,
    marginTop: 6,
    textAlign: 'center',
  },

  // Experience timeline
  timelineContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  timelineEntry: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  timelineBadge: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  timelineBadgeText: {
    fontSize: 9,
    fontWeight: 600,
    color: C.accent,
  },
  timelineBody: {
    flex: 1,
  },
  timelineRole: {
    fontSize: 12,
    fontWeight: 600,
    color: C.primary,
  },
  timelineOrg: {
    fontSize: 10,
    fontWeight: 400,
    color: C.muted,
    marginTop: 2,
  },
  timelinePeriod: {
    fontSize: 9,
    fontWeight: 500,
    color: C.accent,
    marginTop: 2,
  },
  timelineBullet: {
    fontSize: 9,
    fontWeight: 300,
    color: C.text,
    marginTop: 4,
    lineHeight: 1.5,
  },
  metricTag: {
    fontSize: 9,
    fontWeight: 600,
    color: C.accent,
    backgroundColor: 'rgba(34, 81, 255, 0.06)',
    padding: '3 8',
    marginTop: 4,
    alignSelf: 'flex-start',
  },

  // Skills slide
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    marginTop: 24,
  },
  skillGroup: {
    width: '30%',
    marginBottom: 8,
  },
  skillGroupTitle: {
    fontSize: 10,
    fontWeight: 600,
    color: C.primary,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 10,
    borderBottom: `1px solid ${C.border}`,
    paddingBottom: 6,
  },
  skillItem: {
    marginBottom: 8,
  },
  skillName: {
    fontSize: 9,
    fontWeight: 400,
    color: C.text,
    marginBottom: 3,
  },
  skillBarTrack: {
    height: 4,
    backgroundColor: C.bgAlt,
    borderRadius: 2,
  },
  skillBarFill: {
    height: 4,
    backgroundColor: C.accent,
    borderRadius: 2,
  },
  skillLabel: {
    fontSize: 8,
    fontWeight: 500,
    color: C.muted,
    textAlign: 'right',
    marginTop: 1,
  },

  // Achievements slide
  achieveGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 24,
  },
  achieveCard: {
    width: '47%',
    padding: '16 20',
    border: `1px solid ${C.border}`,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  achieveIcon: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(34, 81, 255, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  achieveTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: C.primary,
  },
  achieveDetail: {
    fontSize: 9,
    fontWeight: 300,
    color: C.text,
    marginTop: 3,
    lineHeight: 1.4,
  },
  achieveMeta: {
    fontSize: 8,
    fontWeight: 500,
    color: C.muted,
    textTransform: 'uppercase' as const,
    letterSpacing: 0.5,
    marginTop: 4,
  },

  // Contact/Closing slide
  closingBand: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    backgroundColor: C.primary,
  },
  closingContent: {
    position: 'absolute',
    top: 80,
    left: 60,
    right: 60,
  },
  closingTitle: {
    fontSize: 32,
    fontWeight: 300,
    color: C.primary,
    letterSpacing: -0.3,
  },
  closingAccent: {
    color: C.accent,
  },
  closingSubtext: {
    fontSize: 13,
    fontWeight: 300,
    color: C.muted,
    marginTop: 12,
    lineHeight: 1.6,
    maxWidth: 480,
  },
  closingContactGrid: {
    position: 'absolute',
    bottom: 200,
    left: 60,
    right: 60,
    flexDirection: 'row',
    gap: 32,
  },
  closingContactBlock: {
    flex: 1,
  },
  closingContactLabel: {
    fontSize: 9,
    fontWeight: 500,
    color: C.accent,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    marginBottom: 4,
  },
  closingContactValue: {
    fontSize: 11,
    fontWeight: 400,
    color: C.bg,
  },

  // Watermark / decoration
  watermark: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 80,
    fontWeight: 300,
    color: 'rgba(5, 28, 44, 0.03)',
    letterSpacing: 4,
  },

  // Slide number
  slideNumber: {
    position: 'absolute',
    bottom: 20,
    right: 40,
    fontSize: 8,
    fontWeight: 500,
    color: C.muted,
  },

  // Diagonal accent lines (cover/closing decoration)
  diagonalDecor: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    height: SLIDE_H,
  },
});

/* ============================================
   ICON SVGs (Simple geometric line-art)
   ============================================ */

function BriefcaseIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 24 24">
      <Path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke={C.accent} strokeWidth="1.5" fill="none" />
      <Path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke={C.accent} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function RibbonIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24">
      <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" stroke={C.accent} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function LayersIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24">
      <Path d="M12 2L2 7l10 5 10-5-10-5z" stroke={C.accent} strokeWidth="1.5" fill="none" />
      <Path d="M2 17l10 5 10-5" stroke={C.accent} strokeWidth="1.5" fill="none" />
      <Path d="M2 12l10 5 10-5" stroke={C.accent} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function EnvelopeIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 24 24">
      <Path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke={C.accent} strokeWidth="1.5" fill="none" />
      <Path d="M22 6l-10 7L2 6" stroke={C.accent} strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

/* ============================================
   SLIDE COMPONENTS
   ============================================ */

function SlideCover() {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      {/* Dark header band */}
      <View style={s.coverBand} />

      {/* Diagonal decoration */}
      <Svg style={s.diagonalDecor} viewBox="0 0 200 595">
        <Line x1="0" y1="0" x2="200" y2="595" stroke={C.accent} strokeWidth="0.5" opacity="0.08" />
        <Line x1="40" y1="0" x2="200" y2="480" stroke={C.accent} strokeWidth="0.5" opacity="0.06" />
        <Line x1="80" y1="0" x2="200" y2="360" stroke={C.accent} strokeWidth="0.5" opacity="0.04" />
      </Svg>

      {/* Content */}
      <View style={s.coverContent}>
        <Text style={s.coverName}>Iman Yunar Noviadhi</Text>
        <Text style={s.coverRole}>Full-Stack Developer & AI Practitioner</Text>
      </View>

      {/* Avatar placeholder */}
      <View style={s.avatarPlaceholder} />

      {/* Tagline */}
      <View style={{ position: 'absolute', top: 220, left: 60, right: 280 }}>
        <Text style={s.coverTagline}>
          Building Reliable Digital Systems — Computer Science undergraduate
          at Universitas Negeri Semarang specializing in full-stack development
          and applied AI, with a track record of delivering production-ready
          systems and leading cross-university teams.
        </Text>
      </View>

      {/* Contact row */}
      <View style={s.coverContactRow}>
        <Text style={s.coverContactItem}>imanyunar@gmail.com</Text>
        <Text style={s.coverContactItem}>github.com/imanyunar</Text>
        <Text style={s.coverContactItem}>linkedin.com/in/iman-yunar-noviadhi</Text>
      </View>

      {/* Watermark */}
      <Text style={s.watermark}>IYN</Text>

      <Text style={s.slideNumber}>01 / 06</Text>
    </Page>
  );
}

function SlideAbout() {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={s.slideBody}>
        <View style={s.accentBar} />
        <Text style={s.sectionLabel}>About</Text>
        <Text style={s.sectionTitle}>Profile Summary</Text>

        <View style={{ marginTop: 20, maxWidth: 600 }}>
          <Text style={{ fontSize: 11, fontWeight: 300, color: C.text, lineHeight: 1.7 }}>
            A Computer Science undergraduate at Universitas Negeri Semarang with
            hands-on experience building production-ready web applications using
            Laravel, Vue.js, TypeScript, and PostgreSQL. Combines technical depth
            in full-stack development and applied AI with a strong leadership
            record — including event chairperson roles for cross-university
            programs and a published research paper on AI in education.
          </Text>
        </View>

        {/* Stat cards */}
        <View style={s.statRow}>
          <View style={s.statCard}>
            <Text style={s.statNum}>100%</Text>
            <Text style={s.statLabel}>Test Pass Rate{'\n'}(77 Scenarios)</Text>
          </View>
          <View style={s.statCard}>
            <Text style={s.statNum}>2×</Text>
            <Text style={s.statLabel}>Event{'\n'}Chairperson</Text>
          </View>
          <View style={s.statCard}>
            <Text style={s.statNum}>1</Text>
            <Text style={s.statLabel}>Published{'\n'}Research Paper</Text>
          </View>
          <View style={s.statCard}>
            <Text style={s.statNum}>2×</Text>
            <Text style={s.statLabel}>Essay Competition{'\n'}Finalist</Text>
          </View>
        </View>
      </View>

      <Text style={s.slideNumber}>02 / 06</Text>
    </Page>
  );
}

function SlideExperience() {
  const entries = [
    {
      num: '01',
      role: 'Web Developer Intern',
      org: 'PT Teknologi Aplikasi Sejahtera',
      period: 'Feb – Jul 2026',
      detail: 'Built Document Management System (Laravel, Vue.js, TypeScript, PostgreSQL). 100% pass rate across 77 Black Box Test scenarios. Rated EXCELLENT.',
    },
    {
      num: '02',
      role: 'Secretary, Public Relations Dept',
      org: 'UKMP, Universitas Negeri Semarang',
      period: 'Feb – Nov 2025',
      detail: 'Event Chairperson for 2 cross-university comparative study visits with UNESA & Universitas Brawijaya.',
    },
    {
      num: '03',
      role: 'Inbound Virtual Student Mobility',
      org: 'UTHM Malaysia',
      period: 'Jul – Sep 2026',
      detail: 'International academic exchange program in computer science.',
    },
    {
      num: '04',
      role: 'Staff, Internal & Organizational Supervision',
      org: 'ISAFIS',
      period: 'Apr – Dec 2024',
      detail: 'Built online voting system for presidential election. Organizational governance.',
    },
    {
      num: '05',
      role: 'Corresponding Author',
      org: 'UNNES Journal',
      period: 'Aug 2023 – Feb 2024',
      detail: 'Published research on AI chatbot effectiveness in Operating Systems education.',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={s.slideBody}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 4 }}>
          <BriefcaseIcon />
          <Text style={s.sectionLabel}>Experience</Text>
        </View>
        <Text style={s.sectionTitle}>Professional Timeline</Text>

        {/* Timeline with connected dots */}
        <View style={{ marginTop: 24, paddingLeft: 8 }}>
          {/* Vertical line */}
          <Svg style={{ position: 'absolute', left: 18, top: 10, bottom: 10, width: 2, height: 410 }}>
            <Line x1="1" y1="0" x2="1" y2="410" stroke={C.border} strokeWidth="1.5" />
          </Svg>

          {entries.map((entry, i) => (
            <View key={i} style={s.timelineEntry}>
              {/* Dot/Badge */}
              <View style={{ alignItems: 'center', width: 22 }}>
                <Svg width="12" height="12" viewBox="0 0 12 12">
                  <Circle cx="6" cy="6" r="5" fill={i === 0 ? C.accent : C.bg} stroke={C.accent} strokeWidth="1.5" />
                </Svg>
              </View>

              {/* Content */}
              <View style={s.timelineBody}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <View style={{ padding: '1 6', border: `1px solid ${C.accent}` }}>
                    <Text style={s.timelineBadgeText}>{entry.num}</Text>
                  </View>
                  <Text style={s.timelineRole}>{entry.role}</Text>
                </View>
                <Text style={s.timelineOrg}>{entry.org}</Text>
                <Text style={s.timelinePeriod}>{entry.period}</Text>
                <Text style={s.timelineBullet}>{entry.detail}</Text>
                {i === 0 && (
                  <Text style={s.metricTag}>100% Pass Rate · 77 Test Scenarios · Rated EXCELLENT</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={s.slideNumber}>03 / 06</Text>
    </Page>
  );
}

function SlideSkills() {
  const groups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'TailwindCSS', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'PHP', level: 90 },
        { name: 'REST API', level: 85 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Data / AI',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 78 },
        { name: 'Data Analytics', level: 88 },
      ],
    },
    {
      title: 'Systems',
      skills: [
        { name: 'Docker', level: 70 },
        { name: 'C++', level: 85 },
        { name: 'Git', level: 85 },
      ],
    },
    {
      title: 'Professional',
      skills: [
        { name: 'Teamwork', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Leadership', level: 88 },
      ],
    },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={s.slideBody}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 4 }}>
          <LayersIcon />
          <Text style={s.sectionLabel}>Skills</Text>
        </View>
        <Text style={s.sectionTitle}>Technical Proficiency</Text>

        <View style={s.skillsGrid}>
          {groups.map((group, gIdx) => (
            <View key={gIdx} style={s.skillGroup}>
              <Text style={s.skillGroupTitle}>{group.title}</Text>
              {group.skills.map((skill, sIdx) => (
                <View key={sIdx} style={s.skillItem}>
                  <Text style={s.skillName}>{skill.name}</Text>
                  <View style={s.skillBarTrack}>
                    <View style={[s.skillBarFill, { width: `${skill.level}%` }]} />
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      <Text style={s.slideNumber}>04 / 06</Text>
    </Page>
  );
}

function SlideAchievements() {
  const items = [
    {
      title: 'Published Scientific Article',
      detail: 'Corresponding Author — AI Chatbots in Operating Systems Education',
      meta: 'UNNES Journal · Feb 2024',
    },
    {
      title: 'Top 10 Finalist',
      detail: 'Activation 7.0 Essay Competition 2024',
      meta: 'National Competition',
    },
    {
      title: '5th Place',
      detail: 'MEDISPRO Essay Competition 2025',
      meta: 'National Competition',
    },
    {
      title: 'DevOps Fundamentals Certificate',
      detail: 'Learning the Fundamentals of DevOps',
      meta: 'Dicoding Indonesia × AWS',
    },
  ];

  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      <View style={s.slideBody}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 4 }}>
          <RibbonIcon />
          <Text style={s.sectionLabel}>Achievements & Certifications</Text>
        </View>
        <Text style={s.sectionTitle}>Recognition</Text>

        <View style={s.achieveGrid}>
          {items.map((item, idx) => (
            <View key={idx} style={s.achieveCard}>
              <View style={s.achieveIcon}>
                <Svg width="12" height="12" viewBox="0 0 24 24">
                  <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" stroke={C.accent} strokeWidth="1.5" fill="none" />
                </Svg>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={s.achieveTitle}>{item.title}</Text>
                <Text style={s.achieveDetail}>{item.detail}</Text>
                <Text style={s.achieveMeta}>{item.meta}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <Text style={s.slideNumber}>05 / 06</Text>
    </Page>
  );
}

function SlideContact() {
  return (
    <Page size="A4" orientation="landscape" style={s.page}>
      {/* Dark footer band */}
      <View style={s.closingBand} />

      {/* Diagonal decoration */}
      <Svg style={{ position: 'absolute', left: 0, top: 0, width: 200, height: SLIDE_H }}>
        <Line x1="200" y1="0" x2="0" y2="595" stroke={C.accent} strokeWidth="0.5" opacity="0.08" />
        <Line x1="160" y1="0" x2="0" y2="480" stroke={C.accent} strokeWidth="0.5" opacity="0.06" />
      </Svg>

      {/* Main content */}
      <View style={s.closingContent}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', marginBottom: 8 }}>
          <EnvelopeIcon />
          <Text style={s.sectionLabel}>Contact</Text>
        </View>
        <Text style={s.closingTitle}>
          Let&apos;s Build Something{' '}
          <Text style={s.closingAccent}>Together.</Text>
        </Text>
        <Text style={s.closingSubtext}>
          I&apos;m open to new opportunities, collaborations, and professional
          conversations. Whether it&apos;s about a project, a role, or just to
          connect — I&apos;d love to hear from you.
        </Text>
      </View>

      {/* Contact details on dark band */}
      <View style={{ position: 'absolute', bottom: 50, left: 60, right: 60, flexDirection: 'row', gap: 40 }}>
        <View>
          <Text style={s.closingContactLabel}>Email</Text>
          <Text style={s.closingContactValue}>imanyunar@gmail.com</Text>
        </View>
        <View>
          <Text style={s.closingContactLabel}>GitHub</Text>
          <Text style={s.closingContactValue}>github.com/imanyunar</Text>
        </View>
        <View>
          <Text style={s.closingContactLabel}>LinkedIn</Text>
          <Text style={s.closingContactValue}>linkedin.com/in/iman-yunar-noviadhi</Text>
        </View>
      </View>

      {/* Watermark */}
      <Text style={[s.watermark, { color: 'rgba(255,255,255,0.04)' }]}>IYN</Text>

      <Text style={[s.slideNumber, { color: 'rgba(255,255,255,0.5)' }]}>06 / 06</Text>
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
