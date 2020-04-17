import { Controller, Get } from '@nestjs/common';
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
  ) { }

  @Get('option')
  option() {
    return {
      title: '课程管理111',
      column: [
        { prop: 'name', label: '课程名称', sortable: true },
        { prop: 'cover', label: '课程封面图' },
      ]
    }
  }
}
