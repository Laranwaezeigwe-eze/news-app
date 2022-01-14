<template>
  <div>

  <div class="pa-2">
    <v-row class="" >
    <v-col cols="6" md="4" v-for="article in articles" :key="article.title">
      <v-card  hover height="auto" >
        <v-img height="150px"
               v-bind:src="article.image"></v-img>
        <div class="pa-3" >
            <div class="">
              <span class="font-weight-black titleClass">{{ article.title }}</span>
            </div>
        </div>
        <div class="px-3">
          <span class="  titleClass">{{ article.description }}</span>
        </div>
        <v-card-actions>
          <v-btn depressed v-bind:href="article.url" target="_blank">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    </v-row>
  </div>
  </div>
</template>

<script>
export default {
  name: "Body",
  props: {
    articles: Array
  },
}
</script>

<style scoped>
.titleClass{
  font-size: 12px;
}
.truncate {
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis !important;
}
</style>