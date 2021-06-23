<template>
    <div id="content">
        <component v-bind:is="component"></component>
        <!-- Dynamic Components -->
        <button v-on:click="component = 'first_component'">First Component</button>
        <button v-on:click="component = 'second_component'">Second Component</button>
        <ninjaBlog />
        <getBlog />
        <blogs />
    </div>
</template>
<script>
import firstComponent from "./firstComponent.vue"
import secondComponent from "./secondComponent.vue"
import ninjaBlog from "./ninjaBlog.vue"
import getBlog from "./getBlog.vue"
import blogs from './blogs.vue'

export default {
    name: 'ContentTemplate',
    components: {
        'first_component': firstComponent,
        'second_component': secondComponent,
        ninjaBlog,
        getBlog,
        blogs
    },
    data: function () {
        return {
            component: 'first_component'
        }
    }
    /* Life-cycle methods */
    // beforeCreate() {
        
    // },
    // created() {

    // },
    // beforeMount() {
    //     console.log("beforeMount fired")
    // },
    // mounted() {
    //     // Useful for manipulating DOM
    //     console.log("Mount fired")
    // },
    // beforeUpdate() {
    //     console.log("Hot reloaded")
    // },
    // updated() {

    // },
    // destroyed() {
        
    // },
}
</script>
<style scoped>
    #content {
        width: 100%;
        background: silver;
        overflow: auto;
    }

    button {
        margin: 0 .5rem;
    }
</style>