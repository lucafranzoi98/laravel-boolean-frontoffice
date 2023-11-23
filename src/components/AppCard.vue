<script>
export default {
    name: 'AppCard',
    props: {
        cocktail: Object
    },
    data() {
        return {
            ingredients: [],
            measures: []
        }
    },
    methods: {


        ingredientsDecode() {
            this.ingredients = JSON.parse(this.cocktail.ingredients);
        },

        measuresDecode() {
            this.measures = JSON.parse(this.cocktail.measures);
        }
    },
    mounted() {
        this.ingredientsDecode();
        this.measuresDecode();


    }
}
</script>

<template>
    <!-- Old -->
    <!-- <router-link class="text-decoration-none" :to="{ name: 'Cocktail', params: { slug: cocktail.slug } }">

        <div class="card h-100 bg-dark">

            <img :src="cocktail.thumb" alt="">

            <div class="card-body h-100 d-flex flex-column justify-content-around">
                <h3 class="text-center text-truncate text-danger">{{ cocktail.name }}</h3>
                <div class="d-flex justify-content-center flex-wrap">

                    <small class="badge rounded-pill text-bg-danger m-1" v-for="ingredient in this.ingredients">{{
                        ingredient }}</small>
                    <small class="badge rounded-pill text-bg-primary m-1" v-for="measure in this.measures">{{
                        measure }}</small>
                </div>
                <p class="card-text text-white placeholder-glow">
                    {{ cocktail.instructions }}
                </p>
                <div class="col">

                </div>
                <div class="d-flex justify-content-between py-1">
                    <h4 class="text-light">{{ cocktail.alcholic }}</h4>

                </div>
                <div class="d-flex justify-content-between py-1">
                    <h4 class="text-light">{{ cocktail.category }}</h4>
                </div>
            </div>
        </div>
    </router-link> -->

    <!-- New -->
    <router-link class="text-decoration-none" :to="{ name: 'Cocktail', params: { slug: cocktail.slug } }">

        <div class="card h-100 rounded-5 shadow border-0 bg-card">
            <div class="card-img-top rounded-top-5 background-top p-5 pb-4 text-center">
                <div class="shadow-image">
                    <img class="cocktail-image mb-4 w-100" :src="cocktail.thumb">
                </div>
                <h4 class="card-title fs-1 fw-semibold">{{ cocktail.name }}</h4>
                <h6 class="card-subtitle text-muted fw-semibold mb-3">{{ cocktail.category }}</h6>
            </div>
            <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                <div>
                    <p class="card-text fst-italic">{{ cocktail.instructions }}</p>
                    <div class="d-flex justify-content-between px-4">
                        <ul class="list-unstyled d-flex flex-column align-items-start">
                            <li class="fw-semibold">Ingredients</li>
                            <li v-for="ingredient in this.ingredients">{{ ingredient }}</li>
                        </ul>
                        <ul class="list-unstyled d-flex flex-column align-items-end">
                            <li class="fw-semibold">Measures</li>
                            <li v-for="measure in this.measures">{{ measure }}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr>
                    <div class="badge" :class="cocktail.alcholic == 'Alcoholic' ? 'alcoholic' : 'alcoholic-free'">{{
                        cocktail.alcholic }}</div>
                </div>
            </div>
        </div>
    </router-link>
</template>


<style lang="scss" scoped></style>