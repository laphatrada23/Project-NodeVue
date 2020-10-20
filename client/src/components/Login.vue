<template>

  <div class="cen p-3 mb-2 bg-dark text-white">
    <br><br><br><br><br><br>
          <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121228322_702885240585522_8979553980258856469_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_eui2=AeFl_1u4MvrNke-CzEydGoPy7I6O3-uxcnvsjo7f67Fye6hI_uoG1w7PhvWKTqOxlDj8qiLJ1KkPxm6IbMdU_Mqd&_nc_ohc=fQ5HzarlgK4AX95uO8X&_nc_ht=scontent.fphs2-1.fna&oh=75d2595575d6885ed94c7431ff9395bd&oe=5FAE1655">

    <h1>User Login</h1> 
    <form v-on:submit.prevent="onLogin">
      <br>
      <div class="col">
      <p>Username: <input type="text" class="rounded-pill" v-model="email" /></p>
       </div>
      <p>Password: <input type="password" class="rounded-pill" v-model="password"/></p><br>
      <p><button type="submit" class="btn btn-outline-warning">Login</button></p>
      <div class="error" v-if="error">{{error}}</div>
    </form>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
  
</template>
<script>
import AuthenService from "@/services/AuthenService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onLogin() {
      try {
        const response = await AuthenService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "Indexadmin",
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>
<style scoped>
.error {
color:red;
}
.cen {
  text-align: center;
}
input {
background-color: #c2ebff;
}

</style>