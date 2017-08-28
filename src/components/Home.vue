<template>
  <div>
    <div class="row header">
        <div class="col-md-12 header text-center">
        <h4>Total Expense</h4>
        <h1>26000 Baht</h1>
        </div>
    </div>
    <div class="row content">
        <div v-for="(item, index) in items" :key="index">
            <div class="col-xs-4">
                <p>{{ item.date }}</p>
            </div>
            <div class="col-xs-4">
                <p>{{ item.name }}</p>
            </div>
            <div class="col-xs-4">
                <p>{{ item.cost }} <button class="btn btn-danger" @click="remove(item)">X</button></p>
            </div>
        </div>
    <div class="text-center">
        <router-link to="/add" tag="button" class="btn btn-success">Add Expense</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import Firebase from '@/firebase'
const db = Firebase.database()
export default {
    firebase: {
        items: db.ref('items')
    },
    methods: {
        remove(item) {
            this.$firebaseRefs.items.child(item['.key']).remove()
        }
    }
}
</script>

<style>

</style>
