<template>
  <div class="login__overlay">
      <div class="login__form">
          <span  @click='closeModal'>&#10006;</span>
          <p>Вход</p>
          <input v-model="login" type="text" placeholder="email">
          <input v-model="password" type="text" placeholder="password">
          <button @click="signIn" >Войти</button>
          <button @click="signUp" >Регистрация</button>
      </div>
  </div>
  <loader v-if="loader" />
</template>

<script>
import firebase from '../utilities/firebase'
import loader from './loader.vue'
export default {
  components: { loader },
    name: 'login',
    data: () => ({
        login: '',
        password: ''
    }),
    methods: {
        signIn() {
            if(this.login && this.password) {
                this.$store.commit('setLoader', true)
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.login, this.password)
                    .then(() => {
                        this.login = ''
                        this.password = ''
                        this.$store.commit('setModal', false)
                        this.$store.commit('setLoader', false)
                    })
                    .catch((err) => {
                        console.error(err)
                        this.$store.commit('setModal', false)
                        this.$store.commit('setLoader', false)
                    })
            } else {
                alert("Заполните поля!")
            }
        },
        signUp() {
            if(this.login && this.password) {
                this.$store.commit('setLoader', true)
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.login, this.password)    
                .then(() => {
                    this.$store.commit('setLoader', false)
                })
                .catch((err) => {
                    throw new Error(err)
                })
            } else {
                alert("Заполните поля!")
            }
        },
        closeModal() {
            this.$store.commit('setModal', false)
        }
    },
    computed: {
        loader() {
            return this.$store.getters.getLoader
        },
        
    }
}
</script>

<style lang='scss'>

    .login__overlay {
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
        animation: overlay ease-in-out 1s;
    }

    .login__form {
        position: relative;
        width: 25rem;
        height: 25rem;
        background: linear-gradient( to top,
            #1976D2,
            #0D47A1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 50%;
        animation: modal ease-in-out .7s;
        input {
            border: none;
            height: 2.5rem;
            margin-bottom: 1rem;
            width: 50%;
            border-radius: 2rem;
            padding-left: .5rem;
            outline: none;
            font-size: 1.2rem;
            &:hover {
                box-shadow: 0 0 3px 1px #fff;
            }
        }

        p {
            font-size: 1.7rem;
            font-weight: 600;
            margin: 1rem;
            color: #fff;
        }
        
        button {
            width: 50%;
            background: linear-gradient(
                  to right,
                rgba(255, 255, 255, .5), 
                rgba(255, 255, 255, 1));
            border: none;
            height: 2rem;
            border-radius: 2rem;
            outline: none;
            font-weight: 600;
            color:#0D47A1;
            margin: 0 .5rem .5rem .5rem;
            &:hover {
                box-shadow: 0 0 3px 1px #fff;
            }
        }

        span {
            position: absolute;
            top: 0;
            right: 0;
            color: #0D47A1;
            font-size: 2rem;
            cursor: pointer;
        }
    }

    @keyframes modal {
        from {
            transform: scale(0);
        };
        to {
            transform: scale(1);
        }
    }
    @keyframes overlay {
        from {
            opacity: 0;
        };
        to {
            opacity: 1;
        }
    }


</style>