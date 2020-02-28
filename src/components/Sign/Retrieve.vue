<template>
  <!-- 找回密码 -->
  <div class="retriece-background">
    <Head></Head>
    <div class="retriece">
      <!--上方小红点-->
      <ul class="step">
        <li>
          <div class="step1 left">1</div>
          <div class="link iblock"><hr /></div>
        </li>
        <li>
          <div class="step2 left">2</div>
          <div class="link iblock"><hr /></div>
        </li>
        <li>
          <div class="step3">3</div>
        </li>
      </ul>
      <ul class="step-text">
        <li>
          <span class="step-text1">验证身份</span>
        </li>
        <li>
          <span class="step-text2">设置新密码</span>
        </li>
        <li>
          <span class="step-text3">完成</span>
        </li>
      </ul>
      <!--验证身份-->
      <div class="retriece1">
        <div class="container">
          <span>邮箱：</span><i class="iconfont icon-youxiang"></i><input type="text" name="phone" id="phone" placeholder="输入邮箱" />
        </div>
        <div class="container">
          <span>验证码：</span><i class="iconfont icon-yanzhengma"></i><input type="text" name="verificationCode" id="verificationCode" placeholder="输入验证码" />
          <button class="hqyzm"><a href="javascript:;">获取验证码</a></button>
        </div>
        <div class="container">
          <button class="to-step2">下一步</button>
        </div>
      </div>
      <!--设置新密码-->
      <div class="retriece2">
        <div class="container">
          <span>新密码：</span><i class="iconfont icon-mima"></i><input type="text" name="passWord" id="passWord" placeholder="输入新密码" />
        </div>
        <div class="container">
          <span>确认密码：</span><i class="iconfont icon-check-off"></i><input type="text" name="repassWord" id="repassWord" placeholder="确认新密码" />
        </div>
        <div class="container">
          <button class="to-step3">下一步</button>
        </div>
      </div>
      <!--完成-->
      <div class="retriece3">
        <h1>密码重置完成</h1>
        <router-link to="/Sign"><button class="to-sign">返回登录</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../Index/Head.vue'
import Down from '../Index/Down.vue'
export default {
  data () {
    return {}
  },
  components: {
    Head,
    Down
  }
}
</script>

<style scoped lang="less">
@import url("../../css/Retrieve.less");
</style>
