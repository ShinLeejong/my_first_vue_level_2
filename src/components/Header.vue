<template>
    <header>
        <h2>
            {{headerMessage}}
            <br />
            <button v-on:click.prevent="take_a_bus('header')">
                나는 헤더 버튼
            </button>
            <slot name="additional_div"></slot>
            <nav>
                <ul>
                    <li>
                        <router-link to="/" exact>
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/blog" exact>
                            Blog
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/getBlog" exact>
                            getBlog
                        </router-link>
                    </li>
                </ul>
            </nav>
        </h2>
    </header>
</template>
<script>
import { someEventBus } from '../main.js'

export default {
    name: 'HeaderTemplate',
    data: function () {
        return {
            headerMessage: "신이종의 헤더"
        }
    },
    methods: {
        take_a_bus: function (message) {
            this.headerMessage = "내가 눌렀다!"
            someEventBus.$emit('changeMessage', message)
        }
    },
    created() {
        someEventBus.$on('changeMessage', message => {
            if(message === 'header') return;
            this.headerMessage = message + "에서 눌린 이벤트 버스"
        })
    }
}
</script>
<style scoped>
    header {
        position: relative;
        text-align: center;
        width: 100vw;
        height: 20vh;
        background: cadetblue;
        color: #000088;
    }

    h2 {
        margin: unset;
    }

    nav {
        position: relative;
        height: 5vh;
    }

    li {
        display: inline-block;
        padding: 0 3rem;
        font-size: 1.25rem;
    }

</style>