<template>
  <div id="container"
       class="box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<script>

export default {
  name: 'cesiumPage',
  data () {
    return {
    }
  },
  mounted () {
    var Cesium = this.Cesium;
    var cesiumContainer = document.getElementById("cesiumContainer");

    var viewer = new Cesium.Viewer("cesiumContainer", { //创建viewer实例
      //vrButton: true,//创建VRButton小部件
      baseLayerPicker: false, //BaseLayerPicker小部件 图层选择器，选择要显示的地图服务和地形服务.
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
      })
    })
    //去除 版权图标
    viewer._cesiumWidget._creditContainer.style.display = "none";

    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(116.397108, 39.916636, 2000.0),
      orientation: {
        heading: Cesium.Math.toRadians(0.0), // east, default value is 0.0 (north)
        pitch: Cesium.Math.toRadians(-90),    // default value (looking down)
        roll: 0.0                             // default value
      }
    });
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.box {
  height: 100%;
}
</style>

