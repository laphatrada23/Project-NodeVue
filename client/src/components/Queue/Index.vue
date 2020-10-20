<template>
  <div class="cen p-3 mb-2 bg-dark  text-white">
    <br><br>
              <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121228322_702885240585522_8979553980258856469_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_eui2=AeFl_1u4MvrNke-CzEydGoPy7I6O3-uxcnvsjo7f67Fye6hI_uoG1w7PhvWKTqOxlDj8qiLJ1KkPxm6IbMdU_Mqd&_nc_ohc=fQ5HzarlgK4AX95uO8X&_nc_ht=scontent.fphs2-1.fna&oh=75d2595575d6885ed94c7431ff9395bd&oe=5FAE1655">
    <h6 >จำนวนผู้ลงชื่อทำฟัน {{queues.length }}</h6><br>
    <div v-for="queue in queues" v-bind:key="queue.id">
      <p>ID: {{ queue.id}}</p>
      <p>ชื่อ-นามสกุล : {{ queue.name }} - {{ queue.lastname }}</p>
      <p>วันที่นัด: {{queue.appointment_date }}</p>
      <p>เวลาที่นัด: {{ queue.appointment_time }}</p>
      <p>เบอร์โทร: {{ queue.tel }}</p>
      <p>
        
        <button class="btn btn-primary" v-on:click="navigateTo('/queue/edit/' +queue.id)">
          แก้ไขข้อมูล
        </button>
        <button class="btn btn-danger" v-on:click="deleteQueue(queue)">ลบข้อมูล</button>
      </p>
      <br><br>
    </div>
  </div>
</template>
<script>
import QueueService from "@/services/QueueService";
export default {
  data() {
    return {
       queues: [],
    };
  },
  async created() {
    this.queues = (await QueueService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteQueue(queue) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await QueueService.delete(queue);
          this.queues = (await QueueService.index()).data;
        } catch (err) {
          console.log(err);
        }
      }
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