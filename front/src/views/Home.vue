<template>
  <div id="Home">
    <Profile />
  </div>
</template>

<script>
import Profile from '@/components/profile/Profile.vue'; // @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Profile,
  },
};
</script>