// Builds the vCard for the restaurant and downloads it when the contact button is clicked.
// The __TOKEN__ placeholders are replaced at build time from minimaz.config.json.
document.getElementById('link-download-vcf')!.addEventListener('click', () => {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:;__SITE_NAME__;;;',
    'FN:__SITE_NAME__',
    'ORG:__SITE_NAME__',
    'TEL;TYPE=WORK,VOICE:__PHONE_DISPLAY__',
    'ADR;TYPE=WORK:;;__ADDRESS_STREET__;San Vitaliano;NA;80030;Italia',
    'URL:__SITE_URL__',
    'END:VCARD',
  ].join('\r\n');

  // Download through a temporary link so the browser saves the file instead of navigating.
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'YAMAS-Taverna-Greca.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
