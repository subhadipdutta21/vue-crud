<template>
  <div id="app">
  
    <h1>{{ msg }}</h1>
    <Title />
    <Navbar />  
    <Onlinefrnds :friends = "data"/>
    <Allfrnds :friends = 'data' @delete='unfriend' />    
    <blogs />    
  </div>
  
</template>
<script>
import Navbar from "./Navbar";
import Title from "./Title";
import Onlinefrnds from "./Onlinefrnds";
import Allfrnds from "./Allfrnds";
import blogs from "./blogs";
export default {
  name: 'app',
  components: {
    Navbar,
    Title,
    Onlinefrnds,
    Allfrnds,
    blogs
    
  },
  data () {
    return {
      msg: 'hey ya this is first vue app :-)',
      data : [
        {name :'subh',online : true},
        {name :'satya',online : true},
        {name :'anii',online : false},
        {name :'sourav',online : false},
        {name :'mohon',online : true}
      ]
    }
  },
  methods : {
    unfriend(payload) {
      console.log(payload)
      this.data = this.data.filter(f => {
        return f.name != payload.name
      })
    }
  }
}
</script>

<style>
  h1{
    color: gray;
    text-align:center;
  }
</style>
