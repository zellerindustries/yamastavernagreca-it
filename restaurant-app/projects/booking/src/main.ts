import { bootstrapApplication } from '@angular/platform-browser';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { App } from './app/app';

registerLocaleData(localeIt);

bootstrapApplication(App, {
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: MAT_DATE_LOCALE, useValue: 'it-IT' }
  ]
});
