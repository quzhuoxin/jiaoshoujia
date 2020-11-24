<template>
  <div>
    <div v-if="sortList != ''">
      <el-table :data="sortList" border style="width: 65%; margin: 30px auto">
        <el-table-column
          type="index"
          label="序号"
          width="40"
        ></el-table-column>
        <el-table-column prop="pict_url" label="图片" width="140">
          <template slot-scope="scope">
            <div>
              <img
                :src="scope.row.pict_url"
                style="width: 120px; height: 100px;"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="category_name" label="名称" width="80">
        </el-table-column>
        <el-table-column prop="nick" label="店铺" width="120"> </el-table-column>
        <el-table-column prop="coupon_info" label="优惠卷" width="140">
          <template slot-scope="scope">
            <div>
              <h3>
                <font color="red" >{{
                  scope.row.coupon_info ? scope.row.coupon_info : "暂无优惠卷"
                }}</font>
              </h3>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="provcity" width="100" label="地区"> </el-table-column>
        <el-table-column prop="zk_final_price" label="价格" width="80"></el-table-column>
        <el-table-column prop="reserve_price" label="操作" width="300">
          <template slot-scope="scope">
            <div style="width:240px" class="box1">
              <a :href="scope.row.coupon_share_url" v-if="scope.row.coupon_share_url"><el-button  type="success" plain>领取优惠卷</el-button>
              </a>
             <a :href="scope.row.coupon_share_url" v-else> <el-button type="info" plain disabled>暂无优惠券</el-button>
              </a>
              
              <a :href="scope.row.url"><el-button type="warning" plain>详情</el-button></a>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="totleNum"
        >
        </el-pagination>
      </div>
    </div>
    <div v-else>
      <h1>暂无数据</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totleNum: 0,
      canshu: "",
      sortList: [],
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.params.name);
    this.canshu = this.$route.params.name;

    if (this.canshu) {
      this.getdata(this.canshu, this.currentPage);
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getdata(this.canshu, this.currentPage);
    },
    getdata(val, page) {
      console.log(this.canshu);
      this.$http
        .get("/api/w/website/findGoodsList", {
          params: {
            info: val,
            pageNo: page || 1,
          },
        })
        .then((res) => {
          console.log(res);
          this.sortList =
            res.data.data.tbk_dg_material_optional_response.result_list.map_data;
          this.totleNum =
            res.data.data.tbk_dg_material_optional_response.total_results;
        });
    },
  },
};
</script>

<style lang='scss'>
.box1{
    a{
        display: inline-block;
        margin-left: 20px;
    }
}
</style>
