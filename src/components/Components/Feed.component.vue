<template>
    <div class="card mb-4" >
        <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
        <img class="card-img-top" :src="post.post_thumbnail.URL" alt="Card image cap">
        </router-link>
        <div class="card-body">
            <router-link :to="{name: 'Blog',params : {id : post.ID}}" >
                <h2 class="card-title">{{post.title}}</h2>
                
            </router-link>
            <router-link class="tag-link" v-for="(tag,index)  in getPostTags" :key="index" :to="{name: 'BLOGS_BY_CATEGORYNAME',params : {category :tag }}" >
                <Tag  theme="badge-primary" :tagName="tag"  />
            </router-link>
            <p class="card-text" v-html="post.excerpt"></p>           
        </div>
        <div class="card-footer text-muted">
                
            <span class="blog-author" >Posted By <strong>{{post.author.name}}.</strong> 
                <span class="blog-posted__date">( {{getTimeline(post.date)}} )</span>
            </span>
            
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
    text-decoration: none !important;
     font-family: 'Patua One', cursive;
}

/* img {
    height: 100px !important;
    width: 100px !important;
} */
.tag-link:not(:last-child){
    margin-left: 5px;;
}
.blog-author{
    font-size: .9rem;
    color: black;
    font-family: 'Roboto', 'sans-serif';
    margin-right: 2px;
}
.blog-posted__date{
    font-size: .8rem;
}
</style>