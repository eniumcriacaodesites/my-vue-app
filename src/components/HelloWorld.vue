<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1 class="mb-4">{{ msg }}</h1>

  <v-card
    class="d-inline"
    :class="['text-h1', count >= 1 ? 'text-teal' : count == 0 ? 'text-grey' : 'text-red']"
  >
    {{ count }}
  </v-card>

  <div class="card">
    <v-btn
      prepend-icon="$vuetify"
      variant="tonal"
      @click="count++"
      color="success"
      size="x-large"
      class="mb-2 mr-2"
    >
      Incrementar
    </v-btn>

    <v-btn
      prepend-icon="$vuetify"
      variant="tonal"
      @click="count--"
      color="info"
      size="x-large"
      class="mb-2"
    >
      Decrementar
    </v-btn>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
