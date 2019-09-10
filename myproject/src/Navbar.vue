<template>
    <nav>
        <ul>
            <li><a href="#">Home</a> </li>
            <li><a href="#">Blogs</a> </li>
            <li><a href="#">About</a> </li>
        </ul>
    </nav>
</template>


<script>
export default {
    name : 'Navbar',
    data () {
        return {

        }
    }
}
</script>

<style>
    nav{
        text-align : center;
    }

    nav ul {
        padding : 0
    }

    nav ul li {
        display: inline-block
    }
</style>