<template>
    <ul class="list-group mb-4">
        <router-link :to="{name :'BLOGS_BY_CATEGORYNAME',params : {category :category.name } }" v-for="category in GET_ALL_CATEGORY" :key="category.ID"  class="list-group-item">{{category.name}}</router-link>
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
.list-group-item{
    border: none;
    font-size: .9rem;
}
</style>
