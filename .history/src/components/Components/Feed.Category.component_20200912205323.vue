<template>
    <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8"  >
              <Spinner v-if="GET_LOADING_STATUS_GETTER" />
              <div v-else>
                <Feed v-for="(post,index) in GET_ALL_BLOGS" :key="index" :post="post" />
              </div>
              
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

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <!-- /.row -->

  </div>
</template>
<script>
import Spinner from '../Components/Spinner.component';
import moment from 'moment';
import {mapGetters} from 'vuex';
export default {
    props : ['post'],
    data(){
        return {
            route : this.$route.params.category
        }
    },
    methods : {
        ...mapGetters(['GET_ALL_BLOGS']),
        getPostByCategory(){
            this.GET_ALL_BLOGS.filter((post) => {
                return (post.terms.category)
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
        Spinner
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