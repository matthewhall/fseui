<template>
  <div
    class="input">
    <label
      class="input__label block mb-1 text-grey-600"
      :class="{ 'sr-only': hideLabel }"
      :for="id">
      {{ label }}
    </label>
    <input
      class="input__input"
      spellcheck="false"
      v-model="internalValue"
      :class="inputClasses"
      :type="inputType"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      @blur="(event) => $emit('blur', event)"
      @change="(event) => $emit('change', event)"
      @focus="(event) => $emit('focus', event)"
      @keydown="(event) => $emit('keydown', event)" />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  mode: {
    prop: 'value',
    event: 'input'
  },
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
    placeholder: {
      type: [String, Number],
      default: ''
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    inputClasses: {
      type: String,
      default: 'rounded text-lg leading-none w-full outline-none'
    },
    value: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
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
