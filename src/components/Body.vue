<template>
<v-layout row wrap >

  <v-flex xs12 sm8 offset-md-12>
    <v-row>
    <v-col v-for="article in articles" :key="article.title" class="mt-4 mb-4" flat cols="12" md="4">
      <v-card class="ms-6" hover >
        <v-img height="300px"
               v-bind:src="article.image"></v-img>
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs8 align-end flexbox>
              <span class="headline">{{ article.title }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card-text>{{ article.description }}</v-card-text>
      <v-card-actions>
        <v-btn v-bind:href="article.url" target="_blank">Read More</v-btn>
      </v-card-actions>
    </v-col>
    </v-row>
  </v-flex>
</v-layout>
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

</style>