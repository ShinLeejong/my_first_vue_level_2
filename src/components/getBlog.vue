<template>
    <div id="get_blog">
        <h2>불러온 포스팅</h2>
        <div id="search">
            <input type="text" id="search-text" v-model="search" placeholder="검색할 단어를 입력하세요" />
            <button v-on:click="onSearchClick">검색</button>            
        </div>
        <div v-for="post in posts" v-bind:key="post.title" class="dropped_blog">
            <h3 v-randomColor>{{post.title | uppercase}}</h3>
            <article>{{post.body | slice}}</article>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: [],
            originalposts: [],
            search: ''
        }
    },
    methods: {
        onSearchClick: function() {
            if(this.search === '') this.posts = this.originalposts;
            this.posts = this.posts.filter(e => e.title.includes(this.search));
        }
    },
    // life-cycle method
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            this.posts = data.body.slice(0, 10);
            this.originalposts = this.posts;
        }).catch(err => console.error(err))
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