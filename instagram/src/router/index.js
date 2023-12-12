import { createRouter, createWebHistory } from "vue-router";
import SearchInstagram from '@/components/SearchInstagram.vue'
import PostInstagram from '@/components/PostInstagram.vue'
import UploadInstagram from '@/components/UploadInstagram.vue'
import ProfileInstagram from '@/components/ProfileInstagram.vue'
import ActivityInstagram from '@/components/ActivityInstagram.vue'
import RequesInstagram from '@/components/RequestsInstagram.vue'
const routes=[
    {
        path:'/search',
        name: 'search',
        component: SearchInstagram
    },
    {
        path:'/postInstagram',
        name: 'postInstagram',
        component: PostInstagram
    },
    {
        path:'/upload',
        name: 'upload',
        component: UploadInstagram

    },
    {
      path:'/profile',
      name: 'profile',
      component: ProfileInstagram 
    },
    {
      path:'/activity',
      name: 'activity',
      component: ActivityInstagram

    },
    {
        path:'/request',
        name: 'request',
        component: RequesInstagram
  
      }


]
const router= createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router