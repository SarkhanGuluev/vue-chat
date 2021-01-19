<template>
  <div class="na"></div>
  <div class="email"></div>
  <input v-model="name" type="text" placeholder="name">
  <button @click='setUserInfo'>set</button>
</template>

<script>
import { onMounted, ref, reactive } from 'vue'
import firebase from '../utilities/firebase'

export default {
    name: 'User',
    setup() {
      let user = reactive(null)
      onMounted(() => {
        try {
          user = firebase.auth().currentUser
          console.log(user)
        } catch (error) {
          throw new Error(error)
        }
      })

      const name = ref('')

      const setUserInfo = () => {
        try {
          user.updateProfile({
            displayName: name
          })
        } catch (error) {
          throw new Error(error)
        }
      }

      return {
        setUserInfo,
        name,
        user
      }
    },

    // data() {
    //   return {
    //     displayName: '',
    //     age: '',
    //     location: ''
    //   }
    // }
}
</script>

<style>

</style>