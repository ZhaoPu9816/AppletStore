<template>
  <div class="sign-background">
    <Head></Head>
    <div v-if="sign" class="sign-card">
      <form>
        <div class="lineheight30 iblock zp-col-12">
          <span class="left">登录</span>
          <a @click="tab" class="right not-select">立即注册>></a>
        </div>
        <div class="divider"></div>
        <input type="text" placeholder="邮箱" />
        <input type="text" placeholder="密码" />
        <div>
          <router-link to="/Retrieve" class="right not-select">忘记密码</router-link>
        </div>
        <router-link to="/Personal"><button class="sign-submit not-select">登录</button></router-link>
      </form>
    </div>
    <div v-if="register" class="register-card">
      <form>
        <div class="lineheight30 iblock zp-col-12">
          <span class="left">注册</span>
          <a @click="tab" class="right not-select">返回登录>></a>
        </div>
        <div class="divider"></div>
        <input type="text" placeholder="邮箱" />
        <div>
          <input class="zp-col-6" type="text" placeholder="验证码" />
          <button class="getcode right not-select">获取验证码</button>
        </div>
        <input type="text" placeholder="密码" />
        <input type="text" placeholder="确认密码" />
        <div>
          <label class="left not-select"><input class="read" type="checkbox"/>我已阅读并同意<a>《注册协议》</a> </label>
        </div>
        <button class="register-submit not-select">注册</button>
      </form>
    </div>
  </div>
</template>

<script>
import Head from '../Index/Head.vue'
import Down from '../Index/Down.vue'
export default {
  data () {
    return {
      sign: true,
      register: false
    }
  },
  methods: {
    tab: function () {
      this.sign = !this.sign
      this.register = !this.register
    }
  },
  components: {
    Head,
    Down
  }
}
</script>

<style scoped lang="less">
@import url("../../css/public.css");
@import url("../../css/sign.less");
</style>
