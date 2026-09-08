'use client';

import { PDF_BASE64 } from './pdfData';

export function downloadPortfolioPdf(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  try {
    // 1. Convert base64 into binary array in memory
    const byteCharacters = atob(PDF_BASE64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // 2. Create a named File instance (ensures internal filename is embedded)
    const file = new File([byteArray], 'Iman-Yunar-Noviadhi-Portfolio.pdf', {
      type: 'application/pdf',
    });

    // 3. Create blob URL
    const url = URL.createObjectURL(file);

    // 4. Trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Iman-Yunar-Noviadhi-Portfolio.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    // 5. Delay revoke by 60 seconds so browser download manager never loses metadata
    setTimeout(() => {
      try {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
        URL.revokeObjectURL(url);
      } catch {}
    }, 60000);
  } catch (err) {
    console.error('In-memory PDF download failed, falling back to static URL:', err);
    // Fallback: direct window location
    window.location.href = '/Iman-Yunar-Noviadhi-Portfolio.pdf';
  }
}
