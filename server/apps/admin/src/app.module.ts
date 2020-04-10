import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';

import { EpisodesModule } from './episodes/episodes.module';
import { CoursesModule } from './courses/courses.module';


// 引用数据库模块libs
@Module({
  imports: [
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
