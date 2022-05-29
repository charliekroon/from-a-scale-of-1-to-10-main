import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateEntryDto } from './dto/create-entry.dto';
import { GetEntriesFilterDto } from './dto/get-entries.filter.dto';
import { EntriesService } from './entries.service';
import { Entry, EntryStatus } from './entry.model';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get()
  getEntries(@Query() filterDto: GetEntriesFilterDto): Entry[] {
    if (Object.keys(filterDto).length) {
      return this.entriesService.getEntriesWithFilter(filterDto);
    } else {
      return this.entriesService.getAllEntries();
    }
  }

  @Get('/:id')
  getEntryById(@Param('id') id: string): Entry {
    return this.entriesService.getEntryById(id);
  }

  @Delete('/:id')
  deleteEntryById(@Param('id') id: string): void {
    return this.entriesService.deleteEntry(id);
  }

  @Patch('/:id/status')
  updateEntryById(
    @Param('id') id: string,
    @Body('status') status: EntryStatus,
  ): Entry {
    return this.entriesService.updateEntryStatus(id, status);
  }

  @Post()
  createEntry(@Body() createEntryDto: CreateEntryDto): Entry {
    return this.entriesService.createEntry(createEntryDto);
  }
}
