<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li is="app-server-status" v-for="index in 5" :key="index" :index="index"></li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
        <app-slot-test>这是一个Slot</app-slot-test>
    </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  import SlotTest from './SlotTest.vue';

  export default{
    components:{
      'app-server-status':ServerStatus,
      'app-slot-test':SlotTest
    }
  }
</script>

<style>

</style>
