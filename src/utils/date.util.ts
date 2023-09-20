import { TLanguage } from '@shared/types';
import moment from 'moment';
import momentJalaali from 'moment-jalaali';
import { i18n } from 'next-i18next';

export function normalizeDate(date: string | Date): string {
  const languageToDateFormatterMapper: Record<TLanguage, string> = {
    en: moment(date).local().format('YYYY-MM-DD HH:mm'),
    fa: momentJalaali(date).local().format('jYYYY-jMM-jDD HH:mm'),
  };
  return languageToDateFormatterMapper[(i18n?.language as TLanguage) ?? 'en'];
}
