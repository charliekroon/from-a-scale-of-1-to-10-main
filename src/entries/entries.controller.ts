import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
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
  createEntry(@Body() createEntryDto: CreateEntryDto): Entry {
    return this.entriesService.createEntry(createEntryDto);
  }
}
