import { Module } from '@nestjs/common';
import { CourseController } from './courses.controller';

@Module({
  controllers: [CourseController]
})
export class CoursesModule {}
