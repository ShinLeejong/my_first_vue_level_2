<template>
  <div id="app">
    <Header>
      <div slot="additional_div">
        <h3>{{paragraph}}</h3>
      </div>
    </Header>
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
        paragraph: "This is a paragraph from parent component!"
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
  color: black;
  /* default setting by Vue above */

  display: flex;
  flex-flow: column;
  height: 100%;
}

body {
  margin: unset;
}

a {
  color: bisque;
  text-decoration: unset;
}

</style>
