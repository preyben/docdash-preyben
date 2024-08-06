<template>
  <div><input v-model="modelValue"> </input></div>
  输入值：{{ modelValue }}
</template>
<script setup>
/**
 * @module UI组件
 */
/**
 * @summary 示范组件
 * @function pb-test
 * @param {string} value - 通过v-model绑定
 * @param {Object} config - 配置对象
 * @param {string} [config.color="#fff"] - 颜色
 * @param {string} [config.size] - 大小
 * @param {method} setValue -
 * 设置值的方法
 * 参数(value)
 * @listens change(value) 值更新事件
 * @description
 * 自定义描述 
 * @example <caption>使用案例</caption>
 *   <pb-test v-model="text"/>
 * @example <caption>使用案例-script</caption>
 * {
 *   // 案例名后加-script, 顺序不能搞错, 会作为option api的配置项
 *   // 使用script时，案例的内容开头需自己对齐
 *   // 案例名后加-mobile会以手机iframe形式显示，注意加script需要这样写使用案例-mobile-script
 *   data() {
 *     return {
 *       text: '测试输入框',
 *     }
 *   }
 * }
 */

const modelValue = defineModel();
</script>
