import content from './Content.vue'
import blogs from './blogs.vue'
import getBlog from './getBlog.vue'
import singleBlog from './singleBlog.vue'

export default [
    { 
        path: '/',
        component: content
    },
    {
        path: '/blog',
        component: blogs
    },
    {
        path: '/blog/:id',
        component: singleBlog
    },
    {
        path: '/getBlog',
        component: getBlog
    }
]