<script>
export default {
  name: "ProfileLinks",
  props: [],
  data: () => ({}),
  components: {},
  methods: {},
  created() { },
  mounted() { },
  unmounted() { },
}
</script>
<template>
  <div id="ProfileLinks">
    <!-- HTML !-->
    <button class="button-64" role="button">
      <span class="text">Instagram</span>
    </button>
    <br />
    <button class="button-64" role="button">
      <span class="text">Facebook</span>
    </button>
    <br />
    <button class="button-64" role="button">
      <span class="text">Youtube</span>
    </button>

    <br />

    <!-- HTML !-->
    <button class="btn">TIKTOK</button>
  </div>
</template>
<style lang="scss">
.button-64 {
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

// @media (min-width: 768px) {
//     .button-64 {
//         font-size: 24px;
//         min-width: 196px;
//     }
// }

#ProfileLinks button {
  opacity: 0;
  animation: btnAnimation 500ms forwards;
}

#ProfileLinks button:nth-child(1) {
  // animation: btnAnimation 500ms forwards;
  animation-delay: 100ms;
}
#ProfileLinks button:nth-child(3) {
  // animation: btnAnimation 500ms forwards;
  animation-delay: 200ms;
}
#ProfileLinks button:nth-child(5) {
  // animation: btnAnimation 500ms forwards;
  animation-delay: 300ms;
}
#ProfileLinks button:nth-child(7) {
  // animation: btnAnimation 500ms forwards;
  animation-delay: 400ms;
}

@keyframes btnAnimation {
  0% {
    opacity: 0;
    transform: translate3d(0px, 40px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
}


.btn {
 width: 100%;
 height: 40px;
 font-size: 1.1em;
 cursor: pointer;
 background-color: #171717;
 color: #fff;
 border: none;
 border-radius: 5px;
 transition: all .4s;
}

.btn:hover {
 border-radius: 5px;
 transform: translateY(-10px);
 box-shadow: 0 7px 0 -2px #f85959,
  0 15px 0 -4px #39a2db,
  0 16px 10px -3px #39a2db;
}

.btn:active {
 transition: all 0.2s;
 transform: translateY(-5px);
 box-shadow: 0 2px 0 -2px #f85959,
  0 8px 0 -4px #39a2db,
  0 12px 10px -3px #39a2db;
}
</style>