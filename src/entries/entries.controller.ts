import { Controller, Get } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { Entry } from './entry.model';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get()
  getAllEntries(): Entry[] {
    return this.entriesService.getAllEntries();
  }
}
