<template>
 <!-- <div id='background'> -->
 <div id="app" >
    <p>
      <font size="50">
            眼镜商城管理系统
      </font>
    </p>
    <router-view/>
  </div>
 <!-- </div> -->
 
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
