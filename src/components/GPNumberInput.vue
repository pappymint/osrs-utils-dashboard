<template>
  <InputNumber v-model="value" :inputId="props.inputId" :class="props.class" suffix=" gp" />
</template>

<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber'

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  inputId: { type: String, required: true },
  class: { type: String, default: '' }
})

const value = defineModel()
</script>

<style lang="less" scoped></style>
