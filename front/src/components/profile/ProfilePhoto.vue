<script>
export default {
    name: "ProfilePhoto",
    props: [],
    data: () => ({
        show: true
    }),
    components: {},
    methods: {},
    created() {
        // setTimeout(() => {
        //     this.show = true;
        // }, 500);
    },
    mounted() { },
    unmounted() { },
}
</script>
<template>
    <div>
        <div id="ProfilePhoto">
            <transition name="fade">
                <img v-show="show" alt="Veronica" src="@/assets/profile-pic.png" id="profilePhoto" />
            </transition>
        </div>

        <!-- <button v-on:click="show = !show">Alternar</button> -->
    </div>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
}

#ProfilePhoto{
    animation: imageAnimation 500ms;
}

@keyframes imageAnimation {
    0% {
        opacity: 0;
        // animation-timing-function: ease-in;
        // box-shadow: rgb(151 65 252 / 20%) 0 0px 0px 0px;
        // padding: 0px;
    }
    100% {
        opacity: 1;
        // padding: 4px;
        // animation-timing-function: ease-in;
        // box-shadow: rgb(151 65 252 / 20%) 0 15px 30px -5px;
    }
}
</style>