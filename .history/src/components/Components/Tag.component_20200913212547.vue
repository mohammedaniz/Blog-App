<template>
    <span :class="`${badgeTheme()} mb-2 tag`">{{tagName}}</span>
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
                return  `badge ${this.theme}`
            }else{
                return "badge badge-primary"
            }
            
        }
    }
}
</script>
<style scoped>
.badge{
    font-size: .9rem;
    display: inline-block;
}
.badge:not(:last-child){
    margin-right: 10px;
    
}
</style>