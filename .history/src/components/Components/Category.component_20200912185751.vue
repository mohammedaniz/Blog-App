<template>
    <ul class="list-group">
        <router-link to="/blogs" v-for="category in categories" :key="category.ID" active-class="active" class="list-group-item"></router-link>
    </ul>
</template>

<script>
export default {
    props : ['categories']
}
</script>
<style>
.list-group {
    padding-top: 56px;
}
</style>
