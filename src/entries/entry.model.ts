export interface Entry {
  id: string;
  title: string;
  description: string;
  date: Date;
  status: EntryStatus;
}

export enum EntryStatus {
  OPEN = 'OPEN',
  ARCHIVED = 'ARCHIVED',
  DELETED = 'DELETED',
}
