<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data: function () {
      return {
        headerMessage: '신이종의 헤더',
        footerMessage: '신이종의 푸터'
      }
    },
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* default setting by Vue above */

  display: flex;
  flex-flow: column;
  height: 100%;
}

body {
  margin: unset;
}
</style>
