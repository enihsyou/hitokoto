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

          <!--UPLOAD-->
          <div class='upload-file-container'>
            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
              <h1>Upload images</h1>
              <div class="dropbox">
                <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files)" accept="image/*" class="input-file">
                <p v-if="isInitial">
                  Drag your file(s) here to begin<br> or click to browse
                </p>
                <p v-if="isSaving">
                  Uploading file...
                </p>
              </div>
            </form>
            <!--SUCCESS-->
            <div v-if="isSuccess">
              <h2>Uploaded file {{ uploadedFile.filename }} successfully.</h2>
              <p>
                <a href="javascript:void(0)" @click="reset()">Upload again</a>
              </p>
              <img :src="uploadedFile.url" class="img-responsive img-thumbnail" :alt="uploadedFile.filename" width='50%'>
            </div>
            <!--FAILED-->
            <div v-if="isFailed">
              <h2>Uploaded failed.</h2>
              <p>
                <a href="javascript:void(0)" @click="reset()">Try again</a>
              </p>
              <pre>{{ uploadError }}</pre>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!--底栏版权信息-->
    <Footer class='footer' />


  </div>
</template>
<script>
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hitokoto from '@/components/Hitokoto';
import Sidebar from '@/components/Sidebar';
import { upload } from './service/file-upload';

const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
  name: 'App',
  components: {
    Header,
    Hitokoto,
    Sidebar,
    Footer,
  },
  data() {
    return {
      uploadedFile: null,
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'smfile',
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFile = null;
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      upload(formData)
          .then(x => {
            this.uploadedFile = x.data;
            this.currentStatus = STATUS_SUCCESS;
            console.log(x.data);
            window.open(x.data.url, '_blank');
          })
          .catch(err => {
            this.uploadError = err.msg;
            this.currentStatus = STATUS_FAILED;
          });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      formData.append(fieldName, fileList[0], fileList[0].name);

      // save it
      this.save(formData);
    },
  },
  mounted() {
    this.reset();
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

.upload-file-container {
  position: absolute;
  left: 25vw;
  top: 40vh;
  width: 50vw;
  height: 35vh;
  z-index: 10;
}

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

</style>
