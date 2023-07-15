<template>
    <div >
        <v-spacer style="height: 30px;"></v-spacer>

        <h1 class="ma-4">Contact US</h1>
        <v-spacer style="height: 30px;"></v-spacer>
        <v-row justify="center" class="ma-4">
            <v-col cols="3">
                <p>VISIT US</p>
                <v-spacer style="height: 30px;"></v-spacer>
                <p>500 Terry Francine St.</p>
                <p>San Francisco, CA 94158</p>
                <p>123-456-7890</p>
            </v-col>
            <v-col cols="3">
                <p>OPENING HOURS</p>
                <v-spacer style="height: 30px;"></v-spacer>
                <p>Mon - Fri: 7am - 10pm</p>
                <p> ​Saturday: 8am - 10pm</p>
                <p>​Sunday: 8am - 11pm</p>
            </v-col>
            <v-col cols="3">
                <p>CUSTOMER SERVICE</p>
                <v-spacer style="height: 30px;"></v-spacer>
                <p>1-800-000-000</p>
                <p>123-456-7890</p>
                <v-btn :ripple="false" variant="plain" class="text-lowercase">Info@mysite.com</v-btn>
            </v-col>
        </v-row>
        <v-spacer style="height: 70px;"></v-spacer>
        <p>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</p>
        <v-spacer style="height: 70px;"></v-spacer>
            <v-row justify="center">
                <v-col cols="4">
                    <v-text-field label="FirstName"></v-text-field>
                    
                </v-col>
                <v-col cols="4">
                    <v-text-field label="LastName"></v-text-field>
                </v-col>
            </v-row>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field label="email"></v-text-field>
                <v-text-field label="Subject"></v-text-field>
                <v-textarea label="Message"></v-textarea>
            </v-col>
        </v-row>
    </div>
    <v-spacer style="height: 70px;"></v-spacer>
    <MyFooter />
</template>
<script>
import MyFooter from '@/components/MyFooter.vue';
export default {
    name:"ContactView",
    components:{
        MyFooter,
        
    }
}
</script>
<style scoped>
.not-uppercase.v-btn__content {
  text-transform: unset !important;
}
</style>