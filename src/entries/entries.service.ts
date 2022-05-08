import { Injectable } from '@nestjs/common';
import { Entry, EntryStatus } from './entry.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EntriesService {
  private entries: Entry[] = [];

  getAllEntries(): Entry[] {
    return this.entries;
  }

  createEntry(title: string, description: string, date: Date): Entry {
    const entry: Entry = {
      id: uuid(),
      title,
      description,
      date,
      status: EntryStatus.OPEN,
    };

    this.entries.push(entry);
    return entry;
  }
}
