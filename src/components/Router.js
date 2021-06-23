import content from './Content.vue'
import blogs from './blogs.vue'
import getBlog from './getBlog.vue'

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
        path: '/getBlog',
        component: getBlog
    }
]