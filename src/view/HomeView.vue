<template>
    <div class="p-5 mb-4 bg-light rounded-3 bg-dark w-75 m-auto shadow mt-2">
        <div class="container  py-5 ">
            <h1 class="display-5 fw-bold text-danger">CocktailBar for Dev</h1>
            <p class="col-md-8 fs-4 text-white">After a day on the code, the best way to restore your mind</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomeView',
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

<style lang="scss" scoped></style>