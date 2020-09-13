<template>
    <ul class="list-group">
        <router-link to="/blogs" v-for="category in GET_ALL_CATEGORY" :key="category.ID"  class="list-group-item">{{category.name}}</router-link>
    </ul>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters(['GET_ALL_CATEGORY'])
    }
}
</script>
<style>
.list-group {
    padding-top: 56px;
}
</style>
