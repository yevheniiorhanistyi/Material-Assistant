import { v4 as uuidv4 } from 'uuid';

export const MAX_PORTION_TABS = 12;

export const INITIAL_TABS = [
  { uid: uuidv4(), tabText: 'Arkusz 1', selected: true },
  { uid: uuidv4(), tabText: 'Arkusz 2', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 3', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 4', selected: false },
  { uid: uuidv4(), tabText: 'Arkusz 5', selected: false },
];
