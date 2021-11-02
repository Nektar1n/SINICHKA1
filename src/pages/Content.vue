<template>
  <div class="hello">
    <img class="back" :src="gif" alt="gif">
      <img class="sinichka" :src="image" alt="sinichka">
<!--    <img class="sinichka1" :src="image" alt="sinichka1">-->
    <div class="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus asperiores cum deleniti dolore dolores expedita iste, minus molestiae, molestias nemo nisi non nostrum rem, sapiente sint vel voluptates voluptatum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus officiis temporibus? Ad autem cum deserunt dolor enim laboriosam libero maxime nobis non, quaerat quasi tempore velit, voluptatum. Excepturi, maxime.</p>
  </div>
  </div>
</template>

<script>

import image from "@/assets/синичка.png"
import gif from "@/assets/1468386838_LionS_Song_gif_valley.gif";

export default {
  name: 'Content',
  props: {
    msg: String
  },data:function (){
    return{ image:image,
      gif:gif}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: relative;
}
.sinichka{
  position: sticky;
  z-index: 301;
  top: 0;
  left: 10%;
}
/*.sinichka1{*/
/*  !*top: 0;*!*/
/*  !*margin-left: 95%;*!*/
/*  transform: scale(-1, 1);*/
/*  margin-left: 85%;*/
/*  width: 90px;*/
/*  position: sticky;*/

/*}*/
.colour{
  position: relative;
  height: 2000px;
}
.text{
  padding-left: 10px;
  background-color: antiquewhite;


}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p{
  font-size: 30px;
}

</style>
