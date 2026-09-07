'use client';

import { useEffect, useState, useCallback } from 'react';
import { pdf } from '@react-pdf/renderer';
import PortfolioPDF from './PortfolioPDF';

export default function PortfolioPDFDownload() {
  const [generating, setGenerating] = useState(false);

  const generateAndDownload = useCallback(async () => {
    if (generating) return;
    setGenerating(true);

    try {
      const blob = await pdf(<PortfolioPDF />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Iman-Yunar-Noviadhi-Portfolio.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setGenerating(false);
    }
  }, [generating]);

  useEffect(() => {
    const handler = () => generateAndDownload();
    window.addEventListener('download-portfolio-pdf', handler);
    return () => window.removeEventListener('download-portfolio-pdf', handler);
  }, [generateAndDownload]);

  if (!generating) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white px-8 py-6 shadow-lg border border-[var(--color-border)] text-center space-y-3">
        <div className="w-8 h-8 border-2 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-medium text-[var(--color-text)]">Generating your portfolio PDF...</p>
        <p className="text-xs text-[var(--color-text-muted)]">This may take a few seconds</p>
      </div>
    </div>
  );
}
