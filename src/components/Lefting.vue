<template>
  <div class="sidenav">
    <div @click="$router.push({name:'content'})"><a href="">Main</a></div>
    <div @click="$router.push({name:'message'})"><a href="">Message</a></div>
    <div @click="$router.push({name:'posts'})"><a href="">Posts</a></div>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <div id="cur"  @click="show=!show"><a>About</a></div>
    <transition name="fade" class="f"><div class="about" v-if="show">
      <!--      <button class="escape">escape</button>-->
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis esse, eum in ipsum itaque libero optio recusandae vitae voluptates. Autem cum eligendi est explicabo ipsa maxime pariatur, qui sit.
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'lefting',
  data() {
    return {
      show: false
    }
  },
  methods:{
    showWindow: function (){
        const sh=document.querySelector('.about')
      sh.style.display='block'

    },nowWindow: function (){
      const sh=document.querySelector('.about')
      sh.style.display='none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#cur{
  cursor: pointer;
}

/*.fade-enter-active, .fade-leave-active {*/
/*  transition: opacity .5s;*/
/*}*/
/*.fade-enter, .fade-leave-to {*/
/*  opacity: 0;*/
/*}*/

.fade-enter-active{
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.fade-leave-active{
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateY(10px);
}

.escape{
  margin-left: 300px;
}
.f{
  opacity: 1;
}
.about{
  background-color: coral;
  width: 400px;
  height: 400px;
  position: fixed;
  margin-left: 150px;
  z-index: 80;
  top: 200px;
  transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  /*transition: all 2s ease;*/
  /*opacity: 0.1;*/
  /*display: none;*/

}

.about:hover{
  width: 500px;
  height: 500px;
}
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 5; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
.sidenav a:hover {
  color: #f1f1f1;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
