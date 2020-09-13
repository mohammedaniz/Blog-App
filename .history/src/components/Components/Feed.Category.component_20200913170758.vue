<template>
    <div class="container">
    <div class="row">
        <div class="col-md-8"  >
            <div v-if="getPostByCategory.length <= 0">
                <p>Empty</p>
            </div>
            <div v-else>
                 <Feed v-for="(post,index) in getPostByCategory" :key="index" :post="post" />
            </div>
           
        </div>
        <div class="col-md-4">
          <CategoryComponent />
        </div>
    </div>
  </div>
</template>
<script>
import CategoryComponent from '../Components/Category.component';
import Spinner from '../Components/Spinner.component';
import moment from 'moment';
import Feed from './Feed.component';
import {mapActions, mapGetters} from 'vuex';
export default {
    props : ['post'],
    data(){
        return {
            newPosts : [],
            route : this.$route.params.category
        }
    },
    computed : {
        ...mapGetters(['GET_RECORDS_VALUE_GETTER','GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER']),
        getPostByCategory(){
             return this.GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER.filter((post) => {
                let categoriesNames = Object.keys(post.terms.category)
                console.log('test ', categoriesNames.includes(this.route));
                return categoriesNames.includes(this.route);
            }).sort((post1,post2) =>{
                return new Date(post2.date) - new Date(post1.date);
            });
        },
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        },

    },watch : {
        '$route'(to,from){
            this.route = to.params.category
        }
    },components : {
        Spinner,
        CategoryComponent,
        Feed
    },mounted(){
        this.getPostByCategory,
        this.loadItemOnScroolBottom();
    },methods : {
        ...mapActions(['SET_RECORDS_VALUE_ACTION']),
        loadItemOnScroolBottom(){
          window.onscroll = () => {
            let bottom = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

            if (bottom) {
              let currentRecords = this.GET_RECORDS_VALUE_GETTER;
              let newRecords = currentRecords + 2;
              this.SET_RECORDS_VALUE_ACTION(newRecords);
            }
          };
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

</style>