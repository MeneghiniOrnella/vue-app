<template>
    <div class="article">
        <Text title="I ❤️ it" msg="It's amazing" />
        <h2><span>{{ $route.params.id }} </span>{{ article.title }}</h2>
        <!-- <p>{{ article.id }}</p><br/> -->
        <p>{{ article.body }}</p>
    </div>
</template>

<script>
import Text from '@/components/Text.vue';

export default{
    components: {
        Text
    },
    data() {
        return {
            article: {}
        }
    },
    methods: {
        async consumeArticle(){
            try{
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${ this.$route.params.id }`);
                const object = await data.json(); 
                this.article = object;
            } catch(error){
                console.log(error);
            }
        }
    },
    created() {
        this.consumeArticle()
    }
}
</script>

<style>
.article{
    margin-left: 5%;
}
span{
    font-size: 20px;
    color: rgb(63, 63, 172);
}
h2{
    text-transform: capitalize;
}

</style>