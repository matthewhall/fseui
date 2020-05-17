<template>
  <div
    class="input">
    <label
      class="input__label block mb-1 text-grey-600"
      :for="id">
      {{ label }}
    </label>
    <input
      class="input__input rounded text-lg leading-none w-full outline-none"
      v-model="internalModel"
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'input',
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    model: {
      type: [String, Number, Object, Array, Boolean],
      default: undefined
    },
    placeholder: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    internalModel: {
      get() {
        return this.model;
      },
      set(val) {
        this.$emit('update:model', val);
      }
    }
  }
}
</script>

<style lang="scss">
.input {
  &__input {
    box-shadow: 0 0 0 2px transparent inset,
      0 0 0 1px theme('colors.grey.300') inset;
    padding: 8px;
    transition: box-shadow .15s;

    &:focus {
      box-shadow: 0 0 0 2px theme('colors.blue') inset,
        0 0 0 1px theme('colors.grey.300') inset;
    }
  }
}
</style>
