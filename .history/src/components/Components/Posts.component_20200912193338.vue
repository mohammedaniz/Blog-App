<template>
    <ul class="list-group">
        <router-link to="/blogs" v-for="category in posts" :key="category.ID"  class="list-group-item">{{category.name}}</router-link>
    </ul>
</template>
<script>
export default {
    props : ['posts']
}
</script>
<style scoped>

</style>