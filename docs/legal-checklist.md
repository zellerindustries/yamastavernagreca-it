# Privacy, cookie and terms checklist

Working checklist for the YAMAS site (Italy, EU visitors, no analytics, no cookies, no
accounts, no online sales). It is a technical aid, **not legal advice** - have a lawyer or the
DPO sign off on policy wording. Sources and their reliability are listed at the end; items marked
**(verify)** rest on commercial or secondary sources only.

## When to run it

Run the relevant section **before merging to `main`** (a merge deploys straight to production) if
the change does any of the following:

| Change                                                                   | Run                                           |
| ------------------------------------------------------------------------ | --------------------------------------------- |
| New external host: font, script, embed, image, CDN, map, video, widget   | 2, 1 (recipients)                             |
| Analytics, pixel, chat widget, newsletter, form, reservation or ordering | 1, 2, 3                                       |
| Anything stored in cookies, `localStorage`, `sessionStorage`, IndexedDB  | 2                                             |
| New contact channel (email, form, WhatsApp number, booking tool)         | 1                                             |
| Change of owner, address, VAT number, hosting provider, log retention    | 1, 3                                          |
| Menu/prices/allergen changes                                             | 3 (allergens)                                 |
| Policy text edited                                                       | bump "Ultimo aggiornamento" on **both** pages |

## 1. Privacy notice (`privacy.html`, GDPR Arts. 12-14)

Collected from the user directly (phone/WhatsApp), so Art. 13 applies, plus the server logs.

- [ ] **Controller identity and contact**: legal name, registered address, VAT/tax code, and a way
      to actually reach them. Prefer an email or PEC besides phone/WhatsApp (Art. 13(1)(a)).
- [ ] **DPO contact**, or a statement none is appointed (Art. 13(1)(b)).
- [ ] **Each purpose has a legal basis** named with its article (6(1)(b) contact/booking, 6(1)(f)
      server security). No purpose without a basis, no basis without a purpose.
- [ ] **Legitimate interest** (if used) is described, not just cited (Art. 13(1)(d)).
- [ ] **Recipients named or categorised**: hosting provider, AWS (S3 bucket serving the menu images), Google (Maps, YouTube, the feedback form), WhatsApp/Meta
      (Art. 13(1)(e)). Regulators expect names or clear categories.
- [ ] **Third-country transfers** named, with the safeguard (e.g. EU-US Data Privacy Framework)
      (Art. 13(1)(f)).
