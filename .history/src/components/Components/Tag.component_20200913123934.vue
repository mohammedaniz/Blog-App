<template>
    <span :class="badgeTheme">{{tagName}}</span>
</template>
<script>
export default {
    props : {
        tagName : String,
        theme : String
    },
    methods : {
        badgeTheme(){
            return this.theme + "badge badge-secondary"
        }
    }
}
</script>
<style scoped>

</style>