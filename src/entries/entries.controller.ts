import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getEntryById(@Param('id') id: string): Entry {
    return this.entriesService.getEntryById(id);
  }

  @Delete('/:id')
  deleteEntryById(@Param('id') id: string): void {
    return this.entriesService.deleteEntry(id);
  }

  @Post()
  createEntry(@Body() createEntryDto: CreateEntryDto): Entry {
    return this.entriesService.createEntry(createEntryDto);
  }
}
