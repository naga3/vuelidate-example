<template>
  <p>
    <input v-model="v$.name1.$model">
    {{ v$.name1.$errors[0]?.$message }}
  </p>
  <p>
    <input v-model="v$.name2.$model">
    {{ v$.name2.$errors[0]?.$message }}
  </p>
</template>

<script lang="ts">
import { ref } from "vue"
import useVuelidate from "@vuelidate/core"
import {helpers, minLength, required} from "@vuelidate/validators"

export default {
   name: "CustomMessage",
  setup() {
    const name1 = ref("")
    const name2 = ref("")
    const rules = {
      name1: {
        required: helpers.withMessage("名前を入れてね", required)
      },
      name2: {
        required: helpers.withMessage(
            ({ $params }: any) => `名前の長さは${$params.min}文字以上にしてね`, minLength(4)
        )
      }
    }
    const v$ = useVuelidate(rules, { name1, name2 })
    return { v$ }
  }
}
</script>
