<template>
    <div id="content">
        <component v-bind:is="component"></component>
        <!-- Dynamic Components -->
        <button v-on:click="component = 'first_component'">First Component</button>
        <button v-on:click="component = 'second_component'">Second Component</button>
    </div>
</template>
<script>
import firstComponent from "./firstComponent.vue"
import secondComponent from "./secondComponent.vue"

export default {
    name: 'ContentTemplate',
    components: {
        'first_component': firstComponent,
        'second_component': secondComponent
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
        height: 60vh;
        background: silver;
    }

    button {
        margin: 0 .5rem;
    }
</style>