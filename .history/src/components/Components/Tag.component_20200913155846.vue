<template>
    <span class="badge badge-secondary">{{tagName}}</span>
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
                return this.theme + "badge badge-secondary"
            }else{
                return "badge badge-primary"
            }
            
        }
    }
}
</script>
<style scoped>
.badge:not(:first-child){
    margin-left: 5px;
}
</style>