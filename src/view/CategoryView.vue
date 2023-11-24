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
            apiURL: 'http://127.0.0.1:8000/api/cocktails/category/',
            cocktails: [],
            currentPage: null,
            lastPage: null,
            filter: ''

        }
    },
    methods: {
        nextPage() {
            if (this.currentPage === this.lastPage) {
                this.currentPage = 1;
            } else {
                this.currentPage++;
            }
            this.apiCall()
        },
        prevPage() {
            if (this.currentPage === 1) {
                this.currentPage = this.lastPage;
            } else {
                this.currentPage--;
            }
            this.apiCall()
            console.log(this.filter);
        },



        apiCall() {
            axios.get(`${this.apiURL}${this.filter}/?page=${this.currentPage}`)
                .then(response => {
                    this.currentPage = response.data.result.current_page;
                    this.cocktails = response.data.result.data;
                    //console.log('pagina:' + this.currentPage);
                    //console.log('cocktail:' + this.cocktails);
                    this.lastPage = response.data.result.last_page;
                })
                .catch(error => {
                    console.log(error);
                })

        },
        filterCocktails(filter) {
            this.filter = filter;
            this.apiCall();
            console.log(this.filter);


        },

    },
    mounted() {
    },
}
</script>
        
<template>
    <!-- Jumbo -->
    <div class="p-5 mb-4 bg-light rounded-3 bg-dark w-75 m-auto shadow mt-2 background_jumbo">
        <div class="container  py-5 ">
            <h1 class="text-white">filtrata</h1>

            <h1 class="display-5 fw-bold text-danger">CocktailBar for Dev</h1>
            <p class="col-md-8 fs-4 text-white">After a day on the code, the best way to restore your mind</p>
        </div>
        <div class="row">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                <button type="radio" class="btn-check" id="radio2" autocomplete="off"
                    @click="filterCocktails('Alcoholic')"></button>
                <label class="btn btn-outline-light" for="radio2">Alcolici</label>

                <button type="radio" class="btn-check" id="radio3" autocomplete="off"
                    @click="filterCocktails('Non alcoholic')"></button>
                <label class="btn btn-outline-light" for="radio3">Analcolici</label>

                <button type="radio" class="btn-check" id="radio4" autocomplete="off"
                    @click="filterCocktails('Optional alcohol')"></button>
                <label class="btn btn-outline-light" for="radio4">Alcol Opzionale</label>
            </div>
        </div>
    </div>

    <div class="container mb-5 ">
        <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col" v-for="     cocktail      in      cocktails     "
                v-show="this.filter === '' ? true : (this.filter === cocktail.alcholic ? true : false)">
                <AppCard :cocktail="cocktail"></AppCard>
            </div>

        </div>
        <div class="row mt-4 ">
            <div class="prev w-50 text-start" @click="prevPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-arrow-bar-left text-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5" />
                </svg>
            </div>
            <div class="next w-50 text-end" @click="this.nextPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-arrow-bar-right text-white" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5" />
                </svg>
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
    background-position: right 10% bottom 45%;
    border: 2px solid grey;

}
</style>