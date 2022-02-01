<script>
import ProfileLinks from "./ProfileLinks.vue";
export default {
    name: "Profile",
    props: [],
    data: () => ({}),
    components: { ProfileLinks },
    methods: {},
    created() { },
    mounted() { },
    unmounted() { },
}
</script>
<template>
    <div id="Profile">

        <div id="profileCover">            
        </div>

        <img alt="Veronica" src="@/assets/profile-pic.png" id="profilePhoto">

        <div class="profileName">
            <h1>
                Verônica
                <br />Mascarenhas
            </h1>
        </div>
        <div class="profileDesc">
            <h2>
                A rainha das batatas
            </h2>
        </div>


        <ProfileLinks />
    </div>
</template>