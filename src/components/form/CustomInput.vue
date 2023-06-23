<template>
  <div class="custom-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue || value"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{ 'is-invalid': errorMessage }"
      :pattern="pattern"
      :id="id"
      :checked="isChecked"
      @click="handleClick"
    />
    <div v-if="errorMessage" class="error-text">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    errorMessage: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      if (this.type === 'radio') {
        this.$emit('update:modelValue', this.value)
      }
    }
  }
}
</script>

<style scoped>
.custom-input {
  padding: 0 !important;
}
.custom-input input {
  margin-bottom: 20px !important;
}
.custom-input input.is-invalid {
  border-color: #900;
  background-color: #fdd;
}
.custom-input input:focus {
  outline: none;
  background-color: rgba(0, 123, 255, 0.7) !important;
}
.error-text {
  margin-top: -10px !important;
  margin-bottom: 20px !important;
  padding: 0 !important;
  color: #900;
}
</style>
