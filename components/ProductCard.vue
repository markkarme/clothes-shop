<template>
    <v-card
    class="mx-auto"
    max-width="1000"
    max-height="1000"
    
    >
    <v-img
      class="align-end text-white"
      height="300"
      :src="imgSrc"
      
    ></v-img>

    <v-card-subtitle class="pa-4">
      I'm a Product
    </v-card-subtitle>
    <v-card-subtitle >
      $19.99
    </v-card-subtitle>
    <v-card-actions>
      <v-btn variant="outlined" block>
        Add To Chart
    </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    name:"ProductCard",
    props:["imgSrc"]
}
</script>