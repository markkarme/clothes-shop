<template>
  <v-container>
    <v-card elevation="24" width="100%" height="100%" class="mx-auto mt-4 ml-4" block>
      <v-carousel >
      <v-carousel-item
        :src="file2"
        cover
      >
      <div class="d-flex fill-height justify-center align-center">
        <v-col>
          <h2>New Collection</h2>
          <v-btn variant="outlined">Shop Now</v-btn>
        </v-col>  
        
      </div>

    </v-carousel-item>
      <v-carousel-item
        :src="file1"
        cover
      ></v-carousel-item>
      <v-carousel-item
        :src="file3"
        cover
      ></v-carousel-item>
      </v-carousel>
    </v-card>
    <h1 class="mx-auto mt-4 ml-4">New Arrivals</h1>
  </v-container>
  <v-sheet
    class="mx-auto"
    >
    <v-slide-group
      show-arrows
      >
      <v-slide-group-item
        v-for="(tshirtImg, i) in tshirtImges"
        :key="i"
        >
        <ProductCard :imgSrc="tshirtImg" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  <v-spacer style="height: 50px;"></v-spacer>
  <div class="mx-auto mt-4 ml-4 mb-4">
    <v-btn color="black">Shop All</v-btn>
  </div>
  <v-spacer style="height: 50px;"></v-spacer>
  <MyFooter />
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import ToolBar from '@/components/ToolBar.vue'
import MyFooter from '@/components/MyFooter.vue'
// @ is an alias to /src
var file1 = require('@/assets/home_img_1.webp')
var file2 = require('@/assets/home_img_2.webp')
var file3 = require('@/assets/home_img_3.webp')
var tshirt1Img = require('@/assets/home_tshirt_1.webp')
var tshirt2Img = require('@/assets/home_tshirt_2.webp')
var tshirt3Img = require('@/assets/home_tshirt_3.webp')
var tshirt4Img = require('@/assets/home_tshirt_4.webp')
var tshirt5Img = require('@/assets/home_tshirt_5.webp')
var tshirt6Img = require('@/assets/home_tshirt_6.webp')
var tshirt7Img = require('@/assets/home_tshirt_7.webp')
export default {
  name: 'HomeView',
  components: {
    ProductCard,
    ToolBar,
    MyFooter,
  },
  data:function() {
    return{
      file1,
      file2,
      file3,
      tshirt1Img,
      tshirtImges:[tshirt1Img,tshirt2Img,tshirt3Img,tshirt4Img,tshirt5Img,tshirt6Img,tshirt7Img]
    }
},
}
</script>
