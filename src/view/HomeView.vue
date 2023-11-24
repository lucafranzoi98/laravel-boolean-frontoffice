<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';

export default {
    name: 'HomeView',
    components: {
        AppCard
    },
    data() {
        return {
            apiURL: 'http://127.0.0.1:8000/api/cocktails',
            cocktails: [],
            currentPage: null

        }
    },
    methods: {

        apiCall() {
            axios.get(this.apiURL)
                .then(response => {
                    this.currentPage = response.data.result.current_page;
                    this.cocktails = response.data.result.data;
                    console.log('pagina:' + this.currentPage);
                    console.log('cocktail:' + this.cocktails);



                })
                .catch(error => {
                    console.log(error);
                })
        }

    },
    mounted() {
        this.apiCall()
    },
}
</script>
        
<template>
    <!-- Jumbo -->
    <div class="p-5 mb-4 bg-light rounded-3 bg-dark w-75 m-auto shadow mt-2 background_jumbo">
        <div class="container  py-5 ">
            <h1 class="display-5 fw-bold text-danger">CocktailBar for Dev</h1>
            <p class="col-md-8 fs-4 text-white">After a day on the code, the best way to restore your mind</p>
        </div>
    </div>

    <div class="container mb-5 ">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col" v-for="cocktail in cocktails">
                <AppCard :cocktail="cocktail"></AppCard>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>


.background_jumbo {
    background-image: url(../assets/image/brand.png);
    width: 100px;
    background-size: 30%;
    background-repeat: no-repeat;
    background-position: right 10% bottom 45% ;
    border: 2px solid grey;
    
}






</style>