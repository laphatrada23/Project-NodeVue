<template>
  <div class="cen p-3 mb-2 bg-info  text-white">
    <br><br><br><br><br><br>
    <h1>Show user</h1><br>
    <p>id: {{ queue.id }}</p>
    <p>ชื่อ-นามสกุล : {{ queue.name }} - {{ queue.lastname }}</p>
    <p>วันที่นัด: {{ queue.appointment_time }}</p>
    <p>เวลาที่นัด: {{ queue.appointment_date }}</p>
    <p>เบอร์โทร: {{ queue.tel }}</p>
    <br><br><br><br><br><br><br><br><br>
  </div>
</template>
<script>
import QueueService from "@/services/QueueService";
export default {
  data() {
    return {
      queue: null,
    };
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
</style>