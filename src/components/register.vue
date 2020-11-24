<template>
  <div>
      <div class="body">
          <div class="body1">
      <div class="head">
        <p>注册</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
         <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item show-password label="密码" prop="password" style="margin-top:38px">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>

            <el-button type="primary" round style="width:100px;margin-left:-28px" @click="submitForm('ruleForm')">注册</el-button>
            <el-button  round style="width:100px;"  @click="res1()">去登录</el-button>
        </el-form-item>
        </el-form>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password:'',
          phone:'',
          email:'',
        },
        rules: {
            password:[
                {required:true,message:'密码不能为空',trigger:'blur'},
                {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,message:"格式错误"}
            ],
            phone:[
                {required:true,message:'手机号不能为空',trigger:'blur'},
                {pattern:/^1[34578]\d{9}$/,message:"格式错误"}
            ],
             email:[
                {required:true,message:'邮箱不能为空',trigger:'blur'},
                {pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"格式错误"}
            ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 13, message: '长度在 1 到 13个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        res1(){
      this.$router.push({
          path:"/log"
      });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post("/one/users/register",this.ruleForm).then(res=>{
              console.log(res);
              if(res.data.code===1){
                alert('用户名已存在！');
              }else{
                alert('注册成功！');
                this.$router.push({
                  path:"/log"
              })
              }

            })
            // this.$http.post("/apione/users/register",{
            //    username:this.ruleForm.name,
            //    password:this.ruleForm.pass,
            //     phone:this.ruleForm.phone,
            //    email:this.ruleForm.email
            //  }).then(res=> {
            //    console.log(res)
            // })
            // alert('submit!');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scopde lang="scss">
    .body1{
      height: 480px;
        width: 28%;
        margin-left: 59%;
        background-color:rgba(255,255,255,0.6);
        // padding-bottom: 40px;
        border-radius: 10px;
    }
    .body{
        height: 584px;
        padding-top: 40px;
        padding-bottom: 40px;
        background: url(../assets/bgc.jpg);
        background-size: 100% 100%;
    }
    .head{
        border-radius: 10px 10px 0 0;
        width: 100%;
        margin: auto;
        height: 80px;
        line-height: 80px;
        color: #fff;
        font-size:30px;
        background-color: #6ac1f3;
        letter-spacing: 40px;
        text-align: center;
        p{
          margin-left: 40px;
        }
    }
    .demo-ruleForm{
        padding-top: 40px;
        width: 70%;
        margin: auto;
        margin-right: 85px;
    }
    .el-form-item__content{
        margin-left:58px;
    }
</style>