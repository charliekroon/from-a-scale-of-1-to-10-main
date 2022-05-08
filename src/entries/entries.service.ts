import { Injectable } from '@nestjs/common';
import { Entry } from './entry.model';

@Injectable()
export class EntriesService {
  private entries: Entry[] = [];

  getAllEntries(): Entry[] {
    return this.entries;
  }
}
