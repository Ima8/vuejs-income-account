<template>
  <div>
    <div class="row header">
        <div class="col-md-12 header text-center">
            <h1>Add Expense</h1>
        </div>
    </div>
    <div class="row content">
        <div class="form-group col-md-8">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" class="form-control" placeholder="Grocery, Credit Card, Bill">
        </div>
        <div class="form-group col-md-8">
            <label for="cost">Cost</label>
            <input type="text" id="cost" v-model="cost" class="form-control" placeholder="1000">
        </div>
        <div class="form-group col-md-8">
            <label for="date">Date</label>
            <select class="form-control" id="date" v-model="date">
                <option value="2016-08-30">2016-08-30</option>
                <option value="2016-08-29">2016-08-29</option>
                <option value="2016-08-28">2016-08-28</option>
                <option value="2016-08-27">2016-08-27</option>
                <option value="2016-08-26">2016-08-26</option>
            </select>
        </div>
        <div class="form-group col-md-8">
            <button class="btn btn-primary" @click="add">Submit</button>
        </div>
    </div>
  </div>
</template>

<script>
import Firebase from '@/firebase'
const db = Firebase.database()

export default {
    data() {
        return {
            date: '2016-08-30',
            cost: '',
            name: ''
        }
    },
    firebase: {
        items: db.ref('items')
    },
    methods: {
        add() {
            this.$firebaseRefs.items.push({
                date: this.date,
                cost: this.cost,
                name: this.name
            })
            alert('Added item')
        }
    }
}
</script>

<style>

</style>
