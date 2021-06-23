<template>
    <div>
        <h1 v->{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(data => {
            console.log(data);
            console.log(data.body);
        })
    }
}
</script>
<style scoped>
    div {
        max-width: 30rem;
        margin: 0 auto;
    }
    
</style>