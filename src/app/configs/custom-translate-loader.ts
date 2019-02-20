import { Observable, from } from 'rxjs';

export class CustomTranslateLoader implements CustomTranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../../assets/i18n/${lang}.json`));
  }
}
