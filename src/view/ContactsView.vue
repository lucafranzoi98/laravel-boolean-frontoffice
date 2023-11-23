<script>
import axios from 'axios';

export default {
    name: 'ContactsView',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    },
    methods: {
        sendForm() {
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            };
            axios.post('http://127.0.0.1:8000/api/contacts', payload)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
    }
}
</script>

<template>
    <div class="container">

        <h1 class="pt-5">
            Contact me
        </h1>

        <form action="#" class="py-5" v-on:submit.prevent="sendForm()">

            <div class="d-flex gap-4 justify-content-between pb-5">
                <div class="form-floating flex-grow-1">
                    <input type="text" class="form-control" id="name" placeholder="Mario Rossi" v-model="name">
                    <label for="name">Name</label>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
                    <label for="email">Email address</label>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="tel" class="form-control" id="phone" placeholder="0123456789" v-model="phone">
                    <label for="phone">Phone number</label>
                </div>
            </div>

            <div class="py-5">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Leave your message here"
                    v-model="message"></textarea>
            </div>

            <button type="submit">Send</button>

        </form>

    </div>
</template>


<style lang="scss" scoped></style>