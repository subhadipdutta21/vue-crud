<template>
    <div id="blogs">
        <h1>
            {{blogtitle}}
        </h1>
        <button @click='update'>update me</button>
        <input type="text" v-model="searchterm" >
        <div v-for="post in searchedPosts" :key= 'post.id'>
            <h3>
                {{post.title}}
            </h3>
            <h5>
                {{post.body}}
            </h5>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Blogs',
    data() {
        return {
            blogtitle : 'old name is here',
            posts : [],
            searchterm:''
        }
    },
    computed: {
        searchedPosts() {
            return this.posts.filter(post => {
                return post.title.match(this.searchterm)
            })
        }
    },   
    methods : {
        update() {
            this.blogtitle = 'Newwwww name'
        }
    },
    beforeCreate() {
        alert('not created yet')
    },
    created() {
        // alert('created')
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.posts = response.data
        }).catch(err => console.log(err))
    },
    // beforeUpdate() {
    //     alert('tring to update')
    // }
}
</script>