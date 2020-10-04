<template>
  <div>
  <div :class="['meun-switch animated flex-row',uploadflag ? 'active rubberBand off' : 'leave jello']"
         @mouseleave="uploadleave"
         @mouseenter="uploadenter"
         v-if="uploadShow"
         @click="drawer = true">
      <img src="../assets/img/qiaoba.png" style ="opacity:0.9;" 
           class="shake shake-slow" />
    </div>
    <el-drawer :visible.sync="drawer"  size="60%">
      <div>
        <div class="select">
          <div class="selectfrom">
            <el-form :inline="true"
                     :model="formInline"
                     class="demo-form-inline">
              <el-form-item>
                <el-input v-model="formInline.user"
                          placeholder="请输入文件名称"
                          prefix-icon="el-icon-search"
                          size="medium"></el-input>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formInline.region"
                           placeholder="请选择文件类型"
                           size="medium"
                           prefix-icon="el-icon-search">
                  <el-option label="文件"
                             value="文件"></el-option>
                  <el-option label="目录"
                             value="目录"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-select v-model="formInline.region"
                           placeholder="请选择文件格式"
                           size="medium"
                           prefix-icon="el-icon-search">
                  <el-option label="文本"
                             value="文本"></el-option>
                  <el-option label="视频"
                             value="视频"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <div class="block">
                  <el-date-picker v-model="value2"
                                  type="datetimerange"
                                  align="right"
                                  start-placeholder="上传开始日期"
                                  :picker-options="pickerOptions"
                                  end-placeholder="结束日期"
                                  :default-time="['12:00:00', '08:00:00']">
                  </el-date-picker>
                </div>
              </el-form-item>
            </el-form>
          </div>
          <div class="selectview">
            <el-table :data="tableData"
                      style="width: 100%"
                      :stripe="true"
                      border
                      height="700">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left"
                           inline
                           class="demo-table-expand"
                           fixed>
                    <el-form-item label="商品名称">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                      <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="商品 ID">
                      <span>{{ props.row.id }}</span>
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                      <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="商品分类">
                      <span>{{ props.row.category }}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                      <span>{{ props.row.address }}</span>
                    </el-form-item>
                    <el-form-item label="商品描述">
                      <span>{{ props.row.desc }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="商品 ID"
                               prop="id">
              </el-table-column>
              <el-table-column label="商品名称"
                               prop="name">
              </el-table-column>
              <el-table-column label="描述"
                               prop="desc">
              </el-table-column>
            </el-table>
          </div>
          <div>

          </div>
        </div>
        <div class="fileup">
          <div  @click="innerDrawer = true"
                     id="buttenImg"

                     @mousedown="initMouseDown(this)"
                   >
          <img src="../assets/img/uploadbutton.png"  style="width: 200px; height: 250px;opacity:0.7;"   class="shake shake-slow" /> 
          </div>
          <el-drawer title="文件上传"
                     :append-to-body="true"
                     :before-close="handleClose"
                     :visible.sync="innerDrawer">
            <div class="uploaddiv">
              <el-collapse v-model="tupian"
                           accordion>
                <el-collapse-item title="图片上传"
                                  name="1">
                  <div>
                    <el-upload action="#"
                               list-type="picture-card"
                               :auto-upload="false">
                      <i slot="default"
                         class="el-icon-plus"></i>
                      <div slot="file"
                           slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail"
                             :src="file.url"
                             alt="">
                        <span class="el-upload-list__item-actions">
                          <span class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)">
                            <i class="el-icon-zoom-in"></i>
                          </span>
                          <span v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)">
                            <i class="el-icon-download"></i>
                          </span>
                          <span v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)">
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%"
                           :src="dialogImageUrl"
                           alt="">
                    </el-dialog>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="文件手动上传"
                                  name="2">
                  <div>
                    <el-upload class="upload-demo"
                               ref="upload"
                               action="https://jsonplaceholder.typicode.com/posts/"
                               :on-preview="handlePreview"
                               :on-remove="handleRemove"
                               :file-list="fileList"
                               :auto-upload="false">
                      <el-button slot="trigger"
                                 size="small"
                                 type="primary">选取文件
                      </el-button>
                      <el-button style="margin-left: 10px;"
                                 size="small"
                                 type="success"
                                 @click="submitUpload">上传到服务器</el-button>
                      <div slot="tip"
                           class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="拖拽上传"
                                  name="3">
                  <div>
                    <el-upload class="upload-demo"
                               drag
                               action="https://jsonplaceholder.typicode.com/posts/"
                               multiple>
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip"
                           slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-collapse-item>
                <el-collapse-item title="断点上传插件"
                                  name="4">
                  <div>
                    <el-upload class="upload-demo"
                               action="https://jsonplaceholder.typicode.com/posts/"
                               :on-change="handleChange"
                               :file-list="fileList">
                      <el-button size="small"
                                 type="primary">点击上传</el-button>
                      <div slot="tip"
                           class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-drawer>
        </div>
      </div>
    </el-drawer>

    <div>
      <el-table v-loading="loading"
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                :border="true"
                :stripe="true"
               
                height="700"
                :row-class-name="tableRowClassName"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="selection"
                         width="55">
        </el-table-column>
        <el-table-column fixed
                         prop="date"
                         label="日期"
                         sortable
                         width="180"
                         :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                         :filter-method="filterHandler">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         sortable
                         width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover"
                        placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference"
                   class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"
                         show-overflow-tooltip>
        </el-table-column>
        <el-table-column fixed="right">
          <template slot="header"
                    slot-scope="scope">
            <el-input v-model="search"
                      size="mini"
                      placeholder="输入关键字搜索" >
                       <el-button slot="append" icon="el-icon-search" ></el-button>         
            </el-input>
        
          </template>
          <template slot-scope="scope">
            <el-link icon="el-icon-edit"
                     type="success"
                     @click="handleEdit(scope.$index, scope.row)">
              打包下载</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除<i class="el-icon-view el-icon--right"></i> </el-link>

          </template>
        </el-table-column>
      </el-table>
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

