<template>
    <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8"  >
             <Feed v-for="(post,index) in newPosts" :key="index" :post="post" />
            
              
                <ul class="pagination justify-content-center mb-4">
                <li class="page-item">
                    <a class="page-link" href="#">&larr; Older</a>
                </li>
                <li class="page-item disabled">
                    <a class="page-link" href="#">Newer &rarr;</a>
                </li>
                </ul>
          
        <!-- Blog Post -->
        

       

        <!-- Pagination -->
        

      </div>
      

      <!-- Sidebar Widgets Column -->
      <div class="col-md-4">
          <CategoryComponent />

      </div>

    </div>
    <!-- /.row -->

  </div>
</template>
<script>
import CategoryComponent from '../Components/Category.component';
import Spinner from '../Components/Spinner.component';
import moment from 'moment';
import {mapGetters} from 'vuex';
export default {
    props : ['post'],
    data(){
        return {
            newPosts : [],
            route : this.$route.params.category
        }
    },
    computed : {
        ...mapGetters(['GET_ALL_BLOGS']),
        getPostByCategory(){
             this.GET_ALL_BLOGS.filter((post) => {
                let categoriesNames = Object.keys(post.terms.category)
                 return (categoriesNames.indexOf(this.route) > -1)
            })
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
        CategoryComponent
    },mounted(){
        this.getPostByCategory
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