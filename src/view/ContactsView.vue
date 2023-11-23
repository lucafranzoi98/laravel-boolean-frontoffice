<script>
export default {
    name: 'ContactsView'
}
</script>

<template>
    <div class="container">

        <h1 class="pt-5">
            Contact me
        </h1>

        <form action="#" class="py-5">

            <div class="d-flex gap-4 justify-content-between pb-5">
                <div class="form-floating flex-grow-1">
                    <input type="text" class="form-control" id="name" placeholder="Mario Rossi">
                    <label for="name">Name</label>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                    <label for="email">Email address</label>
                </div>

                <div class="form-floating flex-grow-1">
                    <input type="tel" class="form-control" id="phone" placeholder="0123456789">
                    <label for="phone">Phone number</label>
                </div>
            </div>

            <div class="py-5">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Leave your message here"></textarea>
            </div>

        </form>

    </div>
</template>


<style lang="scss" scoped></style>