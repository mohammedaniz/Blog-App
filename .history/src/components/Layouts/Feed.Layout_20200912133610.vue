<template>
    <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8"  >

              <Feed v-for="(post,index) in GET_ALL_BLOGS" :key="index" :post="post" />
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
import Feed from '../../components/Pages/Feed.component';
import axios from '../../axios/axios.config';
import moment from 'moment';
import Spinner from '../Pages/Spinner.component';
import {mapGetters} from 'vuex';
export default {
    methods : {
      
    },
    data(){
        return{
            spinnerStatus : true,
            posts : []
        }
    },methods : {
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        }
    },components : {
        Spinner,
        Feed
    },mounted(){
        this.spinnerStatus = false;
        console.log('stat' , this.$store.getters)
        this.posts =  this.$store.getters.GET_ALL_BLOGS;
    }
}
</script>
<style scoped>

</style>