<template>
    <div id="get_blog">
        <h2>불러온 포스팅</h2>
        <div v-for="post in posts" v-bind:key="post" class="dropped_blog">
            <h3 v-randomColor>{{post.title | uppercase}}</h3>
            <article>{{post.body | slice}}</article>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {

    },
    // life-cycle method
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            this.posts = data.body.slice(0, 10);
            console.log(this.posts);
        }).catch(err => console.error(err))
    }
}
</script>
<style scoped>
    .dropped_blog {
        margin: 0 auto;
        max-width: 40vw;
        background: bisque;
        padding: .5rem;
    }

    .dropped_blog > article::first-letter {
        text-transform: uppercase;
    }

    .dropped_blog > article {
        opacity: 0.
    }

</style>