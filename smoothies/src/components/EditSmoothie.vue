<template>
<div class="edit-smoothie" v-if='smoothie'>
    <h1>Edit {{smoothie.title}}</h1>
      <form @submit.prevent='editSmoothie'>
            <div class="field title">
                <label for='title'>Smoothie title:</label>
                <input type="text" name="title" v-model="smoothie.title">
            </div>
            <div v-for="(ing,index) in smoothie.ingredients" :key='index'>
                <label for="ingredient">Ingredient</label>
                <input type="text" name='ingredient' v-model="smoothie.ingredients[index]">
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
             <div class="field add-ingredient">
                <label for='title'>Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab='addIngred' v-model='another'>
            </div>
            <div class="field center-align">
                <button class="btn">Update smoothie</button>
            </div>
        </form>
</div>
</template>

<script>
import db from "../firebase/init";
import slugify from 'slugify';

export default {
    name:'EditSmoothie',
    data() {
        return{
            title:null,
            another:null,
            feedback:null,
            smoothie:null
        }
    },
    methods:{
           addIngred() {
            if(this.another) {
                this.smoothie.ingredients.push(this.another)
                this.another = null
            }
        },
        deleteIng(ing) {
            this.smoothie.ingredients = this.smoothie.ingredients.filter(f=>{
                return f != ing
            })
        },
        editSmoothie(){
              if(this.smoothie.title) {
                this.feedback = null
                this.smoothie.slug = slugify(this.smoothie.title, {
                    replacement : '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('smoothies').doc(this.smoothie.id).update({
                    title: this.smoothie.title,
                    ingredients: this.smoothie.ingredients,
                    slug : this.smoothie.slug
                }).then(()=>{
                    this.$router.push('/')
                }).catch(err=> console.log(err))

            } else {
                this.feedback = 'enter a title dude'
            }
        }
    },
    created() {
        let ref = db.collection('smoothies').where('slug','==',this.$route.params.smoothie_slug)
        ref.get().then(snapshot=>{
            snapshot.forEach(doc=>{
                this.smoothie = doc.data()
                this.smoothie.id = doc.id
            })
        })
    }

}
</script>

<style>
     .edit-smoothie {
        margin-top: 4%;
        max-width: 40%;
        margin-left: 30%
    }

    .delete{
        cursor : pointer
    }
</style>