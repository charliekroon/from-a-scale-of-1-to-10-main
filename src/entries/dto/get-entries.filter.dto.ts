import { EntryStatus } from '../entry.model';

export class GetEntriesFilterDto {
  status?: EntryStatus;
  search?: string;
}
