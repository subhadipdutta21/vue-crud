<template>
    <div class="navbar-fixed">
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Smoothies</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to='/addsmoothie'>
            <i class="material-icons" id='add-icon'>add</i>
        </router-link>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
    .brand-logo {
        margin-left: 30px
    }  
    #add-icon {
        padding-right: 20px 
    }
    
</style>