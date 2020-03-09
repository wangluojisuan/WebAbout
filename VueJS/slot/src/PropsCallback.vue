<template>
    <button @click="change_name()">
        {{name}}
    </button>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default:'default'
        },
        'change_name':Function
    }
}
</script>

<style scoped>

</style>