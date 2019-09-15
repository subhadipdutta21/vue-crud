<template>
    <div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Geo-app</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Signup</a></li>
            <li><a href="badges.html">Login</a></li>
        </ul>
        </div>
    </nav>    
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {

        }
    },
}
</script>

<style >
 .nav-wrapper .brand-logo{
     float: left;
     position: inherit;
     margin-left: 4%

 }
</style>