import { createRouter, createWebHistory } from "vue-router";
import SearchInstagram from '@/components/SearchInstagram.vue'
import PostInstagram from '@/components/PostInstagram.vue'
import UploadInstagram from '@/components/UploadInstagram.vue'
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

    }


]
const router= createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router