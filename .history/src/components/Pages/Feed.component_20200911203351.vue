<template>
    <div class="card mb-4" >
        <router-link :to="{name: 'Blog',params : {id : post.ID}}" exact="true" >
        <img class="card-img-top" :src="post.post_thumbnail.URL" alt="Card image cap">
        </router-link>
        <div class="card-body">
            <h2 class="card-title">{{post.title}}</h2>
            <p class="card-text" v-html="post.excerpt"></p>           
        </div>
        <div class="card-footer text-muted">
                Posted on {{getTimeline(post.date)}}
            <a href="#">{{post.author.name}}</a>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    props : ['post'],
    methods : {
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        }
    }
}
</script>
<style scoped>
.card-img-top{
    height: 180px;
}
</style>