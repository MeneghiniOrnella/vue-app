<template>
    <div>
        <Text title="I ❤️" msg="They are amazing" />
        <p>{{ $route.params.id }}</p>
        <h2>{{ article.title }}</h2>
        <p>{{ article.id }}</p><br/>
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

</style>