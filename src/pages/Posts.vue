<template>
  <div>
      <form @submit.prevent>
       <div class="forms"> <h4>Create new post</h4>
        <input @input="title=$event.target.value" :value="title" class="input" type="text" placeholder="Name">
        <input @input="body=$event.target.value" :value="body" class="input" type="text" placeholder="Description">
        <button class="btn" @click="createPost">Create</button>
  </div>
      </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Name:</strong>{{post.title}}</div>
      <div><strong>Description</strong>{{post.body}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Posts',
  data(){
    return{
      posts:[
        {id:1,title:'ger',body:'jjjjjojojiojoj'},
        {id:1,title:'ger',body:'jjjjjojojiojoj'},
        {id:1,title:'ger',body:'jjjjjojojiojoj'},
        {id:1,title:'ger',body:'jjjjjojojiojoj'}
      ],title:'',
      body:''
    }
  },methods:{
    createPost(){
      const newPost={
        id:Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost)
      this.title='';
      this.body=''
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forms{
  margin-left: 1%;
}
.input{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post{
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
  margin-left: 2%;
  margin-right: 5%;
}

.btn{
  margin-top: 10px;
  width: 60px;
  height: 30px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}





</style>
