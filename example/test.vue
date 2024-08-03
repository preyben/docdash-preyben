<template>
  <div><input v-model="modelValue"> </input></div>
  输入值：{{ modelValue }}
</template>
<script setup>
/**
 * @module UI组件/测试
 */
/**
 * @function pb-test
 * @param {string} value - 通过v-model绑定
 * @example <caption>使用案例</caption>
 *   <pb-test v-model="text"/>
 * @example <caption>使用案例-script</caption>
 * {
 *   // 案例名后加-script, 顺序不能搞错, 会作为option api的配置项
 *   // 使用script时，案例的内容开头需自己对齐
 *   data() {
 *     return {
 *       text: '测试输入框',
 *     }
 *   }
 * }
 */

const modelValue = defineModel();
</script>
