<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">
        @{{user.username}}
      </h1>

      <span class="user-profile__admin-badge" v-if="user.isAdmin">Admin</span>
      <span class="user-profile__admin-badge" v-else-if="user.isCreator">Creator</span>
      <span class="user-profile__admin-badge" v-else>Reader</span>

      <div class="user-profile__follower-count">
        <span><strong>Followers </strong>{{followers}}</span>
        <button @click="followUser()">Follow</button>
      </div>

      <hr>

      <form class="user-profile__create-twoot" @submit.prevent="createTwoot()">
        <label for="newTwoot"><strong>New Twoot</strong></label>
        <textarea name="newTwoot" id="newTwoot" rows="4" class="newTwoot" v-model="newTwoot.content"></textarea>

        <div class="user-profile__create-twoot-type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select name="newTwootType" id="newTwootType" v-model="newTwoot.type">
            <option v-for="(option, index) of twootTypes" :key="index" :value="option.value" 
                    :name="option.value"
              >
              {{option.value}}
            </option>
          </select>
        </div>

        <button>Twoot!</button>
      </form>
    </div>

    <div class="user-profile__twoots-wrapper">
      <twoot :key="twoot.id" v-for="twoot in user.twoots" :username="user.username" 
              :twoot="twoot" @favourite="toggleFavourite($event)"></twoot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import Twoot from './Twoot.vue';

@Options({
  name: 'UserProfile',
  components: {
    Twoot,
  },
})
export default class UserProfile extends Vue {
  followers = 0;
  user = {
    id: 1,
    username: '_MitchellRonmy',
    firstName: 'Mitchell',
    lastName: 'Ronmy',
    email: 'mitchellronmy@theearthissquare.com',
    isAdmin: true,
    isCreator: false,
    isReader: false,
    twoots: [
      {
        id: 1,
        content: 'Twotter is amazing'
      },
      {
        id: 2,
        content: 'Subscribe to The Earth is Square!'
      }
    ]
  };
  twootTypes = [{ value: 'draft' }, { value: 'instant' }];
  newTwoot = {
    content: '',
    type: 'instant'
  }

  get fullName() {
    return  `${this.user.firstName} ${this.user.lastName}`;
  }

  followUser() {
    this.followers++;
  }

  mounted() {
    this.followUser(); 
  }

  @Watch('followers')
  followersWatch(newCount: number, oldCount: number){
    if (oldCount < newCount)
      console.log(`${this.user.username} has gained a follower!!!`);
  }

  toggleFavourite(id: number): void {    
    console.log(`Marked twoot ${id} as favourite!`);    
  }

  createTwoot() {
    if (this.newTwoot.content === '')
      alert('Try typping something before twooting!');
    else if (this.newTwoot.type === 'draft')
      alert('Not yet supported :(');
    else {
      this.user.twoots.unshift({id: this.user.twoots.length + 1, ...this.newTwoot});
      this.newTwoot = {content: '', type:'instant'};
    }
  }
}
</script>

<style scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  text-align: left;
}

.user-profile__username {
  font-size: 2.1em;
  margin-bottom: .2em;
}

.user-profile__admin-badge {
  margin-bottom: 1em;
  font-style: italic;
  font-weight: 200;
  background-color: purple;
  color: papayawhip;
  margin-right: auto;
  padding: .1em .4em;
  border-radius: 4px;
}

.user-profile__follower-count {
  display: flex;
  font-size: 1.2em;
  font-weight: 700;
  justify-content: space-between;
}

.user-profile__follower-count span{
  text-decoration: underline;
}

.user-profile__create-twoot {
  display: flex;
  flex-direction: column;
}

hr {
  background-color: #d3d3d388;
  height: .12em;
  width: 100%;
  border: none;
  outline: none;
}

select {
  text-transform: capitalize;
}
</style>