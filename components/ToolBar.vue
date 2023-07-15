<template>
    <v-div :style="{ fontSize: '30px' }">
      <h1 >Happy kids</h1>
    </v-div>
    <v-toolbar color="white" class="ml-10">
      <div  :style="{ width: '200px' }" class="ma-5">
        <v-text-field
        class="bg-white"
      label="search"
        hide-details
        single-line
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
    </div>
    <v-spacer ></v-spacer>

    <div class="text-center">
      <v-row ms="4" justify="center">
        <v-btn variant="text" :to="{name:'home'}">
        Home
      </v-btn>
      <v-btn variant="text" :to="{name:'collection'}">
        ShopCollection
      </v-btn>
      <v-btn variant="text" :to="{name:'ourStroy'}">
        OurStory
      </v-btn>
      <v-btn variant="text" :to="{name:'contact'}">
        Contact
      </v-btn>
    </v-row>
    </div>
      <v-spacer></v-spacer>
      <v-btn>
        <v-icon>mdi-account</v-icon>
        login
      </v-btn>
      <v-icon>
        mdi-alert-circle-outline
      </v-icon>
      <v-spacer ></v-spacer>
    </v-toolbar>
</template>
<script>
export default {
    name:"ToolBar",
    data: function(){
      return{
        homePage:"Home"
      }
    }
}
</script>