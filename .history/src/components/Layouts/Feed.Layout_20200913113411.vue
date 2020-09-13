<template>
    <div class="container">

    <div class="row">

      <!-- Blog Entries Column -->
      <div class="col-md-8"  >
              <Spinner v-if="GET_LOADING_STATUS_GETTER" />
              <div v-else>
                <Feed v-for="(post,index) in GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_GETTER" :key="index" :post="post" />
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
        <CategoryComponent />
      </div>

    </div>
    <!-- /.row -->

  </div>
</template>
<script>
import Feed from '../../components/Components/Feed.component';
import axios from '../../axios/axios.config';
import moment from 'moment';
import Spinner from '../Components/Spinner.component';
import {mapGetters} from 'vuex';
import LoadingSpinner from '../Components/Spinner.component';
import CategoryComponent from '../Components/Category.component';
export default {
    computed : {
      ...mapGetters(['GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER','GET_LOADING_STATUS_GETTER'])
    },
    data(){
        return{
            spinnerStatus : true,
            posts : this.GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER
        }
    },methods : {
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        }
    },components : {
        Spinner,
        Feed,
        CategoryComponent
    },mounted(){
        this.spinnerStatus = false;
        // console.log('stat' , this.GET_ALL_BLOGS)
       
    }
}
</script>
<style scoped>

</style>