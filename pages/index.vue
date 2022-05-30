<template>
  <v-date-picker v-model="date" :masks="masks" locale="th" :buddhist="true">
    <template v-slot="{ inputValue, inputEvents }">
      <input class="bg-white border px-2 py-1 rounded" :value="toBE(inputValue)" v-on="inputEvents" />
    </template>
  </v-date-picker>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      masks: {
        input: 'MM/DD/YYYY',
      },
    };
  },
  methods:{
    toBE(input){
      return new Date(input).toLocaleDateString('th-TH');
    }
  }
};
</script>
