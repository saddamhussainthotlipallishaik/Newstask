<template>
    <div>
        <div>
            <Header/>
            <Card />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Card from '@/components/Card'
    export default {
        name:"NewsDashboard",
        components :{
            Header,
            Card
        }
    }
</script>

<style lang="scss" scoped>

</style>