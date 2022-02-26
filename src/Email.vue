<template>
  <div>
    <input v-model="v$.email1.$model">
    <div v-for="error of v$.email1.$errors" :key="error.$uid">{{ error.$message }}</div>
  </div>
  <div>
    <input v-model="v$.email2.$model">
    <div v-for="error of v$.email2.$errors" :key="error.$uid">{{ error.$message }}</div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
import useVuelidate from "@vuelidate/core"
import { email, sameAs } from "@vuelidate/validators"

export default {
  name: "Email",
  setup() {
    const email1 = ref("")
    const email2 = ref("")
    const rules = {
      email1: { email },
      email2: { email, sameAs: sameAs(email1) }
    }
    const v$ = useVuelidate(rules, { email1, email2 })
    v$.value.email2.$touch()
    return { v$ }
  }
}
</script>