- [ ] **Retention**: a concrete period or the criteria, per data type (Art. 13(2)(a)). Every number
      stated is true in practice (e.g. "logs deleted within 7 days" matches the host's real setting).
- [ ] **Rights listed**: access, rectification, erasure, restriction, portability, objection
      (Arts. 15-21), how to exercise them, and the right to complain to the Garante.
- [ ] **Withdrawal of consent** mentioned _if_ any processing is consent-based (none today).
- [ ] **Mandatory vs optional** data and the consequence of not providing it (Art. 13(2)(e)).
- [ ] **Automated decisions / profiling**: stated as none, or described (Art. 13(2)(f)).
- [ ] **Third-party content disclosed**: every embed that contacts another server, with the point
      at which it connects (page load vs after click).
- [ ] **External links** (delivery apps, social profiles) noted as separate controllers.
- [ ] **Plain Italian, easy to find**: linked from every page footer, concise, no legalese
      (Art. 12).
- [ ] **Dated**: "Ultimo aggiornamento" matches the last real change.

## 2. Cookies, storage and third-party requests (`cookie.html`)

Rules to hold in mind (Garante guidelines n. 231 of 10 June 2021; ePrivacy Art. 5(3) as read by
EDPB Guidelines 2/2023):

- The rules cover **any** reading/writing on the device, not only cookies: `localStorage`,
  `sessionStorage`, IndexedDB, tracking pixels/links, fingerprinting.
- **Technical-only**: no banner required; information in the homepage or privacy policy is enough.
- **Anything else** (analytics, marketing, most third-party widgets that store identifiers) needs
  prior consent; scrolling is not consent; cookie walls are generally not allowed; legitimate
  interest is not a basis for it.

Checks for every release:

- [ ] **Inventory real behaviour in a browser** (DevTools, cold profile): Network tab on every
      page, and Application tab -> Cookies / Local Storage / Session Storage / IndexedDB. Do it on
      page load **and** after interacting (play the video, open the map, switch language).
- [ ] **No unexpected third-party hosts on page load.** Quick static check on the build:
      `grep -rhoE "https?://[a-z0-9.-]+" dist --include=*.html --include=*.css --include=*.js | sort -u`
      and justify every host that is not the site itself or a user-visited link.
- [ ] **Fonts and icons self-hosted** (a Munich court held that loading Google Fonts from Google
      sent visitors' IPs without a legal basis; self-hosting avoids it).
- [ ] **CSP matches reality** on every page: no allowance for hosts the page does not use.
- [ ] **Embeds load only on user action** (YouTube already does). The Google Maps embed on
      `dove-siamo.html` still loads on page view - either keep it disclosed or put it behind a click.
- [ ] **`youtube-nocookie.com` is not "no storage"**: it avoids cookies on load, but reports
      indicate it may write to `localStorage` on play **(verify)**. The cookie page must not claim
      more than is true after the click.
- [ ] **Claims match behaviour**: "no cookies", "no analytics", "no equivalent technologies"
      appear on `cookie.html`, `privacy.html` and the footer/notes - change all or none.
- [ ] **If a non-technical tool is ever added**: add a consent mechanism _before_ the tool loads
      (equal-prominence accept/reject, granular, re-openable, refusal remembered about 6 months),
      update the cookie table (name, owner, purpose, duration), the CSP and both policy pages
      together.
- [ ] **Browser-controls links** on `cookie.html` still resolve.

## 3. Terms and mandatory site information

A brochure site with no sales does not strictly need a "Terms and Conditions" page **(verify with
counsel)**; what is required is below. Decide consciously and record the decision.

**Business identification (Italian e-commerce decree, D.Lgs. 70/2003, art. 7 - applies to
information-society services; verify scope for a non-selling site):**

- [ ] Legal name / business name, registered address.
- [ ] VAT number; business-register (REA) details if registered.
- [ ] A direct email address (a PEC is commonly shown but its legal necessity under art. 7 is
      disputed in the sources **(verify)**).
- [ ] Any supervising authority/licence details if the activity needs one.

**Restaurant-specific:**

- [ ] **Allergens**: the 14 allergens must be communicated for non-prepacked food (Reg. EU
      1169/2011, Annex II; service in restaurants is covered). The menu page shows them per item -
      keep `data.ts` complete and the generated JSON-LD in sync
      (`node scripts/generate-menu-schema.mjs --check`). Add "ask staff if in doubt" wording and
      keep an up-to-date in-restaurant record **(verify national form)**.
- [ ] **Prices** shown on the page are current and include VAT/service as displayed.

**Optional "Termini di utilizzo" page** (if you want one): copyright/ownership of text, photos and
logo; "information is indicative, menu and prices may change"; no liability for third-party sites
linked (Glovo, Just Eat, Alfonsino, social); governing law (Italy). Keep it short, link it from
the footer, never contradict the privacy/cookie pages.

**Triggers that make terms mandatory work, not optional:** online ordering, paid reservations,
vouchers, any sale to consumers -> general terms of sale, pre-contract information, withdrawal-right
rules (Codice del Consumo arts. 49-51) and clause-availability duty (D.Lgs. 70/2003 art. 12).

**Accessibility** (European Accessibility Act, in force since June 2025): check whether a
microenterprise exemption applies to this business **(verify)**; the menu page already follows
WCAG-style practices (headings, focus, contrast, tap targets).

## 4. Release routine (about 10 minutes)

1. `npm run build`, then the host grep from section 2 against `dist/`.
2. `npm start`, open `/`, `/dove-siamo.html`, `/menu/`, `/linkinbio.html`, `/privacy.html`,
   `/cookie.html` with an empty browser profile; read the Network and Application tabs; play the
   video; switch menu language.
3. Compare what you saw with the claims in `privacy.html` and `cookie.html`.
4. If any text or behaviour changed, update both pages and the date.
5. Merge only when every box above that applies is ticked.

## 5. Open items for this site (30 Oct 2026)

Done: Google Fonts self-hosted; YouTube click-to-load; unused CDN hosts dropped from the CSPs;
recipients/transfers, optional-data, no-automated-decisions and external-link sections added to the
privacy notice (incl. AWS for menu images and the Google feedback form); menu page shows an
"ask our staff about allergies" note in both languages.

Still open:

- [ ] Controller email/PEC to list in the privacy notice.
- [ ] Name the hosting provider and confirm the real log-retention period (policy says 7 days).
- [ ] Decide: keep Google Maps loading on page view, or add a click-to-load map.
- [ ] Decide: add a short "Termini di utilizzo" page, or document that none is needed.
- [ ] REA / business-register details on the site, if applicable.
- [ ] Confirm the allergen information duty is also met in the restaurant (menu, register or sign).
- [ ] Lawyer/DPO review of the final policy wording.

## Sources

Official or primary:

- [Garante privacy - Linee guida cookie e altri strumenti di tracciamento (docweb 9677876)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876) - provv. n. 231 of 10 June 2021 (Gazzetta Ufficiale n. 163 of 9 July 2021); technical cookies need information only, no banner. The fetched text was truncated before the section on embedded third-party content.
- [EDPB Guidelines 2/2023 on the technical scope of Art. 5(3) ePrivacy (v2, Oct 2024)](https://www.edpb.europa.eu/documents/guideline/guidelines-22023-on-technical-scope-of-art-53-of-eprivacy-directive_en) - storage and access beyond cookies.
- [GDPR Art. 13 text](https://gdpr-text.com/en/read/article-13/) - information to give when data is collected from the person.

Secondary (useful, not authoritative - treat **(verify)** items accordingly):

- Garante cookie rules explained: [Iubenda](https://www.iubenda.com/it/help/31246-italy-new-cookie-rules), [Cybersecurity360](https://www.cybersecurity360.it/legal/cookie-le-nuove-linee-guida-del-garante-privacy-suggerimenti-pratici-per-le-aziende/), [Assolombarda](https://www.assolombarda.it/servizi/privacy/garante-privacy-nuove-linee-guida-sui-cookie).
- Art. 13 content and enforcement expectations: [GDPR Explorer checklist](https://gdprexplorer.com/article-13-gdpr-checklist-full-guide-to-transparency-when-collecting-personal-data), [Mayer Brown on an ICO notice decision](https://mayerbrown.com/es/insights/publications/2023/06/what-does-a-uk-gdpr-compliant-privacy-notice-look-like-lessons-learned-from-a-recent-ico-enforcement-decision) (named recipients/countries and concrete retention).
- Google Fonts ruling (LG Munchen I, 20 Jan 2022, 3 O 17493/20, first instance, not binding in Italy): [Captain Compliance](https://captaincompliance.com/education/google-fonts-and-gdpr-what-the-munich-ruling-requires-and-how-to-self-host-your-way-out-of-exposure/), [The Hacker News](https://thehackernews.com/2022/01/german-court-rules-websites-embedding.html?m=1).
- YouTube privacy-enhanced mode and storage: [Cloud Four](https://cloudfour.com/thinks/youtube-no-cookies-adds-cookies/), [Consently](https://consently.net/blog/is-youtube-embed-gdpr-compliant) - sources disagree on whether the local-storage write needs consent.
- Italian site identification (D.Lgs. 70/2003): [Camera di Commercio Milano e-commerce guide](https://www.mi.camcom.it/documents/d/guest/guida-e-commerce-settore-moda), [Punto Informatico on PEC](https://www.punto-informatico.it/pec-visibilit-obbligatoria/); check the text on Normattiva.
- Allergens (Reg. EU 1169/2011): [Assolombarda](https://www.assolombarda.it/governance/gruppi/turistico/informazioni/informazioni-sugli-alimenti-regolamento-1169-2011), [Il Fatto Alimentare](https://ilfattoalimentare.it/?p=57250); mostly 2014-2016 commentary, check current ministry guidance.
- Website terms for small sites: [Mondaq - essential website documents under EU legislation](https://mondaq.co.uk/cyprus/data-protection/1445640/ensuring-compliance-essential-website-documents-under-eu-legislation), [Lexis checklist](https://www.lexisnexis.com/en-gb/legal/guidance/website-compliance-requirements-in-the-eu-checklist).
