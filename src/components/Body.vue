<template>
<v-layout row wrap >

  <v-flex xs12 sm8 offset-md-12>
    <div v-for="article in articles" :key="article.title">
      <v-card class="my-3" hover>
        <v-img height="250px"
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
        <v-chip small color="secondary" class="white--text">
          {{article.source.name}}
        </v-chip>
        <v-spacer></v-spacer>
      <v-btn v-bind:href="article.url" target="_blank">Read More</v-btn>
      </v-card-actions>
    </div>
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