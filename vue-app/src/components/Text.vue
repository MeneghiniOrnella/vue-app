<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default{
    name: 'Text',
    props: {
        title: String,
        msg: String
    }
}
</script>

<style scoped>
h1,p{
    color: rgb(124, 82, 2);
    font-weight: bold;
    text-transform: uppercase;
}
</style>