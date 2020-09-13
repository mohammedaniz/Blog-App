<template>
    <div>
         <app-header></app-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    
</template>
<script>
import { mapActions } from 'vuex';
import Header from '../Navigations/Header.component';
import Feed from '../Layouts/Feed.Layout';
import axios from '../../axios/axios.config';
export default {
    data(){
        return {
            posts : [],
            spinnerStatus : false
        }
    },
    components : {
        appHeader : Header ,
        appFeed : Feed
    },
    methods : {
         ...mapActions(['SET_ALL_BLOGS_ACTION','SET_BLOG_ERRORS_ACTION','SET_ALL_CATEGORIES_ACTION'])
    },
    created(){
        axios.get('/v1.1/sites/107403796/posts').then(response => {
            console.log('data---> ', response.data)
           if(response.data.posts){
            this.SET_ALL_BLOGS_ACTION(response.data.posts);
           }
       }).catch((error) => {    
           this.SET_BLOG_ERRORS_ACTION(error);
       });

       axios.get('/v1.1/sites/107403796/categories').then(data => {
        // console.log('data =====> ' , data);
           this.SET_ALL_CATEGORIES_ACTION(data.data.categories);
       }).catch(error => {

       })
    }
    
}
</script>
<style scoped>

</style>