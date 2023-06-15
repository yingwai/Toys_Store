import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main.vue"
import Catalog from "@/pages/Catalog.vue"
import UsersRoom from "@/pages/UsersRoom.vue"
import LogRoom from "@/pages/LogRoom.vue"
import AboutShop from "@/pages/AboutShop.vue"
import Blog from "@/pages/Blog.vue"
import BlogPostId from "@/pages/BlogPostId.vue"
import ProductId from "@/pages/ProductId.vue"
import Corf from "@/pages/Corf.vue"
import Search from "@/pages/Search.vue"

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