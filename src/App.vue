<template>

  <div id="app">
    <!--导航栏，覆盖在主体上层-->
    <Navigation class='navigation-container'/>

    <!--页面主体内容-->
    <router-view class='main-container'/>

    <!--底栏版权信息-->
    <Footer class='footer-container' />
  </div>

</template>
<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>
<style lang="scss">

#app {
  width: 100vw;
  height: 100vh;
  background-color: dimgray;
}

.navigation-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 20;
}

.main-container {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.footer-container {
  position: fixed;
  right: 0.8em;
  bottom: 0.3em;
  z-index: 30;
}

</style>

