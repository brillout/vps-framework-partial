import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import type { UserConfig, Plugin } from "vite";
import { resolve } from "path";

const r = (p) => resolve(__dirname, p);

const config: UserConfig = {
  plugins: [react(), ssr(), frameworkBuilder()],
};
export default config;

function frameworkBuilder(): Plugin {
  return {
    name: "vps-framework-builder",
    apply: "build",
    config: (config) => {
      const isSSR = !!config.build.ssr;
      if (isSSR) {
        return configServer();
      } else {
        return {
          esbuild,
        };
      }
    },
  };
}

function configClient(): UserConfig {
  return {
    build: {
      rollupOptions: {
        external: require("./package.json").dependencies,
      },
    },
    esbuild: {
      minify: false,
    },
  };
}
function configServer(): UserConfig {
  return {
    build: {
      rollupOptions: {
        input: {
          "vite-plugin-ssr.config": r("./vite-plugin-ssr.config"),
          components: r("./components"),
          //@ts-ignore
          //'components': await import.meta.resolve('./components')
        },
        /*
      output: {
        //entryFileNames: '[name].js',
  entryFileNames: (chunkInfo) => {
          const preserveFiles = ['pageFiles'];
    console.log(chunkInfo.name)
          const useDefault = preserveFiles.includes(chunkInfo.name);
          return useDefault ? '[name].js' : 'assets/[hash].js';
        },
      }
        //*/
      },
    },
  };
}
