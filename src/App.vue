<template>

  <div id="app">
    <!--导航栏，覆盖在主体上层-->
    <Navigation class='navigation-component'/>

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

/*a {*/
  /*color: #FFF;*/
  /*text-decoration: none;*/
/*}*/

#app {
  width: 100vw;
  height: 100vh;
  background-color: #454545;
}

.navigation-component {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 20;
  pointer-events: none;
}

.main-container {
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
}

.footer-container {
  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: 0.8em;
  padding-bottom: 0.3em;
  z-index: 11;
}

</style>

