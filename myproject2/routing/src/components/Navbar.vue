<template>
    <nav class="main-nav">
        <ul>
            <li>
                <router-link to = '/'>Home</router-link>
            </li>
            <li>
                <router-link to ='/about'>About</router-link>
            </li>
            <li>
                <router-link to='/profile/:id'>profile</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
    ul {
        padding:0
    }
</style>