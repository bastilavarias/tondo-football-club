<template>
  <div class="holder py-10" :style="image ? `background-image: url('${image}');` : `background-color: #fffff;`">
    <h1 class="display-1 font-weight-bold d-block text-center">
      {{title}}
    </h1>
    <div class="separator"></div>
    <div class="mb-5"></div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "generic-holder",

        props: {
            title: {
                type: String,
                required: true
            },

            image: {
                required: false
            }
        }
    };
</script>

