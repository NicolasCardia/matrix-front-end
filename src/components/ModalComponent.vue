<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/Logo_Atech.png" alt="Icon" class="modal-icon"/>
        <span class="close" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button @click="closeModal" class="modal-button">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    title: String,
    message: String,
    visible: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.close {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #aaa;
}

.modal-body {
  margin: 20px 0;
}

.modal-icon {
  width: 120px;
  height: 60px;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.modal-button {
  background-color: #009cb3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.modal-button:hover {
  background-color: #009cb3;
}
</style>
