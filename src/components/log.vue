<template>
  <div>
      <div class="body">
          <div class="body1">
      <div class="head">
        <p>登录</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" style="margin-top:38px">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" show-password prop="password" style="margin-top:38px">
            <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
         <!-- <el-form-item label="手机号" prop="phone" style="margin-top:38px">
            <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" style="margin-top:38px">
            <el-input v-model="ruleForm.email"></el-input>
        </el-form-item> -->
        <el-form-item style="margin-top:76px">
            <el-button type="primary" round style="width:100px;margin-left:-28px" @click="submitForm('ruleForm')">登录</el-button>
            <el-button round @click="go()" style="width:100px">去注册</el-button>
        </el-form-item>
        </el-form>
        </div>
        </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
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
            phone:[
                {required:true,message:'手机号不能为空',trigger:'blur'},
                {pattern:/^1[34578]\d{9}$/,message:"验证错误"}
            ],
             pass:[
                {required:true,message:'密码不能为空',trigger:'blur'},
                {pattern: /^[0-9]{3,16}$/,message:"验证错误"}
            ],
            //  idcard:[
            //     {required:true,message:'身份证件号码不能为空',trigger:'blur'},
            //     {pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:"验证错误"}
            // ],
            //  email:[
            //     {required:true,message:'邮箱不能为空',trigger:'blur'},
            //     {pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"验证错误"}
            // ],
          // name: [
          //   { required: true, message: '请输入用户名', trigger: 'blur' },
          //   { min: 1, max: 7, message: '长度在 1 到 7个字符', trigger: 'blur' }
          // ],
        }
      };
    },
    mounted() {
   
    },
    methods: {
      ...mapMutations({
        change:'change'
      }),
        go(){
      this.$router.push({
          path:"/register"
      });},
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             this.$http.post("/one/users/login", {
               username:this.ruleForm.username,
               password:this.ruleForm.password,
            //   //  phone:this.ruleForm.phone,
            //   //  email:this.ruleForm.email
             }
             ).then(res=> {
               console.log(res);
               if(res.data.code===2){
                alert('用户名不存在!');
              }else if(res.data.code===1){
                alert('密码错误！')
              }else{
                alert('登录成功！')
                localStorage.setItem('userToken',res.data.token);
                this.change({
                  loginToken:res.data.token,
                })
              }
            }) 
          } else {
            console.log('error submit!!');
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
*{
  padding: 0;
  margin: 0;
}
    .body1{
      height: 480px;
        width: 28%;
        margin-left: 59%;
        background-color:rgba(255,255,255,0.6);
        // padding-bottom: 60px;
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
        padding-top: 50px;
        width: 70%;
        margin: auto;
        margin-right: 90px;
        height: 442px;
    }
</style>