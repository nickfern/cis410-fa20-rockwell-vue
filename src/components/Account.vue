<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Orders</h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later.</p>

        <table v-if="ordersByUser" class="table">
            <thead>
                <th>Concert Name</th>
                <th>Number of Performers</th>
                <th>Venue</th>
            </thead>
            <tbody>
                <tr v-for="thisOrder in ordersByUser" :key="thisOrder.TicketID">
                    <th><router-link :to="`/Concert/${thisOrder.ConcertFK}`">{{thisOrder.Name}}</router-link></th>
                    <th>{{thisOrder.NumberPerformers}}</th>
                    <th>{{thisOrder.Venue}}</th>
                </tr>
            </tbody>
        </table>
     </div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            ordersByUser: null,
            accountError: false
        }
    },
    computed: {
        firstName(){
            return this.$store.state.user.FirstName
        }
    },
    created(){
        axios.get("/Order1/me", {
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is the orders/me response", response)
            this.ordersByUser = response.data
            })
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>


<style scoped>

</style>