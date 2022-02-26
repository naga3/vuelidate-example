<template>
  <p>
    <input v-model="v$.name1.$model" placeholder="Type Mario">
    {{ v$.name1.$errors[0]?.$message }}
  </p>
  <p>
    <input v-model="v$.name2.$model" placeholder="Type Luigi">
    {{ v$.name2.$errors[0]?.$message }}
  </p>
  <p>
    <input v-model="v$.name3.$model" placeholder="Type Peach">
    {{ v$.name3.$errors[0]?.$message }}
  </p>
</template>

<script lang="ts">
import { ref } from "vue"
import useVuelidate from "@vuelidate/core"
import {helpers} from "@vuelidate/validators";

const isMario = (value: string) => value === "Mario"

const is = (param: string) =>(value: string) => value === param

const isFamily = (value: string, siblings: any) => {
  const mario = isMario(siblings.name1.value)
  const luigi = is("Luigi")(siblings.name2.value)
  return mario && luigi && value === "Peach"
}

export default {
  name: "CustomValidator",
  setup() {
    const name1 = ref("")
    const name2 = ref("")
    const name3 = ref("")
    const rules = {
      name1: {
        isMario: helpers.withMessage("name is not Mario", isMario)
      },
      name2: {
        isLuigi: helpers.withMessage("name is not Luigi", is("Luigi"))
      },
      name3: {
        isFamily: helpers.withMessage("Mario family is not complete", isFamily)
      }
    }
    const v$ = useVuelidate(rules, { name1, name2, name3 })
    return { v$ }
  }
}
</script>
