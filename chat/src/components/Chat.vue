<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key='message.id'>
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name='name' />
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage'
import db from '../firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props:['name'],
    components:{
        NewMessage
    },
    data() {
        return{  
            messages:[]          
        }
    },
    methods:{
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change=>{
                let doc = change.doc
                this.messages.push({
                    id: doc.id,
                    name: doc.data().name,
                    content: doc.data().content,
                    timestamp:moment(doc.data().timestamp).format('lll')
                })
            })
        })
    }

}
</script>

<style>
    .card-content {
        text-align: left
    }
    .chat h2{
        font-size: 3em;
        margin-bottom: 40px;
    }
    .chat span{
        font-size: 1.3em
    }
    .chat .time {
        display: block;
        font-size: .9em
    }
    .messages{
        max-height: 400px;
        overflow: auto
    }
</style>