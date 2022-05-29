import { Injectable } from '@nestjs/common';
import { Entry, EntryStatus } from './entry.model';
import { v4 as uuid } from 'uuid';
import { CreateEntryDto } from './dto/create-entry.dto';

@Injectable()
export class EntriesService {
  private entries: Entry[] = [];

  getAllEntries(): Entry[] {
    return this.entries;
  }

  createEntry(createEntryDto: CreateEntryDto): Entry {
    const { title, description, date } = createEntryDto;

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
