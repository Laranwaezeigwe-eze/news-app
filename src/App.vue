<template>
<div id="App">
    <v-app>
    <v-app-bar app color="blue" elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text" >News App</v-app-bar-title>
    </v-app-bar>

      <v-navigation-drawer  v-model="drawer" app fixed left temporary>
        <v-list nav dense>
          <h2>News Heading</h2>
            <v-divider></v-divider>
            <v-list-item v-for="item in items" :key="item.topic" link>
              <v-list-item-content>
              <v-list-item-title @click="showNews(item.topic)" class="text-capitalize">{{ item.topic }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-main>
      <v-container class="">
        <router-view></router-view>
        <loader></loader>
        <Body :articles="articles"></Body>
      </v-container>
    </v-main>
    <v-footer fixed app>
      <span>&copy;{{new Date().getFullYear()}}</span>
    </v-footer>
  </v-app>
</div>
</template>
<script>
import axios from 'axios'
import Body from "./components/Body.vue";
import Loader from './components/loader';

export default {
  name: 'App',
  components: {
    Body,
    Loader,

  },

    data (){
    return{
      drawer: false,
      api_key: '70fe4e21350675b8593402274a99d8ce',
      articles: [],
      loader:true,
      items: [
        {topic: 'breaking news'},
        {topic: 'health'},
        {topic: 'sports'},
        {topic: 'business'},
        {topic: 'world'},
        {topic: 'technology'},
        {topic: 'entertainment'},
        {topic: 'science'},
        {topic: 'nation'}
      ],

      errors: []
    }
  },
  created(){
    axios.interceptors.request.use((config)=> {
      this.$store.commit('LOADER',true);
    return config;
  },  (error)=> {
      this.$store.commit('LOADER',false);
    return Promise.reject(error);
  });


    axios.interceptors.response.use((response)=> {
      console.log(response);
      this.$store.commit('LOADER',false);
      return response;
    }, (error)=> {
            return Promise.reject(error);
    });

    axios.get('https://gnews.io/api/v4/top-headlines?topic&lang=en&max=8&token=70fe4e21350675b8593402274a99d8ce')
    .then(response =>{
      this.articles = response.data.articles
      console.log('data:')
      console.log(response.data.articles)
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
  methods: {
    showNews(item) {
      axios.get('https://gnews.io/api/v4/top-headlines?topic=' + item + '&lang=en&max=8&token=70fe4e21350675b8593402274a99d8ce')
          .then(response =>{
            this.articles = response.data.articles
            console.log('data:')
            console.log(response.data.articles)
          })
          .catch(e =>{
            this.errors.push(e)
          })
    }

  }
}
</script>