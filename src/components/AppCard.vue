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

        ingredientsDecode (){
            this.ingredients = JSON.parse(this.cocktail.ingredients);
        },

        measuresDecode (){
            this.measures = JSON.parse(this.cocktail.measures);
        }
    },
    mounted(){
        this.ingredientsDecode();
        this.measuresDecode();

    }
}
</script>

<template>
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
</template>


<style lang="scss" scoped></style>