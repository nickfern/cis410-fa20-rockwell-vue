<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{concert.Name}}</h2>
                <br/>
                <p>Number of Performers: <br/> <strong>{{concert.NumberPerformers}}</strong></p>
                <p>Venue: <br/> <strong>{{concert.Venue}}</strong></p>
                <p>Music Genre: <br/> <strong>{{concert.GenreName}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/concerts/${this.$route.params.pk}/order`">
        <button type="button" class="btn btn-success">Order a Ticket</button>
        </router-link>

        <router-link v-else :to="`/signin`">
        <button type="button" class="btn btn-outline-success">Sign in to order a ticket</button>
        </router-link>
        
     </div>
</template>


<script>
export default {
    computed:{
        concert(){
            var concerts = this.$store.state.concerts;
            var thisConcert = concerts.find((aConcert)=> aConcert.ConcertID == this.$route.params.pk)

            //console.log("here is the movie you want", thisConcert)
            return thisConcert
        },
        auth(){return this.$store.state.token}
    }
}
</script>


<style scoped>

</style>