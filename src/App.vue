<template>
  <div id="app">
    <!--整个网页的背景图层-->
    <div class='background'></div>
    <div class='body-container'>
      <!--计划放置导航栏-->
      <Header class="header" />
      <!--侧边栏抽屉-->
      <Sidebar class='sidebar' />
      <!--网页主体内容-->
      <main class='main'>
        <div class='page-content'>
          <!--hitokoto一言-->
          <Hitokoto />
        </div>
      </main>
    </div>
    <!--底栏版权信息-->
    <Footer class='footer'/>
  </div>
</template>
<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hitokoto from "@/components/Hitokoto";
import Sidebar from "@/components/Sidebar";

export default {
  name: 'App',
  components: {
    Header,
    Hitokoto,
    Sidebar,
    Footer,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
}

#app {

}

.background {
  background-image: url("https://piccdn.freejishu.com/images/2018/03/11/qf3cu.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  filter: brightness(0.6);
}

.body-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  z-index: 5;
  min-height: 4em;
  padding: 0 40px;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-sizing: border-box;
}

.main {
  position: relative;
  display: inline-block;
  z-index: 1;
  flex-grow: 1;
}

.page-content {

}

.footer {
  position: fixed;
  bottom: 0.3em;
  right: 0.9em;
  margin-bottom: 0;
  text-align: right;
  z-index: 6;
  color: whitesmoke;
}

@media screen and (max-width: 600px) {
  .background {
    background-image: url("https://piccdn.freejishu.com/images/2016/09/25/930f5212c99ccc71accd4615cb03e255.jpg");
  }

  .header {
    display: none;
  }
}
</style>
