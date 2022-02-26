<template>
  <input v-model="v$.name.$model">
  {{ v$.name.$errors[0]?.$message }}
</template>

<script lang="ts">
import { ref } from "vue"
import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

export default {
  name: "Minimum",
  setup() {
    const name = ref("")
    const rules = {
      name: { required }
    }
    const v$ = useVuelidate(rules, { name })
    return { v$ }
  }
}
</script>
