<template>
    <div class="container">
    <div class="row">
      <div class="col-md-6"  >
        <Spinner v-if="GET_LOADING_STATUS_GETTER" />
        <div v-else>
          <Feed v-for="(post,index) in GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER" :key="index" :post="post" />
        </div>
      </div>
      <div class="col-md-4">
          <CategoryComponent />
      </div>
    </div>
  </div>
</template>
<script>
import Feed from '../../components/Components/Feed.component';
import axios from '../../axios/axios.config';
import moment from 'moment';
import Spinner from '../Components/Spinner.component';
import {mapGetters,mapActions} from 'vuex';
import LoadingSpinner from '../Components/Spinner.component';
import CategoryComponent from '../Components/Category.component';
export default {
    computed : {
      ...mapGetters(['GET_RECORDS_VALUE_GETTER','GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER','GET_LOADING_STATUS_GETTER'])
    },
    data(){
        return{
            spinnerStatus : true,
            posts : this.GET_ALL_BLOGS_SORTED_BY_CREATED_DATE_AND_PAGINATED_GETTER
        }
    },methods : {
      ...mapActions(['SET_RECORDS_VALUE_ACTION']),
        getTimeline(time){
            if(time){
                return moment(time, "YYYYMMDD").fromNow();
            }
        },
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
    },components : {
        Spinner,
        Feed,
        CategoryComponent
    },mounted(){
        this.spinnerStatus = false;
        // console.log('stat' , this.GET_ALL_BLOGS)
        this.loadItemOnScroolBottom();
       
    }
}
</script>
<style scoped>

</style>