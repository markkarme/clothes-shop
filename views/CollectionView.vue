<template>
  <div class="about">
    <v-spacer style="height: 50px;"></v-spacer>
    <h1>Shop Collection</h1>
    <v-row justify="start" class="mt-10">
      <v-col  justify="start" cols="3">
        <v-row justify="start" class="ma-5">
          <h3 >Filtter by</h3>
        </v-row>
        <div class="ma-5">
          <v-expansion-panels class="mb-6">
            <v-expansion-panel >
              <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                Collection
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <v-btn variant="text" @click="datalenght('All','yes')">all</v-btn>
                  <v-btn variant="text" @click="datalenght('shirt','no')">shirt</v-btn>
                  <v-btn variant="text" @click="datalenght('babySuit','no')">Babysuit</v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                Price
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div >
                  <v-container >
                    <v-slider v-model="sliderValue" :min="0" :max="100" :step="5"></v-slider>
                    <p>Selected value: {{ sliderValue }}</p>
                  </v-container>
                </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                Colors
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-chip-group multiple>
                  <v-icon color="black" class="bordered-icon ma-1">mdi-circle</v-icon>
                  <v-icon color="white" class="bordered-icon ma-1">mdi-circle</v-icon>
                  <v-icon color="blue" class="bordered-icon ma-1">mdi-circle</v-icon>
                  <v-icon color="green" class="bordered-icon ma-1">mdi-circle</v-icon>
                  <v-icon color="brown" class="bordered-icon ma-1">mdi-circle</v-icon>
                  <v-icon color="yellow" class="bordered-icon ma-1">mdi-circle</v-icon>
                  
              </v-chip-group> 
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel >
              <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
                Size
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div>
                  <v-checkbox label="Small"  class="large-checkbox"></v-checkbox>
                  <v-checkbox label="medium" class="large-checkbox"></v-checkbox>
                  <v-checkbox  label="Large" class="large-checkbox" ></v-checkbox>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col cols="9">
        <v-row v-for=" (ch,i) in (datalenght('All','no')) " :key="i"  >
          <v-col cols="6" v-if="(ch+1)<=shirtsData.length">
            <ProductCard :imgSrc="shirtsData[ch].shirtImgUrl"/>
          </v-col>
          <v-col cols="6" v-if="(ch+1)<shirtsData.length">
            <ProductCard :imgSrc="shirtsData[ch+1].shirtImgUrl"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-spacer style="height: 50px;"></v-spacer>
    <MyFooter />
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import MyFooter from '@/components/MyFooter.vue';
var tshirt1Img = require('@/assets/home_tshirt_1.webp')
var tshirt2Img = require('@/assets/home_tshirt_2.webp')
var tshirt3Img = require('@/assets/home_tshirt_3.webp')
var tshirt4Img = require('@/assets/home_tshirt_4.webp')
var tshirt5Img = require('@/assets/home_tshirt_5.webp')
var tshirt6Img = require('@/assets/home_tshirt_6.webp')
var tshirt7Img = require('@/assets/home_tshirt_7.webp')

export default {
  name:"CollectionView",
  data: function(){
    return{
      tshirt1Img,
      sliderValue:10,
      shirtsData:[
        {
          shirtID:1,
          shirtImgUrl:tshirt1Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"shirt"
        },
        {
          shirtID:2,
          shirtImgUrl:tshirt2Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"shirt"
        },
        {
          shirtID:4,
          shirtImgUrl:tshirt3Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"shirt"
        },
        {
          shirtID:4,
          shirtImgUrl:tshirt4Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"shirt"
        },
        {
          shirtID:5,
          shirtImgUrl:tshirt5Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"babySuit"
        },
        {
          shirtID:6,
          shirtImgUrl:tshirt6Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"babySuit"
        },
        {
          shirtID:7,
          shirtImgUrl:tshirt7Img,
          shirtName:"Tshirt",
          ShirtPrice:"$19.99",
          tshirtType:"babySuit"
        },
        
        
      ],
      inShirt:1,
      dataToEdit:[],
      afterShirt:"No"
    }
  },
  methods:{
    datalenght(type,afterShirt){
      const evenNumbers = [];
      var dataToEdit=[];
      console.log("////////////////////")
      console.log(this.afterShirt)
      console.log("////////////////////")
      console.log(this.inShirt)
      if(type=='All'){
         if (this.inShirt == 0 && afterShirt == "yes"){
          this.inShirt = 1;
          this.shirtsData = this.dataToEdit;
          // console.log(this.dataToEdit)
          console.log("in all")
          this.inShirt=1;
          console.log(this.inShirt)
          console.log(this.dataToEdit)

        }

        for (let i = 0; i <= this.shirtsData.length; i++) {
            if (i % 2 === 0) {
              evenNumbers.push(i);
            }
          }
          return evenNumbers;
      }else if(type!="All"){
        const shirtData = []
        if(this.inShirt == 1 ){
          console.log("in shirt")
          this.inShirt = 0;
          this.dataToEdit = this.shirtsData;
        }

        for (let item in this.shirtsData) {
          if(this.shirtsData[item].tshirtType == type){
            shirtData.push(this.shirtsData[item])
            console.log("ii")
          }
        }
        this.shirtsData = shirtData;
        console.log(this.shirtsData)
        console.log('****************')
        console.log(shirtData)
        console.log('****************')
        console.log(this.dataToEdit)
        console.log('****************')
        console.log(this.inShirt)
        
        
        for (let i = 0; i <= this.shirtsData.length; i++) {
        if (i % 2 === 0) {
          evenNumbers.push(i);
        }
      }
      return evenNumbers;
      }
    },
  },
  components:{
    ProductCard,
    MyFooter
  }
}
</script>

<style scoped>
.bordered-icon {
  border: 1px solid black;
  border-radius: 45%;
  padding: 5px;
}
.bordered-icon:hover {
  border: 1px solid rgb(208, 35, 35);
  border-radius: 50%;
  padding: 5px;
}

.large-checkbox.v-input--density-default {
    --v-input-control-height: 5px;
    --v-input-padding-top: 5px;
}

</style>