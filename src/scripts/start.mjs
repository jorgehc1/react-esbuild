import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

await esbuild.build({
  entryPoints: ['./src/styles/app.scss',],
  bundle: true,
  color: true,
  plugins: [
    sassPlugin({
        async transform(source) {
            const { css } = await postcss([autoprefixer]).process(source,{from: undefined});
            return css;
        },
    })
  ],
  outfile: "public/css/app.css",
});

let ctx = await esbuild.context({
    entryPoints: ['./src/index.jsx'],
    bundle: true,
    color: true,
    outfile: "public/js/app.js"
});

await ctx.serve({
    host: process.env.REACT_APP_HOST,
    port: process.env.REACT_APP_PORT,
    servedir: 'public/',
}).then(result => {
  let host = result.host;
  let port = result.port;
  console.log(`Webservice listening on ${host}:${port}`);
}).catch(result => {
  console.log(result);
  process.exit(1);
});