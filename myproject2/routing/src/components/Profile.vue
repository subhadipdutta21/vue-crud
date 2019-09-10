<template>
    <div>
    <h1>
        {{msg}} {{id}}
    </h1>
    <button @click='goHome'>Go Home</button>
    </div>
</template>

<script>
export default {
    name : 'Profile',
    data () {
        return {
            msg : 'welcome to profile of ',
            id : this.$route.params.id
        }
    },
    methods:{
        updateId() {
            this.id = this.$route.params.id
        },

        goHome() {
            this.$router.push({ path : '/' })
        }
    },
    watch : {
        $route :'updateId'
    }
}
</script>

<style>

</style>