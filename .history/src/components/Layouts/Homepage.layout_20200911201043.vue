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
         ...mapActions(['SET_ALL_BLOGS_ACTION'])
    },
    created(){
        axios.get('/v1.1/sites/107403796/posts').then(response => {
           console.log(response.data)
           if(response.data.posts && response.data.posts.length > 0){
               this.posts = response.data.posts;
                this.SET_ALL_BLOGS_ACTION(this.posts);
               this.spinnerStatus = true;
           }
       }).catch((error) => {    
           this.spinnerStatus = true;
       })
    }
    
}
</script>
<style scoped>

</style>