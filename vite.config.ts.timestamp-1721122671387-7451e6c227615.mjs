// vite.config.ts
import Vue from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.3_vue@3.4.31/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "node:path";
import UnoCSS from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.39_vite@5.3.3/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.11.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unplugin-vue-components@0.27.2_vue@3.4.31/node_modules/unplugin-vue-components/dist/vite.js";
import VueMacros from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unplugin-vue-macros@2.9.5_@vueuse+core@10.11.0_esbuild@0.20.2_typescript@5.5.3_vite@5.3.3_vue@3.4.31/node_modules/unplugin-vue-macros/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unplugin-vue-router@0.8.8_vue-router@4.4.0_vue@3.4.31/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/unplugin-vue-router@0.8.8_vue-router@4.4.0_vue@3.4.31/node_modules/unplugin-vue-router/dist/vite.mjs";
import { defineConfig } from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10/node_modules/vite/dist/node/index.js";
import VueDevTools from "file:///C:/Code/koi-anniversary/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.5_vite@5.3.3_vue@3.4.31/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "C:\\Code\\koi-anniversary";
var vite_config_default = defineConfig({
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "@/": `${path.resolve(__vite_injected_original_dirname, "public")}/`
    }
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true
          }
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: true,
      dirs: [
        "./src/composables"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
    VueDevTools({
      launchEditor: "code-insiders"
    })
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxDb2RlXFxcXGtvaS1hbm5pdmVyc2FyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcQ29kZVxcXFxrb2ktYW5uaXZlcnNhcnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0NvZGUva29pLWFubml2ZXJzYXJ5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxuXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBWdWVNYWNyb3MgZnJvbSAndW5wbHVnaW4tdnVlLW1hY3Jvcy92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJzAuMC4wLjAnXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgICAgJ0AvJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpfS9gLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBWdWVNYWNyb3Moe1xuICAgICAgZGVmaW5lT3B0aW9uczogZmFsc2UsXG4gICAgICBkZWZpbmVNb2RlbHM6IGZhbHNlLFxuICAgICAgcGx1Z2luczoge1xuICAgICAgICB2dWU6IFZ1ZSh7XG4gICAgICAgICAgc2NyaXB0OiB7XG4gICAgICAgICAgICBwcm9wc0Rlc3RydWN0dXJlOiB0cnVlLFxuICAgICAgICAgICAgZGVmaW5lTW9kZWw6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICBWdWVSb3V0ZXIoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gYWRkIGFueSBvdGhlciBpbXBvcnRzIHlvdSB3ZXJlIHJlbHlpbmcgb25cbiAgICAgICAgICAndnVlLXJvdXRlci9hdXRvJzogWyd1c2VMaW5rJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgZGlyczogW1xuICAgICAgICAnLi9zcmMvY29tcG9zYWJsZXMnLFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgVW5vQ1NTKCksXG4gICAgVnVlRGV2VG9vbHMoe1xuICAgICAgbGF1bmNoRWRpdG9yOiAnY29kZS1pbnNpZGVycycsXG4gICAgfSksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0XG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sZUFBZTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGlCQUFpQjtBQVh4QixJQUFNLG1DQUFtQztBQWF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLLENBQUM7QUFBQSxNQUN2QyxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLFFBQVEsQ0FBQztBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsVUFDUCxRQUFRO0FBQUEsWUFDTixrQkFBa0I7QUFBQSxZQUNsQixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBO0FBQUEsSUFHVixXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFRSxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELE9BQU87QUFBQSxJQUNQLFlBQVk7QUFBQSxNQUNWLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFHQSxNQUFNO0FBQUEsSUFDSixhQUFhO0FBQUEsRUFDZjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
