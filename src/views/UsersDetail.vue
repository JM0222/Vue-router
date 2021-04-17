<template>
    <div>
        <p>usersdetail{{userId}}</p> 
        <v-btn @click="edit">edit</v-btn>
    </div>

</template>

<script>

export default {
    computed:{
        userId(){
            return this.$route.params.id
        }
    },
    methods:{
        edit() {
            // this.$router.push({name: 'users-edit'})
            this.$router.push({path: `${this.userId}/edit`})

        }
    }
}

</script>
