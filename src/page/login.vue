    <template>
  <div class="login_page">
    <section class="backLoginBox">
      <img
        class="backLoginImg"
        src="https://pubimage.spssau.com/loginimages.png"
      />
      <div class="backLogin">
        <!-- <img src="images/icon/logoicon.png"> -->
        <h1>管理员登录</h1>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <el-form-item prop="account">
            <el-input
              type="account"
              v-model="ruleForm.account"
              auto-complete="off"
              placeholder="手机号"
              class="backusername"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              auto-complete="off"
              placeholder="密码"
              class="backpassword"
            ></el-input>
          </el-form-item>

          <el-form-item class="btnItem">
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              class="submit_btn"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
        <!-- <el-form : id="" role="form">
          <input
            id="backusername"
            class="text"
            type="text"
            name=""
            placeholder="手机号"
          />
          <input
            id="backpassword"
            class="text"
            type="password"
            name=""
            maxlength="16"
            placeholder="密码"
          />
          <input
            id="backloginbutton"
            class="button"
            type="button"
            name=""
            value="登录"
          />
        </el-form> -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      console.log(this);
      let that;
      that = this;
      this.$http
        .get("https://test.spssau.com/api/user/auth/innerlogin", {
          params: {
            username: this.ruleForm.account,
            password: this.ruleForm.password,
          },
        })
        .then((res) => {
          console.log(res);
          let user = res; // eslint-disable-line no-unused-vars
        });
      that.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  },
};
</script>

<style lang="scss" scoped>
.login_page {
  width: 100%;
  height: 100%;
  .backLoginBox {
    width: 646px;
    height: 460px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    /* IE 9 */
    -moz-transform: translate(-50%, -50%);
    /* Firefox */
    -webkit-transform: translate(-50%, -50%);
    /* Safari 和 Chrome */
    -o-transform: translate(-50%, -50%);
    .backLoginImg {
      width: 45%;
      height: 100%;
      float: left;
    }

    .backLogin {
      width: 55%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 40px;
      float: right;

      h1 {
        width: 100%;

        font-size: 24px;
        font-family: PingFangSC-Thin;
        font-weight: 100;
        text-align: center;
        line-height: 115px;
        height: 115px;
        border-bottom: 1px solid #d8d8d8;
      }
      .demo-ruleForm {
        margin-top: 30px;
        .backusername >>> .el-input__inner {
          width: 100%;
          color: #999999;
          font-size: 14px;
          border: none;
          // border-bottom: 1px solid #bfbfbf;
        }
        .backpassword {
          input {
            width: 100%;
            color: #999999;
            font-size: 14px;
            border: none;
            // border-bottom: 1px solid #bfbfbf;
          }
        }
        .btnItem {
          text-align: center;
          .submit_btn {
            margin-top: 38px;
            width: 90%;
            height: 40px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>

