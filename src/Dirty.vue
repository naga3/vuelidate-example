<template>
  <p>
    $dirty state is not updated: <input v-model="state.name1">
    $dirty: {{ v$.name1.$dirty }}
    $invalid: {{ v$.name1.$invalid }}
    $error: {{ v$.name1.$error }}
    $message {{ v$.name1.$errors[0]?.$message }}
  </p>
  <p>
    Using $touch: <input v-model="state.name2" @focus="v$.name2.$reset" @blur="v$.name2.$touch">
    $dirty: {{ v$.name2.$dirty }}
    $invalid: {{ v$.name2.$invalid }}
    $error: {{ v$.name2.$error }}
    $message {{ v$.name2.$errors[0]?.$message }}
  </p>
  <p>
    Using $model: <input v-model="v$.name3.$model">
    $dirty: {{ v$.name3.$dirty }}
    $invalid: {{ v$.name3.$invalid }}
    $error: {{ v$.name3.$error }}
    $message {{ v$.name3.$errors[0]?.$message }}
  </p>
  <p>
    Using $autoDirty: <input v-model="state.name4">
    $dirty: {{ v$.name4.$dirty }}
    $invalid: {{ v$.name4.$invalid }}
    $error: {{ v$.name4.$error }}
    $message {{ v$.name4.$errors[0]?.$message }}
  </p>
</template>

<script lang="ts">
import { reactive } from "vue"
import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

export default {
  name: "Dirty",
  setup() {
    const state = reactive({
      name1: "",
      name2: "",
      name3: "",
      name4: ""
    })
    const rules: any = {
      name1: { required },
      name2: { required },
      name3: { required },
      name4: { required, $autoDirty: true }
    }
    const v$ = useVuelidate(rules, state)
    return { v$, state }
  }
}
</script>
