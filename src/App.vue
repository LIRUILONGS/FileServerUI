<template>
  <div id="app">
    <div>
      <div class="topviewclass">
        <el-radio-group v-model="tabPosition"
                        style="margin-bottom: 30px;background-color: transparent;">
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>
        <el-button size="medium"
                   icon="el-icon-picture-outline-round"
                   @click="openView()"></el-button>
      </div>
      <el-tabs :tab-position="tabPosition"
               style="margin-bottom: 30px;background-color: transparent;"
               type="border-card">
        <el-tab-pane label="文件服务">
          <Upload v-if="UploadView" />
          <UploadView v-else />
        </el-tab-pane>
        <el-tab-pane label="聊天机器人">
          <ChattingRobot />
        </el-tab-pane>
        <el-tab-pane label="3D地球">
         <Earth3D />
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>

<script>
import Upload from "./pages/Upload.vue"
import ChattingRobot from "./pages/ChattingRobot.vue"
import UploadView from "./pages/UploadView"
import Earth3D  from "./pages/earth3D"
import { handleMouseDown } from "./assets/js/movement"
export default {
  name: 'App',
  components: {
    Upload, ChattingRobot, UploadView,Earth3D
  },
  data () {
    return {
      UploadView: true,
      tabPosition: 'left',
    };
  },
  methods: {
    openView () {
      this.UploadView = !this.UploadView;
    },
   
  }
}
</script>
<style>
#app {
}

.topviewclass{
  display: flex;
  justify-content: space-between;
}
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.el-table .warning-row {
  background: oldlace;
}

.tablelistfile {
}

.el-table .success-row {
  background: #f0f9eb;
}

.select {
  margin: 10px;
}

.selectfrom {
  margin: 10px;
}

.uploaddiv {
  margin: 10px;
}
</style>
