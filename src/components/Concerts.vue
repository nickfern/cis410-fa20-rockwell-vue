<template>
    <div>
        <h1>Concerts</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Concert Name</th>
                    <th>Number of Performers</th>
                    <th>Venue</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisConcert in concerts" :key="thisConcert.ConcertID">
                    <th>{{thisConcert.Name}}</th>
                    <td>{{thisConcert.NumberPerformers}}</td>
                    <td>{{thisConcert.Venue}}</td>
                    <td>
                        <router-link :to="`/concerts/${thisConcert.ConcertID}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
            
        </table>
     </div>
</template>


<script>
export default {
    computed: {
        concerts(){return this.$store.state.concerts}
    }
}
</script>


<style scoped>

</style>