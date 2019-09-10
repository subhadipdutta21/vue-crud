<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text">
            Add smoothie recipe
        </h2>
        <form @submit.prevent='addSmoothie'>
            <div class="field title">
                <label for='title'>Smoothie title:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div v-for="(ing,index) in ingredients" :key='index'>
                <label for="ingredient">Ingredient</label>
                <input type="text" name='ingredient' v-model="ingredients[index]">
                <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
            </div>
             <div class="field add-ingredient">
                <label for='title'>Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab='addIngred' v-model='another'>
            </div>
            <div class="field center-align">
                <button class="btn">Add smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from "slugify";
import db from '../firebase/init'
export default {
    name: 'AddSmoothie',
    data() {
        return {
            title: null,
            another: null,
            ingredients:[],
            feedback:null,
            slug:null
        }
    },
    methods:{
        addSmoothie(){
            console.log(this.title);
            console.log(this.ingredients);
            if(this.title) {
                this.feedback = null
                this.slug = slugify(this.title, {
                    replacement : '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('smoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug : this.slug
                }).then(()=>{
                    this.$router.push('/')
                }).catch(err=> console.log(err))

            } else {
                this.feedback = 'enter a title dude'
            }

        },
        addIngred() {
            if(this.another) {
                this.ingredients.push(this.another)
                this.another = null
            }
        },
        deleteIng(ing) {
            this.ingredients = this.ingredients.filter(f=>{
                return f != ing
            })
        }
    }
}
</script>

<style>
    .add-smoothie {
        margin-top: 5%;
        max-width: 40%
    }

    .delete{
        cursor : pointer
    }
</style>