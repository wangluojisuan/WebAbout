<template>
    <!-- 作用域插槽 -->
    <span>
        <slot name="user-name" :user="user">{{user.lastName}}</slot>
    </span>
</template>

<script>
export default {
    data(){
        return {
            user:{
                firstName:'Jian',
                lastName:'Wang'
            }
        }
    }
}
</script>

<style scoped>

</style>