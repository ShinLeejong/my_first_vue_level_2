<template>
    <footer>
        <h2>
            {{footerMessage}}
            <br />
            <button v-on:click.prevent="take_a_bus('footer')">
                나는 푸터 버튼
                </button>
        </h2>
    </footer>
</template>
<script>
import { someEventBus } from '../main.js'

export default {
    name: 'FooterTemplate',
    data: function () {
        return {
            footerMessage: "신이종의 푸터"
        }
    },
    methods: {
        take_a_bus: function (message) {
            this.footerMessage = '내가 눌렀지롱~'
            someEventBus.$emit('changeMessage', message)
        }
    },
    created() {
        someEventBus.$on('changeMessage', message => {
            if(message === 'footer') return;
            this.footerMessage = message + "에서 눌린 이벤트 버스"
        })
    }
}
</script>
<style scoped>
    footer {
        display: flex;
        position: relative;
        text-align: center;
        width: 100vw;
        height: 20vh;
        background: darkcyan;
        color: honeydew;
        flex-direction: column-reverse;
    }

</style>