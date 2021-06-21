<template>
    <div id="content">
        <h3>something</h3>
    </div>
</template>
<script>
export default {
    name: 'ContentTemplate',
    beforeCreate() {
        
    },
    created() {

    },
    beforeMount() {
        console.log("beforeMount fired")
    },
    mounted() {
        // Useful for manipulating DOM
        console.log("Mount fired")
    },
    beforeUpdate() {
        console.log("Hot reloaded")
    },
    updated() {

    },
    destroyed() {
        
    },
}
</script>
<style scoped>
    #content {
        width: 100%;
        height: 60vh;
        background: silver;
    }
</style>