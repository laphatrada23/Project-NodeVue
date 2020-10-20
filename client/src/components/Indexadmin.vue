<template>

  <div class="cen p-3 mb-2 bg-dark   text-white">
      <br><br><br><br><br>
                    <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121228322_702885240585522_8979553980258856469_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_eui2=AeFl_1u4MvrNke-CzEydGoPy7I6O3-uxcnvsjo7f67Fye6hI_uoG1w7PhvWKTqOxlDj8qiLJ1KkPxm6IbMdU_Mqd&_nc_ohc=fQ5HzarlgK4AX95uO8X&_nc_ht=scontent.fphs2-1.fna&oh=75d2595575d6885ed94c7431ff9395bd&oe=5FAE1655">

    <br>
     <p>
      <button class="btn btn-outline-warning" v-on:click="navigateTo('/queues')">
        <h5>ผู้มาลงชื่อทำฟันทั้งหมด</h5>
      </button>
    </p>
    <p>
      <button class="btn btn-outline-warning" v-on:click="navigateTo('/users')">
        <h5>ดูผู้ดูแลทั้งหมด</h5>
      </button>
    </p>
   
     <p>
      <button class="btn btn-outline-warning" v-on:click="navigateTo('/user/create')"><h5>เพิ่มผู้ดูแล</h5>
      </button>
    </p>
    <p>
      <button class="btn btn-danger" v-on:click="logout">Logout</button>
    </p>
    <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.cen {
  text-align: center;
}

</style>