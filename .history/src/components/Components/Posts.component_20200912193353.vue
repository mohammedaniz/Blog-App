<template>
    <ul class="list-group">
        <router-link to="/blogs" v-for="post in posts" :key="post.ID"  class="list-group-item">{{post.name}}</router-link>
    </ul>
</template>
<script>
export default {
    props : ['posts']
}
</script>
<style scoped>

</style>