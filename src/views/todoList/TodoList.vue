<template>
  {{test}}
</template>

<script lang="ts">
    import {useStore} from '../../store';
    import { ref } from 'vue'
    export default {
        setup() {
            const { state } = useStore();
            console.log(state.TodoModule.count);
            console.log(state.test);
            return { ...state }
        }
    }
</script>
