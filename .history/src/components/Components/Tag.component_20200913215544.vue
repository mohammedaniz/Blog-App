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
                return  `badge ${this.theme} mb-2 tag`
            }else{
                return "badge badge-primary mb-2 tag"
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