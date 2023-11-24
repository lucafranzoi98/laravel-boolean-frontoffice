<script>
import axios from 'axios';

export default {
    name: 'CocktailsView',
    data() {
        return {
            apiURL: 'http://127.0.0.1:8000/api/cocktails/',
            cocktail: {},
            ingredients: [],
            measures: [],
        }
    },
    methods: {

        cocktailApiCall() {
            axios.get(this.apiURL + this.$route.params.slug)
                .then(response => {
                    this.cocktail = response.data.result
                    this.ingredients = JSON.parse(this.cocktail.ingredients);
                    this.measures = JSON.parse(this.cocktail.measures);
                    console.log(this.ingredients, this.measures);
                })
        },
    },
    mounted() {
        this.cocktailApiCall()
    },
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 fs-6">
            <div class="col py-5">
                <img class="img-fluid" :src="this.cocktail.thumb" alt="">
            </div>
            <div class="col">
                <div class="container py-5">

                    <h1 class="display-5 fw-bold">#{{ this.cocktail.id }} - {{ this.cocktail.name }}</h1>
                    <div class="my-1 d-flex justify-content-center flex-wrap">
                        <div class="my-1">
                            <small class="badge rounded-pill text-bg-danger m-1" v-for="ingredient in this.ingredients">{{
                                ingredient }}</small>
                        </div>
                        <span class="badge rounded-pill text-bg-primary m-1" v-for="measure in this.measures">
                            {{ measure }}
                        </span>
                    </div>
                    <h1>{{ this.cocktail.instructions }}</h1>

                    <div class="row">
                        <h4>{{ this.cocktail.alcholic }}</h4>
                    </div>

                    <div class="row">
                        <h4>{{ this.cocktail.category }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>