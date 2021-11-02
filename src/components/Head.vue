<template>
  <div class="container">
    <div class="content">
      <div class="main" @click="$router.push({name:'content'})"><a href="">Sinichka</a></div>
    </div>
  </div>
</template>

<script>
// import image from "./src/assets/image.png"
export default {
  name: 'head',
  // data: function () {
  //   return {
  //     image: image
  //   }}
}
</script>

<style scoped>


/*.product-enter-active, .product-leave-active{*/
/*  transition: all .5s;*/

/*}*/
/*.product-enter,.product-leave-to{*/
/*  transform: translateX(50px);*/
/*  opacity: 0;*/
/*}*/

.header{
  width: 100%;
  height: 70px;
  background-color:  burlywood;
}

a{
  text-decoration: none;
  color: gray;
}

*{
  background-color: burlywood;
  opacity: 0.9;
  text-align: center;
  position: relative;
  z-index: 300;
  width: 100%;
}
.content{
  z-index: 5;
  background-color: maroon;
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  height: 80px;
  transition: all 1s ease;
}
/*.content:hover{*/
/*  height: 200px;*/
/*}*/

.container div{
  margin-right: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 30px;
  font-weight:40;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;

}
.container{
    position: fixed;
  top: 0;
  width: 90%;
}

</style>
