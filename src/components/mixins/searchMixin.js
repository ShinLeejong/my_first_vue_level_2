export default {
    computed: {
        filteredPost: function() {
            return this.posts.filter(post => post.title.match(this.search) )
        }
    }
}