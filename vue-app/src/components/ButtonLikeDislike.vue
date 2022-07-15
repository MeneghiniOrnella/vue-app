<template>
    <button @click="actionLikeButton({ likeDislike: likeDislike, num: 1 })">{{ likeButton }}</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: {
        likeDislike: Boolean
    },
    computed: {
        likeButton(){
            return this.likeDislike ? 'like' : 'dislike'
        }
    },
    methods: {
        ...mapActions(['actionLikeButton'])
    }
}
</script>