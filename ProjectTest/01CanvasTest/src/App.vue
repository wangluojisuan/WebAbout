<template>
    <app-canvas :canvas_height="1920" :canvas_width="8190">
    </app-canvas>
</template>

<script>
import AppCanvas from './AppCanvas.vue';

export default {
    components:{
        'app-canvas':AppCanvas
    }
}
</script>

<style>

</style>
