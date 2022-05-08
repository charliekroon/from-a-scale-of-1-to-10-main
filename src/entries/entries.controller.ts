import { Body, Controller, Get, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { Entry } from './entry.model';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get()
  getAllEntries(): Entry[] {
    return this.entriesService.getAllEntries();
  }

  @Post()
  createEntry(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('date') date: Date,
  ): Entry {
    return this.entriesService.createEntry(title, description, date);
  }
}
