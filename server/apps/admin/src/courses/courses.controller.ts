import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@libs/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';


@Crud({
  model: Course
})

@Controller('courses')
@ApiTags('课程')
export class CourseController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
  ){ } 
}
