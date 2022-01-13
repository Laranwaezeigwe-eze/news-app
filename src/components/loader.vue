<template>

      <v-dialog
          v-model="$store.state.loader"
          hide-overlay
          persistent
          width="100"
      >
        <v-card
            color="primary"
            dark
        >
            Loading...
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
            ></v-progress-linear>

        </v-card>
      </v-dialog>

</template>

