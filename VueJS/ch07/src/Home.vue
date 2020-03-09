<template>
    <div>
    <div id="first-page">
      <h1>First</h1>
      <h1>{{ title }}</h1>
      <button @click="clickMe">Click Me</button>
      <hr>
    </div>
    <div id="second-page">
      <h1>Sencond</h1>
      <h1>{{title}}</h1>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
    name:'first-page',
  data() {
    return {
      title : 'this is title'
    };
  },
  methods:{
    clickMe(){
      this.title="Clicked";
    }
  }
}
</script>

<style scoped>
    h1 {
  color:red;
}
</style>