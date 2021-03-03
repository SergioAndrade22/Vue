<template>
  <div class="twoot-item" @click="favouriteTwoot(twoot.id)">
      <div class="user-profile__twoot">
          <div class="twoot-item__user">
              {{username}}
          </div>
          <div class="twoot-item__content">
              {{twoot.content}}
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
    name: 'Twoot',
    emits: [
        'favourite'
    ]
})
export default class Twoot extends Vue{
    @Prop(String) readonly username: string | undefined;
    @Prop(Object) twoot: Object | undefined;

    favouriteTwoot(id: number): void {
        this.$emit('favourite', id);
    }
}
</script>

<style scoped>
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .25s ease;
    width: 350px;
    margin: 1em;
}

.twoot-item:hover {
    transform: scale(1.1, 1.1);
}

.twoot-item__user {
    font-weight: bold;
    text-align: left;
}
</style>