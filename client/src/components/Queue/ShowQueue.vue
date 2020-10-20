<template>
  <div>
    <h1>แสดงรายชื่อการจองคิวทำฟัน</h1>
    <p>ID: {{ queue.id}}</p>
    <p>ชื่อ-นามสกุล : {{ queue.name }} - {{ queue.lastname }}</p>
    <p>วันที่นัด: {{ queue.appointment_date }}</p>
    <p>เวลาที่นัด: {{ queue.appointment_time }}</p>
    <p>เบอร์โทร: {{ queue.tel }}</p>
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
</style>