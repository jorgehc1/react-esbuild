import * as fs from 'fs';
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

await esbuild.build({
  entryPoints: ['./src/styles/app.scss',],
  bundle: true,
  minify: true,
  sourcemap: true,
  metafile: true,
  plugins: [
    sassPlugin({
        async transform(source) {
            const { css } = await postcss([autoprefixer]).process(source,{from: undefined});
            return css;
        },
    })
  ],
  outfile: "dist/css/app.css",
});

await esbuild.build({
  entryPoints: ['./src/index.jsx',],
  bundle: true,
  minify: true,
  sourcemap: true,
  metafile: true,
  outfile: "dist/js/app.js",
});

fs.copyFile('public/index.html', 'dist/index.html', (err) => {
  if (err) throw err;
  console.log('Build successful!...');
});