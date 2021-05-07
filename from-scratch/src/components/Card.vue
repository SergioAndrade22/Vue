import { Component } from 'vue-property-decorator';
<template>
    <div>
        <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
            Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
            content.
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { BCard, BCardText, BLink } from 'bootstrap-vue'

Vue.component('b-card', BCard)
Vue.component('b-card-text', BCardText)
Vue.component('b-link', BLink)

@Component
export default class Card extends Vue {

}
</script>

<style>

</style>
