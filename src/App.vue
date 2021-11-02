<template>
  <div id="app">
    <Head/>
    <Lefting/>
    <router-view></router-view>



  </div>
</template>

<script>

import Head from "@/components/Head";
import Lefting from "@/components/Lefting";


export default {
  name: 'App',
  components: {
    Head,
    Lefting,


  },data:function (){
    return{
    }
  }
}
</script>

<style>

.slider {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.slide-item {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  box-sizing: border-box;
}

.slide-enter {
  transform: translateY(300px);
}

.slide-enter-active {
  transition: transform .3s ease-in;
}

.slide-enter-to {
  transform: translateY(0);
}

.slide-leave {
  transform: translateY(0);
}

.slide-leave-active {
  transition: transform .3s ease-in;
}

.slide-leave-to {
  transform: translateY(-300px);
}


*{

}
.sinichka{
  width: 90px;
}
.back{
  width: 100%;
}
/*@media (min-width: 500px) {*/
/*  .back{*/
/*    width: 100%;*/
/*  }*/
/*}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-left: 150px;
  margin-top: 200px;
}
</style>
