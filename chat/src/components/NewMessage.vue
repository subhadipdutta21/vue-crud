<template>
    <div class="new-message">
        <form @submit.prevent="addMsg">
            <label for="new-msg">New msg (enter to add):</label>
            <input type="text" name="new-msg" v-model="newMsg">
        </form>
        <p class="red-text" v-if="feedback">{{feedback}}</p>
    </div>
</template>

<script>
import db from "../firebase/init";

export default {
    name:'NewMessage',
    props:['name'],
    data() {
        return{
            newMsg : null,
            feedback: null
        }
    },
    methods:{
        addMsg() {
            if(this.newMsg){
                console.log(this.newMsg,this.name,Date.now())
                db.collection('messages').add({
                    content : this.newMsg,
                    name:this.name,
                    timestamp: Date.now()
                }).catch(err=>console.log(err))

                this.newMsg=null
                this.feedback=null
            }            
            else{
                this.feedback='enter a msg first'
            }            
        }
    }
}
</script>

<style>

</style>