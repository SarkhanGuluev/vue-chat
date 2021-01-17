<template>
  <div class="loader">
      <div class="loader-circle circ1"></div>
      <div class="loader-circle circ2"></div>
      <div class="loader-circle circ3"></div>
      <div class="loader-circle circ4"></div>
      <div class="loader-circle circ5"></div>
  </div>
</template>

<script>
export default {
    name: 'loader'
}
</script>

<style lang='scss'>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .7);
        width: 100vw;
        height: 100vh;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loader-circle {
        width: 3rem;
        height: 3rem;
        background: linear-gradient( to right,
            #42A5F5, #1E88E5);
        margin: .25rem;
        border-radius: 50%;
    }

    .circ1 {
        animation: loader-animation 1s;
        animation-iteration-count: 100;
    }
    .circ2 {
        animation: loader-animation 1.1s;
        animation-iteration-count: 100;
    }
    .circ3 {
        animation: loader-animation 1.2s;
        animation-iteration-count: 100;
    }
    .circ4 {
        animation: loader-animation 1.3s;
        animation-iteration-count: 100;
    }
    .circ5 {
        animation: loader-animation 1.4s;
        animation-iteration-count: 100;
    }

    @keyframes loader-animation {
        0% {
            transform: scale(0)
        };
        50% {
            transform: scale(1)
        };
        100% {
            transform: scale(0);
        }
    }
</style>