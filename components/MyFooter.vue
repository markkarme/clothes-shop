<template>
    <v-divider :thickness="5" color="black"></v-divider>
    <v-spacer style="height: 50px;"></v-spacer>
    <v-btn variant="text" size="lg">Happy kids </v-btn>
    <v-spacer style="height: 50px;"></v-spacer>
    <v-row justify="center" class="space">
        <v-col cols="12" sm="4">
        <div>
            <p><v-btn variant="text">Home</v-btn></p>
            <p><v-btn variant="text">ShopCollection</v-btn></p>
            <p><v-btn variant="text">OurStory</v-btn></p>
            <p><v-btn variant="text">Contact</v-btn></p>
        </div>
        </v-col>
        <v-col cols="12" sm="4">
        <div>
            <v-icon color="blue" class="pa-4">mdi-facebook</v-icon>
            <v-icon color="red" class="pa-4">mdi-instagram</v-icon>
            <v-icon color="blue" class="pa-4">mdi-twitter</v-icon>
        </div>
        </v-col>
        <v-col cols="12" sm="4">
        <div>
            <p><v-btn variant="text">Shipping & Returns</v-btn></p>
            <p><v-btn variant="text">Store Policy</v-btn></p>
            <p><v-btn variant="text">Payment Methods</v-btn></p>
            <p><v-btn variant="text">FAQ</v-btn></p>
        </div>
        </v-col>
    </v-row>
    <v-spacer style="height: 50px;"></v-spacer>
    <h1>Join Our yahya team</h1>
    <v-row justify="center" class="pa-10">
        <div :style="{ width: '200px', height:'60px'}"  class="mr-4">
        <v-text-field  variant="outlined" placeholder="Enter your email here"></v-text-field>
        </div>
        <div :style="{ width: '200px', height:'100px'}">
        <v-btn color="black" style="height: 60px;">Subscribe now</v-btn>
        </div>
        
    </v-row>
</template>

<script>
export default {
    name:"MyFooter",   
}
</script>