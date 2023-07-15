<template>
    <div>
        <v-img :src="ourStoryImg"></v-img>
        <h1 class="ma-10">Our Story</h1>
        <v-row justify="center" style="font-size: 15px;" class="ma-10" >
            <v-col cols="8">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. 
                Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font.
                Feel free to drag and drop me anywhere you like on your page. 
                I'm a great place for you to tell a story and let your users know a little more about you.
                <br><br> 
                This is a great space to write long text about your company and your services. 
                You can use this space to go into a little more detail about your company. 
                Talk about your team and what services you provide. 
                Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                Make your company stand out and show your visitors who you are.
            </v-col>
        </v-row>
    </div>

    <MyFooter />
</template>
<script>
import MyFooter from '@/components/MyFooter.vue';

var ourStoryImg = require('@/assets/our_story_1.webp')

export default {
    name:"OurStoryView",
    data: function(){
        return{
            ourStoryImg
        }
    },
    components:{
        MyFooter,
        
    }
}
</script>