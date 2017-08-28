<template>
  <div>
    <div class="row header">
        <div class="col-md-12 header text-center">
        <h4>User Profile</h4>
        </div>
    </div>
    <div class="row content">
        <div v-if="user.email">
            <p>Email: {{ user.email }}</p>
            <p>Display Name: {{ user.displayName }}</p>
            <button class="btn btn-primary" @click="logout">Logout</button>
        </div>
        <div v-else>
            <div class="form-group">
                <label for="">Email</label>
                <input class="form-control" type="text" placeholder="Email" v-model="registerInfo.email">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="registerInfo.password">
            </div>
            <div class="form-group">
                <label for="">Firstname</label>
                <input type="text" class="form-control" placeholder="Firstname" v-model="registerInfo.firstname">
            </div>
            <div class="form-group">
                <label for="">Lastname</label>
                <input type="text" class="form-control" placeholder="Lastname" v-model="registerInfo.lastname">
            </div>
            <button class="btn btn-primary" @click="register">Register</button>
            <button class="btn btn-primary" @click="login">Login</button>
        </div>
        <p class="text-danger">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import Firebase from '@/firebase'
export default {
    data() {
        return {
            user: {},
            registerInfo: {},
            message: ''
        }
    },
    methods: {
        login() {
            Firebase.auth().signInWithEmailAndPassword(this.registerInfo.email, this.registerInfo.password).catch((error) => {
                this.message = error.message
            })
        },
        logout() {
            Firebase.auth().signOut()
        },
        register() {
            Firebase.auth().createUserWithEmailAndPassword(this.registerInfo.email, this.registerInfo.password)
            .catch((error) => {
                this.message = error.message
            })
        }
    },
    created() {
        Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.user = user;
        } else {
            this.user = {}
        }
        });
    }
}
</script>

<style>

</style>
