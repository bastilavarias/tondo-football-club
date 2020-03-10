<template>
  <div :class="`holder py-10 ${className}`" :style="image ? `background-image: url('${image}');` : `background-color: #fffff;`">
    <h1 class="display-1 font-weight-bold d-block text-center text-capitalize">
      {{title}}
    </h1>
    <div class="separator"></div>
    <h2 class="subtitle-1 d-block text-center" v-if="subtitle">
      {{subtitle}}
    </h2>
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

            subtitle: {
                type: String,
                required: false
            },

            image: {
                required: false
            },

            className: {
                type: String,
                required: false
            }
        }
    };
</script>

