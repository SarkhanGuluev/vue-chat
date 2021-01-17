<template>
  <div class="app">
    <div class="main">
      <div class="container">
        <div class="nav">
          <div class="user">
            <img src="https://vinyl-market.ru/images/shop_items/1558.jpg" alt="">
            <p>{{name}}</p>
          </div>
          <div class="links">
            <div class="link">&#9993; Чат</div>
            <div class="link">&#9783; Пользователь</div>
            <div class="link">&#9734; О приложении</div>
            <div v-if="isLogged" class="link" @click='signOut'>&#10006; Выйти</div>
            <div v-else class="link" @click='openModal'>&#10154; Войти</div>
          </div>
        </div>
        <div class="messages">

        </div>
      </div>
    </div>
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
    <div class="circle5"></div>
  </div>
  <login v-if='modal'/>
  <loader v-if="loader" />
</template>

<script>
import Loader from './components/loader.vue'
import Login from './components/login.vue'
import firebase from './utilities/firebase'

export default {
  name: 'App',
  components: {Login, Loader},
  data: () => ({
  }),
  mounted() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
          this.$store.commit('setUser', user)
          this.$store.commit('setIsLogged', true)
      } else {
          this.$store.commit('setUser', null)
          this.$store.commit('setIsLogged', false)
    }
    })
  },
  methods: {
    openModal() {
      this.$store.commit('setModal', true)
    },
    signOut() {
      firebase.auth().signOut().then(() => {
          this.$store.commit('setUser', null)
          this.$store.commit('setIsLogged', false)
        }).catch((err) => {
          throw new Error(err)
        });
    }
  },
  computed: {
    modal() {
      return this.$store.getters.getModal
    },
    name() {
      return this.$store.getters.getName
    },
    loader() {
      return this.$store.getters.getLoader
    },
    isLogged() {
      return this.$store.getters.getIsLogged
    }
  }
}
</script>

<style lang='scss'>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

  $radius: 2rem;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right top, #42A5F5, #1E88E5);
    user-select: none;
  }

  .container {
    width: 60%;
    min-height: 80vh;
    background: linear-gradient(
                to right bottom,
               rgba(255, 255, 255, .7), 
               rgba(255, 255, 255, .3));
    border-radius: $radius;
    z-index: 10;
    backdrop-filter: blur(2rem);
    display: grid;
    grid-template-columns: 30% 70%;
  }

  .circle1,
  .circle2 {
    background: linear-gradient(
                to right bottom,
               rgba(255, 255, 255, .3), 
               rgba(255, 255, 255, .7));
    width: 20rem;
    height: 20rem;
    position: absolute;
    border-radius: 50%;
    animation: circle 1s;
  }

  .circle1 {
    bottom: 3%;
    left: 5%;
  }

  .circle2 {
    top: 5%;
    right: 5%;
  }

  .circle3,
  .circle4,
  .circle5 {
    position: absolute;
    width: 10rem;
    height: 10rem;
    background: linear-gradient(
                to right bottom,
               rgba(255, 255, 255, .3), 
               rgba(255, 255, 255, .7));
    border-radius: 50%;
    animation: circle 1s;
  }

  .circle3 {
    top: 5%;
    left: 5%;
  }

  .circle4 {
    right: 5%;
    bottom: 35%;
    width: 5rem;
    height: 5rem;
  }

  .circle5 {
    bottom: 5%;
    right: 5%;
  }

  @keyframes circle {
    0% {
      transform: scale(0)
    };
    100% {
      transform: scale(1);
    }
  }

  .nav {
    min-height: 80vh;
    background: linear-gradient(
                to right top,
               rgba(255, 255, 255, .1), 
               rgba(255, 255, 255, .3));
    border-radius: $radius 0 0 $radius;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }

  .user {
    margin: 2rem auto;
    padding: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    border-radius: $radius;
    color: #1E88E5;
    text-align: center;
    background: linear-gradient(
                to right,
               rgba(255, 255, 255, .1), 
               rgba(255, 255, 255, .5),
               rgba(255, 255, 255, .1));
    img {
      width: 5rem;
      border-radius: 50%;
      margin: 0 auto;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
  }

  .link {
    margin: 1rem 0;
    color: #1E88E5;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: #3e67e9;
    }
  }
</style>
