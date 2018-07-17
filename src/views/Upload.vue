<template>
  <div class="container">
    <div class="upper">
      <el-upload
          class="left uploader"
          action="https://sm.ms/api/upload"
          ref="upload"
          name="smfile"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleFileChange"
          :on-success="handleUploadSuccess"
          :before-upload="beforeUpload"
          :http-request="handleNetworkUpload"
          accept="image/*">
        <img v-if="imageUrl"
             :src="imageUrl"
             class="image">
        <i v-else
           class="el-icon-plus uploader-icon"></i>
      </el-upload>
      <div class="right">
        <el-input
            v-model="sentence"
            placeholder="请输入一段话"
            type="textarea"
            class="sentence-input"
            required></el-input>
        <el-input
            v-model="author"
            placeholder="请输入作者"
            class="author-input"
            required></el-input>
      </div>
    </div>
    <el-button type="primary"
               plain
               class="commit-button"
               @click="commit">提交
    </el-button>
  </div>

</template>

<script>
import store from "@/data/store";
import { ADD_WORD } from "@/data/mutation-types";
import { uploadForm } from "@/service/web-api";

export default {
  store,
  data() {
    return {
      // imageUrl: "https://piccdn.freejishu.com/images/2016/04/04/pixiv51081070.png",
      // imageUrl: "https://i.stack.imgur.com/L1ihk.jpg",
      imageUrl: "",
      sentence: "",
      author: "",

      /*保存上传结果*/
      /**@type {SmmsApiResponse}*/
      uploaded: {},
      file: File
    };
  },
  methods: {
    handleFileChange(file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleUploadSuccess() {
      this.$message.success("上传成功");
      this.$store.commit(ADD_WORD, {
        id: this.uploaded.timestamp,
        author: this.author,
        sentence: this.sentence,
        imageUrl: this.uploaded.url,
        likes: 0,
        liked: false
      });
    },

    handleUploadFail() {
      this.$message.error("上传失败");
    },

    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    commit() {
      let uploader = this.$refs.upload;
      if (uploader.uploadFiles.length < 1) {
        this.$message.error("未选择图片");
      } else if (this.author.trim().length === 0) {
        this.$message.error("请填写作者");
      } else if (this.sentence.trim().length === 0) {
        this.$message.error("请填写句子");
      } else {
        uploader.submit();
      }
    },

    handleNetworkUpload(data) {
      uploadForm(data.file)
          .then(x => {
            this.uploaded = x;
            this.handleUploadSuccess();
          })
          .catch(x => {
            this.handleUploadFail();
          });
    }
  }
};
</script>

<style scoped
       lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upper {
  padding-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 90%;

  .left {
    margin-right: 2em;
  }

  .right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .sentence-input {
      flex-grow: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .author-input {
      margin-top: 1em;
    }
  }
}

.commit-button {
  width: 50%;
  max-width: 9em;
}

.uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 40vh;
  width: 50%;

  display: flex;
  flex-flow: column;
  justify-content: center;

  &:hover {
    border-color: #409EFF;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .uploader-icon {
    font-size: 4em;
    color: #8c939d;
  }
}
</style>

<style lang="scss">
.el-textarea__inner {
  height: 100%;
}

.el-upload.el-upload--text {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
