<template>
    <div class="signup container">
        <form @submit.prevent="signup" class="card-panel">
            <h2 class="center deep-purple-text">
                Signup
            </h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password :</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="alias">Alias :</label>
                <input type="text" name="alias" v-model="alias">
            </div>
            <p class="red-text">{{this.feedback }}</p>
            <div class="field center">
                <button class="btn deep-purple">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'

export default {
    name: 'Signup',
    data() {
        return {
            email:null,
            password:null,
            alias:null,
            feedback: null
        }
    },
    methods:{
        signup() {
            if(this.alias) {
                this.slug = slugify(this.alias, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                let ref = db.collection('users').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists) {
                        this.feedback = 'this alias already exists'
                    }
                })
                
            }else {
                this.feedback = 'enter an alias first'
            }
        }
    }
}
</script>

<style>
    .signup {
        width: 35%
    }
</style>