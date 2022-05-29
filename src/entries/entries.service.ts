import { Injectable } from '@nestjs/common';
import { Entry, EntryStatus } from './entry.model';
import { v4 as uuid } from 'uuid';
import { CreateEntryDto } from './dto/create-entry.dto';
import { GetEntriesFilterDto } from './dto/get-entries.filter.dto';

@Injectable()
export class EntriesService {
  private entries: Entry[] = [];

  getAllEntries(): Entry[] {
    return this.entries;
  }

  getEntryById(id: string): Entry {
    return this.entries.find((entry) => entry.id === id);
  }

  getEntriesWithFilter(filterDto: GetEntriesFilterDto): Entry[] {
    const { status, search } = filterDto;

    let entries = this.getAllEntries();

    if (status) {
      entries = entries.filter((entry) => entry.status === status);
    }

    if (search) {
      entries = entries.filter((entry) => {
        if (
          entry.title.includes(search) ||
          entry.description.includes(search)
        ) {
          return true;
        }
        return false;
      });
    }

    return entries;
  }

  deleteEntry(id: string): void {
    this.entries = this.entries.filter((entry) => entry.id !== id);
  }

  updateEntryStatus(id: string, status: EntryStatus) {
    const entry = this.getEntryById(id);
    entry.status = status;
    return entry;
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
