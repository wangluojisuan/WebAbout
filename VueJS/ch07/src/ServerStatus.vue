<template>
  <li class="list-group-item">Server #{{ index }}</li>
</template>

<script>
export default {
  data() {
    return {
      index: 0
    };
  },
  props:{
      index:{
          type:Number,
          required:true,
          default:1,
          validtor(value){
              return value<0;
          }
      }
  }
};
</script>

<style scoped>
</style>