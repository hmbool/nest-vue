<template>
  <div>
    <h3>{{isNew ? '创建' : '编辑'}}课时</h3>
    <el-card header="设置" style="max-width:1200px;margin: 50px auto;">
      <ele-form
        v-model="data"
        :form-data="data"
        :form-desc="fields"
        :request-fn="submitt"
      ></ele-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String)
  id!: string; // 把项目放在工作区首位  添加！修饰解决问题
  data = {};

  fields = {
    // _id: { label: "ID" },
    name: { label: "课程名称", type: "input" },
    cover: { label: "课程封面图", type: "input" }
  };

  get isNew() {
    return !this.id;
  }
  async fetch() {
    const res = await this.$http.get(`courses/${this.id}`);
    this.data = res.data;
  }
  // 接收一个data表单更新的数据
  async submitt(data) {
    const url = this.isNew ? `courses` : `courses/${this.id}`
    const methon = this.isNew ? 'post' : 'put'
    await this.$http[methon](url, data)
    this.$message.success('保存成功')
    this.data = {}
    // 返回上一个页面
    this.$router.go(-1)
  }
  created() {
    !this.isNew && this.fetch();
  }
}
</script>

<style>
</style>