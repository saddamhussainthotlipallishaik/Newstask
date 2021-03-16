<template>
    <div class="bg-light">
        <div>
            <!-- <Header/> -->
            <Card @addfav="arrow" />
        </div>
    </div>
</template>

<script>

// import Header from '@/components/Header'
import Card from '@/components/Card'
    export default {
        name:"NewsDashboard",
        components :{
            // Header,
            Card,
            
        },
        data(){
            return {
              
            }
        },
        methods: {
            arrow(e) {
                this.$emit('fav', e)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>