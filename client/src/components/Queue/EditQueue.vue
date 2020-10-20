<template>
  <div class="cen p-3 mb-2 bg-dark text-white">
    <br><br>
                      <img src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.15752-9/121228322_702885240585522_8979553980258856469_n.png?_nc_cat=103&_nc_sid=ae9488&_nc_eui2=AeFl_1u4MvrNke-CzEydGoPy7I6O3-uxcnvsjo7f67Fye6hI_uoG1w7PhvWKTqOxlDj8qiLJ1KkPxm6IbMdU_Mqd&_nc_ohc=fQ5HzarlgK4AX95uO8X&_nc_ht=scontent.fphs2-1.fna&oh=75d2595575d6885ed94c7431ff9395bd&oe=5FAE1655">

    <h1>แก้ไขการจองคิวทำฟัน</h1><br>
    <form v-on:submit.prevent="editQueue">
      <p>ชื่อ: <input type="text" class="rounded-pill"  v-model="queue.name" /></p>
      <p>นามสกุล: <input type="text" class="rounded-pill" v-model="queue.lastname" /></p>
      <p>วันที่นัด: <input type="text" class="rounded-pill" v-model="queue.appointment_date" /></p>
      <p>เวลาที่นัด: <input type="text" class="rounded-pill" v-model="queue.appointment_time" /></p>
      <p>เบอร์โทร: <input type="text" class="rounded-pill" v-model="queue.tel" /></p>
      <p><button type="submit" class="btn btn-primary">บันทึกการแก้ไข</button></p>
    </form>
    <br><br><br><br><br><br>
  </div>
</template>
<script>
import QueueService from "@/services/QueueService";
export default {
  data() {
    return {
       queue: {
        name: "",
        lastname: "",
        appointment_date: "",
        appointment_time: "",
        tel: "",
      },
    };
  },
  methods: {
    async editQueue() {
      try {
        await QueueService.put(this.queue);
        this.$router.push({
          name: "queues",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let queueId = this.$route.params.queueId;
      this.queue = (await QueueService.show(queueId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.cen {
  text-align: center;
}
input {
background-color: #fcf8b6;
}
button{
  background-color:#27d96b;
}

</style>