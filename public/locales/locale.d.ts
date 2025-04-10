import ru from './ru/common.json';

export const translations = ru as const;
export type Translations = typeof translations;
