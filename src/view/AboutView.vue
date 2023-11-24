<script >

export default {
    name: 'AboutView',

    props: {

    },

    methods: {

    }

}

</script>

<template>
    <div class="container main_content ">

        <h1 class="text-center text-light pb-5">About US</h1>

        <div class="p-5 mb-4 bg-dark text-light  rounded-3">
            <div class="container-fluid py-5 mb-5 d-flex justify-content-around ">
                <h1 class="display-5 fw-bold">Hi there 👋</h1>
                <p class="col-md-8 fs-4">🍸 Hi, we are Carlo, Elia, Danilo, Luca and Alessandro and this is our Cocktails
                    site! 🍸</p>
            </div>
        </div>

        <div>
            <div class="row py-5 mt-5">
                <div class="col">
                    <div class="container card-info text-light  bg-dark text-center">
                        <h1>Carlo</h1>
                        <div class="info ">
                            <p>Nome: Carlo</p>
                            <p>Cognome: Fanelli</p>
                            <p>Professione: Full Stack Web Developer</p>
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container card-info text-light  bg-dark text-center">
                        <h1>Luca</h1>
                        <div class="info">
                            <p>Nome: Luca</p>
                            <p>Cognome: Franzoi</p>
                            <p>Professione: Full Stack Web Developer</p>
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container card-info text-light  bg-dark text-center">
                        <h1>Danilo</h1>
                        <div class="info">
                            <p>Nome: Danilo</p>
                            <p>Cognome: Salerno</p>
                            <p>Professione: Full Stack Web Developer</p>
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container card-info text-light bg-dark text-center">
                        <h1>Elia</h1>
                        <div class="info">
                            <p>Nome: Elia</p>
                            <p>Cognome: Buratti</p>
                            <p>Professione: Full Stack Web Developer</p>
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="container card-info text-light  text-center bg-dark">
                        <h1>Alessandro</h1>
                        <div class="info">
                            <p>Nome: Alessandro</p>
                            <p>Cognome: Saladino</p>
                            <p>Professione: Full Stack Web Developer</p>
                            <a href="" class="">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card-info {
    border: 5px solid black;
    border-radius: 20px;

    & .info {
        display: none;
        text-align: start;
    }

    &:hover {
        .info{
            display: block;
        }
    }
}

.main_content {
    height: 1100px;
    padding-top: 10vh;
}
</style>