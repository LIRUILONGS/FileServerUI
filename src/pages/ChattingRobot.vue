<template>
  <div id="app">

    <div class="viewScreenClass">
      <div class="videoCardclass">
        <div style="width:70%;margin: 10px 0px 10px 10px;">
          <el-carousel :interval="10000"
                       type="card"
                       height="400px"
                       indicator-position="outside">
            <el-carousel-item v-for="(item,index) in datas"  
                              :key="index"
                              style="border-radius: 5px;border: 2px solid Transparent; box-shadow: 0 0 15px #eaeaea;width: 600px; background-color: black;">
              <div>
                <video id="example_video_1"
                       class="shake shake-slow"
                       width="605px"
                       height="400px"
                       controls
                       preload
                       loop
                       muted
                       :poster="item.poster"
                       data-setup="{}">
                  <source :src="item.src"
                          type='video/mp4' />
                </video>
              </div>

            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="width:30%;margin: 10px 10px 10px 0px" class="shake shake-slow">
          <el-card class="image"
                   shadow="hover">
           
          </el-card>
        </div>
      </div>
      <div class="editorContent">
        <mavon-editor v-model="mavonEditor.value"
                      style="height:50%;width:100%" />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ChattingRobot",
  data () {
    return {
      currentDate: new Date(),
      mavonEditor: {
        value: '',
      },
      datas: [
        {
          poster: "http://39.97.241.18:8080/sy/img/v2-97b4c593c493b32152cf4a3b592eb192_r.jpg",
          src: "https://vdn1.vzuu.com/SD/42c8568e-f19d-11e8-a6e7-0a580a440ccb.mp4?disable_local_cache=1&bu=http-com&expiration=1601494975&auth_key=1601494975-0-0-c10b3c970660d97605d8517bfc16b2c3&f=mp4&v=hw",
        },
        {
          poster: "",
          src: "http://39.97.241.18:8080/view/1.mp4",
        },
        {
          poster: "http://39.97.241.18:8080/sy/img/r.jpg",
          src: "https://vdn.vzuu.com/HD/a6e9d25a-eef5-11e8-b3a6-0a580a4bfd59.mp4?disable_local_cache=1&bu=http-com&expiration=1601495121&auth_key=1601495121-0-0-4a0a08e21cba1942550bace801fa56ce&f=mp4&v=ali",
        },
        {
          poster: "",
          src: "http://39.97.241.18:8080/view/2.mp4",
        },
        {
          poster: "http://39.97.241.18:8080/sy/img/future.jpg",
          src: "https://vdn.vzuu.com/HD/08f73ca6-eef8-11e8-b689-0a580a432769.mp4?disable_local_cache=1&bu=http-com&expiration=1601495165&auth_key=1601495165-0-0-746d69561f2e54d1db4047de69bcb3d4&f=mp4&v=ali",
        },
        {
          poster: "http://39.97.241.18:8080/sy/img/psb.webp",
          src: "http://39.97.241.18:8080/view/3.mp4",
        },
        {
          poster: "http://39.97.241.18:8080/sy/img/future.jpg",
          src: "https://vdn2.vzuu.com/LD/5013b814-3e33-11e9-95a3-0a580a4b7290.mp4?disable_local_cache=1&bu=http-com&expiration=1601496222&auth_key=1601496222-0-0-157d32ec9b92f011ea753191e67116a2&f=mp4&v=bsy",
        },
        {
          poster: "",
          src: "http://39.97.241.18:8080/view/1.mp4",
        },
      ],
      loading: false,
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>
.videoCardclass {
  display: flex;
}
.image {
  width: 100%;
 background-image: url("../assets/img/autos.gif");
  height: 100%;
}
.clearfix:after {
  clear: both;
}
.editorContent {
  margin-top: 10px;
}
.viewScreenClass {
  display: flex;
  flex-direction: column;
}
</style>