import buttonImg from "../assets/img/uploadbutton.png"
import {handleMouseDown} from "../assets/js/movement"
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      uploadShow: false,
      uploadflag: true,
      loading: true,
      drawer: false,
      innerDrawer: false,
      search: "",
      value2: '',
      activeName: '1',
      tupian:"",
      currentPage4:4,
      currentPage:4,
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],

      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      formInline: {
        user: '',
        region: '',
        pickerOptions: '',
      },
      tableData: [
        {
        id: 1222,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 222,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 1225264,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 22425,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 2221,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2222,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 12564,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2245,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 1,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 1564,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 245,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 14,
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 25,
        date: '2016-05-04',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 366,
        date: '2016-05-01',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 3231,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 3232,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }],
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1516 弄',
        children: [{
          id: 3441,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 3442,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 35551,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 36662,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }]
      }, {
        id: 4324,
        date: '2016-05-03',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1516 弄',
        children: [{
          id: 344541,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 345442,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 3555451,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 3634662,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }]
      }, {
        id: 478,
        date: '2016-05-03',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1516 弄',
        children: [{
          id: 344891,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 93442,
          date: '2016-05-01',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
            id: 3555901,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 3690662,
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }]
        }]
      }],

    }
  },
  methods: {
    initMouseDown(val){
        handleMouseDown(document.getElementById('buttenImg'));
    },
    handleChange(file, fileList) {
      console.log(file, fileList);
    },
    // 上传
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {

    },
    beforeRemove (file, fileList) {

    },
    //分页
    handleSizeChange (val) {

    },
    handleCurrentChange (val) {

    },
    //图片上传事件
    handleRemove (file) {
      console.log(file);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload (file) {
      console.log(file);
    },
    //手动上传事件
    submitUpload () {
      this.$refs.upload.submit();
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    //按钮
    uploadenter () {
      this.uploadflag = true;
    },
    uploadleave () {
      this.uploadflag = false;

    },
    uploadanimated () {
      setTimeout(() => {
        this.uploadShow = true;
        setTimeout(() => {
          this.uploadleave();
        }, 1000);
      }, 1000);
    },
    // 抽屉
    handleClose (done) {
      this.$confirm('还有未保存的工作哦确定关闭吗？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    init () {
      setTimeout(() => {
        this.loading = false;
        this.uploadShow = true
      }, 1000);

    },
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    filterHandler (value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
  },
  mounted () {
    this.init();
  }

}
</script>
<style>

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
  margin:0px 10px 10px 10px;
}

.selectfrom {
  margin: 10px;
}

.uploaddiv {
  margin: 10px;
}
</style>