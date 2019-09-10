<template>
    <div id='online'>
        <h1>online friends</h1>
        <div v-for="(f,index) in friends" :key = "index">
            <ul>
            <li v-if="f.online">
                {{ f.name }}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Onlinefrnds',
    props : ['friends'],
    data() {
        return {
        }
    }
}
</script>
<style>
    div {
        text-align: left
    }
</style>