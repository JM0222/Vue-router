<template>
<v-layout>
    <div>
        <h1>Users</h1>
        <p>유저를검색해주세욘</p>
    </div>
    <v-flex xs12>
        <v-text-field
        v-model="userId" 
        label="유저번호입력해주세욘">
        </v-text-field>
        <v-btn @click="$router.push({name:'users-detail', params:
        {id:userId}})">검색</v-btn>
    </v-flex>
    <v-flex xs12>
        <router-view></router-view>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    data(){
        return{
            userId:null
        }
    }
}
</script>
