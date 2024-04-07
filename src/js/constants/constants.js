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

export const PORTION_CONFIRM_TITLE = 'Czy na pewno chcesz usunąć wprowadzone dane?';
export const PORTION_CONFIRM_TEXT = 'Wprowadzone dane w formularzu na tej stronie zostaną usunięte.';
export const PORTION_TAB_CONFIRM_TEXT = 'Wprowadzone dane w tabelach na wszystkich wcześniej utworzonych arkuszach zostaną usunięte.';
