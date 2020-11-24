<template>
  <div>
      <div class="aa">
          <img src="../assets/2.jpg" alt="">
          <el-dropdown>
            <el-button type="primary">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
          <ul class="a">
              <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
              
              
          </ul>
           <i href="" class="el-icon-grape putao"></i>
           <i class="el-icon-lollipop tang"></i>
           <el-button type="danger" plain round>危险按钮</el-button>
           <el-button type="primary" cricle>主要按钮</el-button>
           <el-button type="info" icon="el-icon-message" circle></el-button>
           <!-- <div class="card">
               <el-scrollbar class="wa">
               <el-row class="aaa">
                <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/2.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的东西</span>
                        <div class="bottom clearfix">
                        <time class="time">2020-11-20</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
                </el-row>
                </el-scrollbar>
           </div> -->
      </div>
     
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    // 父向子传值（属性传值）
    props:{
        datalist:{
            type:Array,
            requred:true
        }
    }
}
</script>

<style lang="scss">
    .card{
        margin: auto;
        width: 70%;
        background-color: #f99;
        height: 600px;
        overflow: auto;

    }
        .aaa{
            margin: auto;
        }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
    .tang{
        font-size: 100px;
        color: coral;
    }
    .putao{
        font-size: 200px;
        color: blueviolet;
    }
    .a{
        width: 400px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin:auto;
        background-color: antiquewhite;
        display: flex;
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        li{
            color:red;
            &:hover{
                color:yellow
            }
        }
    }
    .aa{
       width: 100%;
       img{
           display:inline-block;
           width:200px;
           height:200px;
           box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
       }
    }
    .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;}
</style>