<template>
  <div :class="`${className} ${fontType === 'display-1' ? 'pt-10' : ''}`">
    <h1 :class="`font-weight-bold ${isCentered ? 'text-center' : 'text-left' } ${fontType}`">{{ title }}</h1>
    <template v-if=" hasSeparator">
      <div class="mb-2"></div>
      <div :class="`custom-short-separator ${isCentered ? 'mx-auto' : ''}`"></div>
    </template>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "generic-content-holder",

        props: {
            className: {
                type: String,
                required: false
            },

            title: {
                type: String,
                required: false
            },

            isCentered: {
                type: Boolean,
                required: false
            },

            hasSeparator: {
                type: Boolean,
                required: false
            },

            fontType: {
                type: String,
                required: false
            }
        }
    };
</script>
