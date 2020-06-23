<template>
    <div>
        <input
            class="slider"
            type="range" 
            :min="min" 
            :max="max" 
            :step="step"
            :value="value"
            @input="$emit('change', Number($event.target.value))"
        >
    </div>
</template>

<script>
  export default {
    name: 'SliderItem',
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 100 },
        step: { type: Number, default: 10 },
        value: { type: Number, default: 50 }
    }
  }
</script>