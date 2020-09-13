<template>
    <div class="card mb-4" >
        <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
        <img class="card-img-top" :src="post.post_thumbnail.URL" alt="Card image cap">
        </router-link>
        <div class="card-body">
            <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
                <h2 class="card-title">{{post.title}}</h2>
                <Tag v-for="(tag,index) in getPostTags" tagName="tag" :key="index" />
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
import Tag from './Tag.component';
import moment from 'moment';
export default {
    props : ['post'],
    methods : {
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        }
    },components : {
        Tag
    },computed : {
        getPostTags(){
            if(this.post){
                let tags = Object.keys(this.post.categories)
                return tags;
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

.card-title {
    font-family: 'Patua One', cursive;
    font-size: 1.4rem;
    color: black;
    text-decoration: none !important;
}
.card-title:hover {
    
     font-family: 'Patua One', cursive;
}
p{
    font-size: .9rem;
    line-height: 145%;
    font-family: 'Roboto', cursive;
}
figure {
    width: calc(100% -30%) !important;
    height: 100px !important;
    width: 100px !important;
}
/* img {
    height: 100px !important;
    width: 100px !important;
} */

</style>