## 模板编写人 github/preyben

## 1、需要安装jsdoc
## 2、package.json设置：
vue3 + vite:
{
  "scripts": {
    "docs": "jsdoc -c jsdoc.json --debug",
    "build:lib": "pnpm docs && vite build --mode=docs",
    "build": vite build && pnpm build:lib",
  },
}

vue2 + cli:
{
  "scripts": {
    "docs": "jsdoc -c jsdoc.json",
    "build:lib": "npm run docs && vue-cli-service build --target lib --name my-lib --dest jsdoc/lib --entry src/umd.js",
    "build": vue-cli-service build && npm run build:lib",
  },
}

## 3、拷贝jsdoc.json 放到自己项目和package.json相同层级的目录，然后修改相关配置

## 4、注释参考
js文件注释参考/example/test.js
vue文件注释参考/example/test.vue

## 5、打包自己项目的组件库的设置
vite.config.js:
// 假设没有其他配置
let build = {};
if (process.argv.find(i => i.includes('--mode=docs'))) {
  build = {
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: "lib.js",
          dir: "dist/es",
          preserveModulesRoot: "src",
        },
        {
          format: "umd",
          name: "MyLib",
          entryFileNames: "lib.js",
          dir: "jsdoc/lib",
          preserveModulesRoot: "src",
        },
      ]
    },
    lib: {
      // 入口为组件安装入口
      entry:
        path.resolve(
          __dirname, './src/umd.js'),
    },
  };
}
export default defineConfig({
  build,
})

vue.config.js:
parallel设置为false, 如果需要生产为true则动态判断parallel = !process.argv.find(i => i.includes('jsdoc/lib')), 主要判断命令是否包含目标路径

## 6、./src/umd.js配置
vue3:
import Test from '@/component/test.vue';
const components = [Test];
const register = {
  install(app) {
    components.forEach(i => {
      app.component(i.name, i)
    })
  }
}
export default register

vue2:
import Test from '@/component/test.vue';
const components = [Test];
const register = {
  install(app) {
    components.forEach(i => {
      app.component(i.name, i)
    })
  }
}
Vue.use(register);
