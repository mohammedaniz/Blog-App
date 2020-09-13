<template>
    <div class="card mb-4" >
        <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
        <img class="card-img-top" :src="post.post_thumbnail.URL" alt="Card image cap">
        </router-link>
        <div class="card-body">
            <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
                <h2 class="card-title">{{post.title}}</h2>
            </router-link>
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
    height: auto;
    width: 100%;
}
p {
    font-size: .8rem !important;
    line-height: 145%;
    font-family: Arial, Helvetica, sans-serif;
}
.card-title {
    font-family: 'Patua One', cursive;
    font-size: 1.4rem;
}

</style>