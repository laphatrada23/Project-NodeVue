<template>
  <div class="cen p-3 mb-2 bg-dark  text-white">
    <br><br><br>
                  <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121228322_702885240585522_8979553980258856469_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_eui2=AeFl_1u4MvrNke-CzEydGoPy7I6O3-uxcnvsjo7f67Fye6hI_uoG1w7PhvWKTqOxlDj8qiLJ1KkPxm6IbMdU_Mqd&_nc_ohc=fQ5HzarlgK4AX95uO8X&_nc_ht=scontent.fphs2-1.fna&oh=75d2595575d6885ed94c7431ff9395bd&oe=5FAE1655">

    <h1>Create User</h1><br>
    <form v-on:submit.prevent="createUser">
      <p>name: <input type="text" class="rounded-pill" v-model="user.name" /></p>
      <p>lastname: <input type="text" class="rounded-pill" v-model="user.lastname" /></p>
      <p>email: <input type="text" class="rounded-pill" v-model="user.email" /></p>
      <p>password: <input type="text" class="rounded-pill" v-model="user.password" /></p>
      <p><button type="submit" class="btn btn-warning">create user</button></p>
      <br><br><br><br><br><br><br><br>
    </form>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active",
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.cen {
  text-align: center;
}
input {
background-color: #d9fcf9;
}
</style>