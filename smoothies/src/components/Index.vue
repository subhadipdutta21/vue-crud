<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key='smoothie.id'>
      <i class="material-icons delete" @click='deleteSmoothie(smoothie.id)'>delete</i>
      <div class="class-content">
        <h2 class="indigo-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient,index) in smoothie.ingredients" :key='index'>
            <span class="chip">{{ingredient}}</span>
          </li>
        </ul>
        <span class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{name: 'EditSmoothie', params:{smoothie_slug: smoothie.slug}}">
            <i class="material-icons">edit</i>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      smoothies : []

    }
  },
  methods : {
    deleteSmoothie(id) {
      // console.log(id);
      db.collection('smoothies').doc(id).delete().then(()=>{
        this.smoothies = this.smoothies.filter(f=>{
        return f.id != id 
      })
    })
    }
  },
  created() {
    db.collection('smoothies').get().then(data=>{
      data.forEach(d=> {
        let smoothie = d.data()
        smoothie.id = d.id
        this.smoothies.push(smoothie)
      })
    }).catch(err=>console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .indigo-text{
    padding-left: 20px;
    text-align: center
  }

  .index{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px
  }

  .index .ingredients li{
    margin-left: 10px;
    display: inline-block
    
  }

  .index .delete{
    position:absolute;
    padding-left: 85%;
    cursor: pointer;
  }

</style>
