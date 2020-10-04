<template >
  <div class="dirView">
    <div class="breadcrumbview">
      <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div>
        <el-link type="primary"
                 icon="el-icon-edit">打包下载</el-link>
        <el-link type="primary"><i class="el-icon-view el-icon--right"></i>解压上传 </el-link>
        <el-link type="primary"
                 icon="el-icon-edit">上传</el-link>

      </div>
    </div>
    <div class="cardview">
      <el-card v-for="(item,index) in data"
               :key="index"
               class="shake shake-slow"
               style="margin:1px;background-color: Transparent;"
               shadow="hover">
        <span class="el-icon-document"
              style="font: 3em sans-serif;" @click="viewopendir()" />
        <div>
          <span>目录视图</span>
        </div>
      </el-card>
    </div>
    <div class="block"
         style="display: flex;flex-direction:row-reverse;">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage4"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickOpenDir: "el-icon-folder",
      currentDate: "2020.1.10",
      currentPage4: "",
      data: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
        , {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    }
  },
  mounted () { },
  methods: {
    // 点击文件夹
    viewopendir () {
     
    },
    //分页
    handleSizeChange (val) {

    },
    handleCurrentChange (val) {

    }
  }
}
</script>
<style>
.cardview {
  width: 100%;
  height: 700px;
  overflow-y: auto;
  margin: 10px 10px 10px 0px;
  background-color: Transparent;
}
.breadcrumbview {
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dirView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  background-color: Transparent;
}
.image {
  height: 50px;
  width: 50px;
}
</style>