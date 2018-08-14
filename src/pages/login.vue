<template>
    <section>
        <!-- <header class="login-header">login</header> -->
        <div class="login-form-box">
            <!-- <h3>login</h3> -->
            <div class="login-input-title">Login To X-System</div>
            <div>
                <span>User Name</span>
                <el-input label='sd' class="login-input" v-model="name" placeholder="please input username"></el-input>
            </div>
            <div>
                <span>PassWord</span>
                <el-input class="login-input" type="password" v-model="password" placeholder="please input password"></el-input>
            </div>
            <el-button class="login-btn" type="primary" @click="submit">Login</el-button>
        </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
        name:'',
        password:''
    }
  },
  methods:{
      submit(){
          this.$http.get('/api/user_info').then(data=>{
              console.log(data);
          }).then(err=>{
              console.log(err);
          })
    }
  }
}
</script>

<style>
.login-header{
    margin:0 auto;
    text-align:center;
    width: 300px;
    height: 50px;
    line-height:50px;
    border-radius: 5px;
    background-color:#ddd;
}
.login-input-title{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
}
.login-form-box{
    width:400px;
    margin:0 auto;
    padding-top:30px;
    height: 300px;
    text-align:center;
    border:1px solid #ccc;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #ccc ;
}
.login-input{
    margin:10px 0px 10px 10px;
    width: 200px;
    display: inline-block;
}
.login-btn{
    /* margin: 0 auto; */
    margin-top:20px;
    width:80%;
}
</style>
