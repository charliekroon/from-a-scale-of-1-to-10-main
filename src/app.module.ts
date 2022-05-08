import { Module } from '@nestjs/common';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [EntriesModule],
})
export class AppModule {}
