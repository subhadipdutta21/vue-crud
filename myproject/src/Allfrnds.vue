<template>
    <div id="all">
        <h1>All friends</h1>
        <div v-for="(f,index) in friends" :key = "index">
            <ul @click="unfriend(f.name)">
            <li>
                {{f.name}}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Allfrnds',
    props : ['friends'],
    data() {
        return {

        }
    },
    methods : {
        unfriend(name) {
            console.log('here')
            this.$emit('delete',{name})
        }
    }
}
</script>