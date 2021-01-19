<template>
  <h1>Chat</h1>
</template>

<script>
import { onMounted } from 'vue'
// import firebase from '../utilities/firebase'
export default {
    name: 'Chat',
    setup() {
      onMounted(() => {
        // const db = firebase.database()
        // // const collection = db.ref('chats')
        // function writeUserData(userId, name, message) {
        //   db.ref('chats/' + userId).set({
        //     name,
        //     message
        //   });
        // }
        // writeUserData(1, 'sarkhan', 'Helo, its me')
        console.log('start')
      })
    }
}
</script>

<style>

</style>