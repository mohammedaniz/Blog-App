<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/blogs">
        <img src="@/assets/main-logo.png" class="main-logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        
      </div>
    </div>
  </nav>
</template>
<script>
import MainLogo from '../../assets/main-logo.png';
export default {
    components : {
      MainLogo
    }
}
</script>
<style scoped>
.main-logo{
  height: 30px;
  width: auto;
}
</style>