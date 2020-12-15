<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create a Ticket Order</h4> 
                     <form id="order-form" @submit.prevent="submitOrder">
                        <div class="form-group">
                             <label for="admissioninput">Admission Type</label> 
                             <input type="number" id="admissioninput" name=" admission" min="1" max="2" required="required" class="form-control" v-model="AdmissionType">
                        </div> 
                        <div class="form-group">
                            <label for="dateinput">Order Date</label> <textarea row="3" id="dateinput" name="orderdate" required="required" class="form-control" v-model="OrderDate"></textarea>
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Submit Order</button> 
                        
                        <button v-on:click="cancelOrder" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            AdmissionType: null,
            OrderDate: "",
            errorMessage: null,
        }
    },
    methods:{
        submitOrder(){
            const myOrder={
                AdmissionType: this.AdmissionType,
                OrderDate: this.OrderDate,
                ConcertFK: this.$route.params.pk
            };

            console.log("here is the order", myOrder)
            const token = this.$store.state.token;
            axios.post("/Order1",myOrder,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "unable to create an order, please try again later."})
        },
        cancelOrder(){
            this.$router.go(-1)
        }
    }
}
</script>


<style scoped>

</style>