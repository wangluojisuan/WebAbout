<template>
<!--这是一个匿名插槽的示例-->
    <a :href="url">
        <slot>content</slot>
    </a>
</template>

<script>
export default {
    props:['url']
}
</script>

<style scoped>

</style>