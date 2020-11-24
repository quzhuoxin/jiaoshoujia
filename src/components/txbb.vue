<template>
  <div>
    <!-- <el-table  border style="width: 70%;  margin: 30px auto">
        <el-table-column type="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="pubDate" label="日期" width="180"> </el-table-column>
        <el-table-column prop="sourceurl" label="图片" width="180"> -->
        <!-- <template slot-scope="scope">          
            <div>
            <img :src="scope.row.sourceurl" alt="" width="100" />
            </div>
        </template> -->
        <!-- </el-table-column>
        <el-table-column prop="title" label="标题" width="180"> </el-table-column>
        <el-table-column prop="url" label="网址"> </el-table-column>
    </el-table> -->
      <el-button type="succes" @click="chuanzhi">我是子组件</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aa:'明天周五！！！！！！！',
      bannerList: [],
      tableData: [],
    };
  },
  methods: {

    chuanzhi(){
      this.$emit("titlechange",this.aa)
    },
    // getdata() {
    //   this.$http.get("/api/w/website/findGoodsTypeList").then((res) => {
    //       console.log(res);
    //     });
    // },
  },
};
</script>

<style>
</style>