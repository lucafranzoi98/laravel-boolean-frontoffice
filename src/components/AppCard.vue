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
    <router-link class="text-decoration-none" :to="{ name: 'Cocktail', params: { slug: cocktail.slug } }">

        <div class="card h-100 bg-dark">

            <img :src="cocktail.thumb" alt="">

            <div class="card-body h-100 d-flex flex-column justify-content-around">
                <h3 class="text-center text-truncate text-danger">{{ cocktail.name }}</h3>
                <div class="d-flex justify-content-center flex-wrap gap-3">

                    <span class="badge rounded-pill text-bg-info bg-light text-center">
                        <small class="badge rounded-pill text-bg-danger m-1" v-for="ingredient in this.ingredients">{{
                            ingredient }}</small>
                    </span>
                    <span class="badge rounded-pill text-bg-info bg-light text-center">
                        <small class="badge rounded-pill text-bg-primary  bg-dark m-1" v-for="measure in this.measures">{{
                            measure }}</small>
                    </span>
                </div>

                <div class="col">

                </div>
                <div class="container d-flex justify-content-between py-2 align-items-center">
                    <div class="d-flex justify-content-between py-2 ">
                        
                        <h4 class="text-danger" v-if="this.cocktail.alcholic === 'Alcoholic'">{{ cocktail.alcholic }}</h4>
                        <h4 class="text-success" v-else>{{ cocktail.alcholic }}</h4>
                    </div>
                    <div class="d-flex justify-content-between py-1">
                        <h4 class="text-warning" v-if="this.cocktail.category === 'Cocktail'">{{ cocktail.category }}</h4>
                        <h4 class="text-primary" v-else>{{ cocktail.category }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>


<style lang="scss" scoped>
.card {
    border-radius: 15px;
    background: white;
    border: 2px solid white;
    display: flex;
    transition: 0.4s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);

    &:hover {
        transform: translateY(20px);
    }


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
}
</style>