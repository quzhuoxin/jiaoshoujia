<template>
  <div>
    <template>
      <div class="block" style="width: 50%; margin: auto">
        <!-- <span class="demonstration">Click 指示器触发</span> -->
        <el-carousel trigger="click" height="400px">
          <el-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item.img" alt="" width="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 70%; margin: auto"
        border
      >
        <el-table-column
          style="height: 100px"
          prop="head"
          label="头像"
          width="100"
        >
          <template slot-scope="scope" class="img">
            <div>
              <img :src="scope.row.head" alt="" width="100" height="70" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [],
      tableData: [
        {
          head: require("../assets/2.jpg"),
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家",
        },
        {
          head: require("../assets/2.jpg"),
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          head: require("../assets/2.jpg"),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          head: require("../assets/2.jpg"),
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  mounted() {
    this.$http.get("/api/w/website/bannerList").then((res) => {
      console.log(res);
      this.bannerList = res.data.data;
    });

    this.$http.get()
    
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>