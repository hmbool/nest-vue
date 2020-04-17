<template>
  <div>
    <avue-crud
      :page.sync="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-laod="changePage"
      @sort-change="changeSort"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String)
  resource!: string;
  data: any = {};
  // fields = {
  //   _id: { label: "ID" },
  //   name: { label: "课程名称" },
  //   cover: { label: "课程封面图" }
  // };
  option: any = {};
  page: any = {
    total: 0
    // pageSize: 2,
    // pageSizes: [2, 5, 10]
  };
  query: any = {
    // limit: 10
  };

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }
  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async changeSort({ prop, order }) {
    if(!order) {
      this.query.sort = null
    } else {
      this.query.sort = {
        [prop]: order === 'ascending' ? 1 : -1
      }
    }
    this.fetch()
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }
  async create(row, done, loading) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done(); // 加载完成自动关闭框
    console.log(loading);
  }
  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
    console.log(loading);
  }
  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }
  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style>
</style>