<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.module{
  .module-title{
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 80%;
      background-color: red;
    }
  }
  .module-content{
    background-color: #000;
    color: #ddd;
    padding: 15px;
  }
}
</style>
