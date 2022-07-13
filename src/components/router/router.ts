import { createRouter, createWebHistory } from "vue-router"
import Main from "@/components/pages/Main.vue"
import Catalog from "@/components/pages/Catalog.vue"
import UsersRoom from "@/components/pages/UsersRoom.vue"
import LogRoom from "@/components/pages/LogRoom.vue"
import AboutShop from "@/components/pages/AboutShop.vue"
import Blog from "@/components/pages/Blog.vue"
import BlogPostId from "@/components/pages/BlogPostId.vue"
import ProductId from "@/components/pages/ProductId.vue"
import Corf from "@/components/pages/Corf.vue"
import Search from "@/components/pages/Search.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Main },
        { path: '/Catalog', component: Catalog },
        { path: '/LogRoom', component: LogRoom },
        { path: '/UsersRoom', component: UsersRoom },
        { path: '/AboutShop', component: AboutShop },
        { path: '/Blog', component: Blog },
        { path: '/BlogPostId/:id', component: BlogPostId },
        { path: '/ProductId/:id', component: ProductId },
        { path: '/Corf', component: Corf },
        { path: '/Search', component: Search },
    ],
})

export default router;