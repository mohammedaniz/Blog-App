<template>
    <div class="container">

    <div class="row">

      <!-- Post Content Column -->
      <div class="col-lg-8">

        <!-- Title -->
        <h1 class="mt-4">{{blog.title}}</h1>

        <!-- Author -->
        <p class="lead">
          by
          <a href="#">Start Bootstrap</a>
        </p>

        <hr>

        <!-- Date/Time -->
        <p>Posted on {{getDateFormatted(blog.date)}}</p>

        <hr>

        <!-- Preview Image -->
        <img class="img-fluid rounded" :src="blog.featured_image" alt="" />

        <hr>

        <!-- Post Content -->
        <p v-html="blog.content"></p>
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
import moment from 'moment';
import { mapGetters } from 'vuex';
import CategoryComponent from './Category.component';
export default {
    data(){
        return {
            id :this.$route.params.id
        }
    },
    methods : {
      getDateFormatted(date){
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
    },
    watch : {
        '$route'(to,from){
            this.id = to.params.id
        }
    },
    computed :{
        ...mapGetters(['GET_A_BLOG_BY_ID']),
        blog(){
            return this.GET_A_BLOG_BY_ID(this.id);
        }
        
    },components : {
      CategoryComponent
    }

}
</script>
<style scoped>
figure img{
  width: 500px !important;
  height: 250px;
}
h3 {
  font-size: 1.4rem;
  font-weight: 800 !important;
}
</style>