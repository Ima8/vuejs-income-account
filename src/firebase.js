import Firebase from 'firebase'
import Vue from 'vue'
import VueFire from 'vuefire'
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
Firebase.initializeApp(config)

Vue.use(VueFire)

export default Firebase