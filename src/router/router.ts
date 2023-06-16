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
        { path: '/Toys_Store/', component: Main },
        { path: '/Toys_Store/Catalog', component: Catalog },
        { path: '/Toys_Store/LogRoom', component: LogRoom },
        { path: '/Toys_Store/UsersRoom', component: UsersRoom },
        { path: '/Toys_Store/AboutShop', component: AboutShop },
        { path: '/Toys_Store/Blog', component: Blog },
        { path: '/Toys_Store/BlogPostId/:id', component: BlogPostId },
        { path: '/Toys_Store/ProductId/:id', component: ProductId },
        { path: '/Toys_Store/Corf', component: Corf },
        { path: '/Toys_Store/Search', component: Search },
    ],
})

export default router;