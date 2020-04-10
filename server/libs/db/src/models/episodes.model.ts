import { prop, modelOptions } from "@typegoose/typegoose";


@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @prop()
  name: string   // 标题名称

  @prop()
  file: string


}