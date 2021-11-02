import VueRouter from 'vue-router'
import Message from "@/pages/Message";
import Content from "@/pages/Content";
import Posts from "@/pages/Posts";

export default new VueRouter({
    mode:'history',
    routes:[{
        path:'/',
        component:Content,
        name:'content'
    },{
        path: '/message',
        component: Message,
        name: 'message'
    },{
        path: '/posts',
        component: Posts,
        name:'posts'
    }

    ]

})
