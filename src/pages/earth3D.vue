<template>
<div style="width:100%;height:800px">
<div id="cesiumContainer"></div>
</div>
</template>

<script>
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";

import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl'
import 'cesium/Source/Widgets/widgets.css'

export default {
	data () {
    	return {
    		viewer :{},
    
    	}
    },
	mounted (){
 	  // 设置静态资源目录
      buildModuleUrl.setBaseUrl('../../static/Cesium/')
      // // 创建viewer实例
      this.viewer = new Viewer('cesiumContainer');
            // 去除版权信息
      //  this.Cesium.Ion.defaultAccessToken ='申请许可证编号'
      // Cesium3DTileset用来实现大范围的模型场景数据的加载应用
      // 三维倾斜模型、人工建模、BIM模型等等，都可以转换成3DTiles
      
    }
   
}
</script>

<style>
#cesiumContainer{
  width: 100%;
  height: 800px;
}
</style>