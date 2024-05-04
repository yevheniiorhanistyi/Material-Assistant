import { v4 as uuidv4 } from 'uuid';

export const MIN_PORTION_SIZE = 270;
export const MAX_PORTION_SIZE = 450;
export const MAX_PORTION_TABS = 12;

export const INITIAL_TABS = [
  { uid: uuidv4(), tabText: 'Arkusz 1', selected: true },
  { uid: uuidv4(), tabText: 'Arkusz 2', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 3', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 4', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 5', selected: false },
];

export const LANG_PL = {
  required: 'To pole jest wymagane',
  email: 'To pole wymaga prawidłowego adresu e-mail',
  number: 'To pole wymaga liczby',
  integer: 'To pole wymaga wartości całkowitej',
  url: 'To pole wymaga prawidłowego adresu URL strony internetowej',
  tel: 'To pole wymaga prawidłowego numeru telefonu',
  maxlength: `Długość tego pola musi być < ${1}`,
  minlength: `Długość tego pola musi być > ${1}`,
  min: `Minimalna wartość dla tego pola to ${1}`,
  max: `Maksymalna wartość dla tego pola ${100}`,
  pattern: 'Proszę dopasować żądany format',
  equals: 'Dwa pola nie są takie same',
  default: 'Proszę wprowadzić poprawną wartość',
};

export const SNACKBAR_VARIANTS = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

export const FORMS = {
  portionForm: {
    title: 'Kalkulator porcji pod stan surowca',
    id: 'portionForm',
  },
  orderForm: {
    title: 'Kalkulator zamówienia',
    id: 'orderForm',
  },
};

export const PORTION_CONFIRM_TITLE = 'Czy na pewno chcesz usunąć wprowadzone dane?';
export const PORTION_CONFIRM_TEXT = 'Wprowadzone dane w formularzu na tej stronie zostaną usunięte.';
export const PORTION_TAB_CONFIRM_TITLE = 'Czy na pewno chcesz usunąć wszystkie wprowadzone dane?';
export const PORTION_TAB_CONFIRM_TEXT = 'Wprowadzone dane w formularzach na wszystkich wcześniej utworzonych arkuszach zostaną usunięte.';

export const CURRENT_VERSION = {
  icon: `<svg class="icon version__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
  data-testid="WidgetsIcon" tabindex="-1" title="Widgets">
  <path d="M13 13v8h8v-8zM3 21h8v-8H3zM3 3v8h8V3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66z"></path>
  </svg>`,
  text: 'Aktualna wersja: 1.0.1',
};

export const UTILS_NAVIGATION = [
  {
    id: 'portionForm',
    icon: `<svg class="icon utils-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
    data-testid="FormatListBulletedIcon" tabindex="-1" title="FormatListBulleted">
    <path
      d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z">
    </path>
  </svg>`,
    text: 'Porcji',
  },
  {
    id: 'orderForm',
    icon: `<svg class="icon utils-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
    data-testid="SettingsIcon">
    <path
      d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6">
    </path>
  </svg>`,
    text: 'Zamówienia',
  },
];

export const UTILS_CONFIG = [
  {
    id: 'analytics',
    icon: `<svg class="icon utils-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
    data-testid="SettingsIcon">
    <path
      d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6">
    </path>
  </svg>`,
    text: 'Analityka',
  },
  {
    id: 'performance',
    icon: `<svg class="icon utils-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
    data-testid="TimerIcon">
    <path
      d="M9 1h6v2H9zm10.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M13 14h-2V8h2z">
    </path>
  </svg>`,
    text: 'Wydajność',
  },
  {
    id: 'database',
    icon: `<svg class="icon utils-list__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"
    data-testid="DnsRoundedIcon">
    <path
      d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2">
    </path>
  </svg>`,
    text: 'Baza danych',
  },
];
