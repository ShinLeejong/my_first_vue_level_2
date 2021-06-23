<template>
    <div id="get_blog">
        <h2>블로그 헤드라인</h2>
        <div id="search">
            <input type="text" id="search-text" v-model="search" placeholder="검색할 단어를 입력하세요" />
        </div>
        <div v-for="post in filteredPost" v-bind:key="post.title" class="dropped_blog">
            <h3 v-randomColor>{{post.title | uppercase}}</h3>
        </div>
    </div>
</template>
<script>
import searchMixin from './mixins/searchMixin'

export default {
    data() {
        return {
            posts: [],
            search: ''
        }
    },
    methods: {
        
    },
    // life-cycle method
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            this.posts = data.body.slice(0, 10);
        }).catch(err => console.error(err))
    },
    computed: {

    },
    directives: {
        'randomColor': {
            bind(e, binding, vnode) {
                e.style.color =
                    "#" +
                    Math.random()
                        .toString()
                        .slice(4, 7);
                if (binding[0] in binding || vnode[0] in vnode) {
                // nothing
                }
            }
        }
    },
    // filters: { ~~ } when I want to register filter locally
    mixins: [searchMixin]
}
</script>

<style scoped>
    .dropped_blog {
        max-width: 40vw;
        background: bisque;
        padding: .5rem;
        margin: 0 auto 1rem;
    }

    .dropped_blog > article::first-letter {
        text-transform: uppercase;
    }

    .dropped_blog > article {
        opacity: 0.
    }

    .dropped_blog:last-of-type {
        margin: 0 auto 4rem;
    }

    #search > * {
        margin: 0 .5rem 1rem;
    }

</style>