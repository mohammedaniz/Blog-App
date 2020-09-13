<template>
    <span :class='badgeTheme()' class="tag">{{tagName}}</span>

</template>
<script>
export default {
    props : {
        tagName : String,
        theme : String
    },
    methods : {
        badgeTheme(){
            if(this.theme){
                return  `badge ${this.theme} tag`
            }else{
                return "badge badge-primary tag"
            }
            
        }
    }
}
</script>
<style scoped>
.tag{
    font-size: .9rem;

}

</style>