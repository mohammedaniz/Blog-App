<template>
    <ul class="list-group mb-4">
        <li class="list-group-item "><span class="list-group-item-title ">Categories</span></li>
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
.list-group-item-title{
    font-size: 1.3rem;
}
.list-group-item{
    font-size: .9rem;
    color: black;
    font-family: 'Patua One', cursive;
}

.list-group-item:hover{
    font-size: .9rem;
    text-decoration: none;
    color: black;
}
</style>
