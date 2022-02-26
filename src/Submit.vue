<template>
  <input v-model="v$.name.$model">
  <button @click="submit">Submit</button>
  {{ v$.name.$errors[0]?.$message }}
</template>

<script lang="ts">
import { ref } from "vue"
import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

export default {
  name: "Submit",
  setup() {
    const name = ref("")
    const rules = {
      name: { required }
    }
    const v$ = useVuelidate(rules, { name })
    const submit = async () => {
      if (await v$.value.$validate()) {
        alert("valid")
      } else {
        alert("invalid")
      }
    }
    return { v$, submit }
  }
}
</script>
