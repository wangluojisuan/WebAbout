<template>
<div>
  <navigation-link url="http://www.baidu.com">Your Profile</navigation-link>
  <hr>
  <navigation-link url="http://www.baidu.com">123</navigation-link>
  <hr>
  <a href="http://www.baidu.com">baidu</a>

  <base-layout>
    <template v-slot:header>
      <h1>This is header</h1>
    </template>
    <p>This is main</p>
    <template v-slot:footer>
      <h1>This is footer</h1>
      <navigation-link url="http://www.google.com">google</navigation-link>
    </template>
  </base-layout>
  
  <hr><hr>
  <current-user>
    <template v-slot:user-name="userName">
      {{userName.user.firstName}}
    </template>
  </current-user>
  <br>
   <current-user></current-user> 
   <hr>
   <p>通过props来实现子组件调用父组件函数的回调方式</p>
   <props-callback :name="name" :change_name="changeName">
   </props-callback>
</div>
</template>

<script>
import NavigationLink from './NavigationLink.vue';  // 匿名插槽
import BaseLayout from './BaseLayout.vue';      // 具名插槽
import CurrentUser from './CurrentUser.vue';    // 作用域插槽
import PropsCallback from './PropsCallback.vue';

export default {
  data(){
    return{
      name:"father"
    }
  },
  components:
  {
    'navigation-link':NavigationLink,
    'base-layout':BaseLayout,
    'current-user':CurrentUser,
    'props-callback':PropsCallback
  },
  methods:
  {
    changeName(){
      this.name = "changed";
    }
  }
}
</script>

<style>

</style>
