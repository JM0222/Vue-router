<template>
    <div>
        <h1>usersedit</h1>
        {{userId}}
    </div>
</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },

}

</script>