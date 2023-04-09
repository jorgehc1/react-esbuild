import esbuild from "esbuild";
import {exec} from "child_process";
import * as fs from "fs";
import path from 'path';
import {fileURLToPath} from 'url';
import express from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import svgr from "esbuild-plugin-svgr";
import {sassPlugin} from "esbuild-sass-plugin";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const host = "localhost";
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

if(process.argv[2] && process.argv[2] === '-build') {
    console.log('Building application...');
    await esbuild.build({
        entryPoints: ['./src/styles/app.scss',],
        bundle: true,
        minify: true,
        minifyWhitespace: true,
        sourcemap: true,
        metafile: true,
        plugins: [
            //inlineImage(),
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
        entryPoints: ['./src/index.tsx'],
        charset: 'utf8',
        bundle: true,
        sourcemap: true,
        minify: true,
        minifyWhitespace: true,
        platform: "node",
        format: 'esm',
        allowOverwrite: true,
        plugins: [
        ],
        external: ['/images/*'],
        define:{
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env.DEBUG": JSON.stringify("false"),
        },
        loader:{
            ".png":"dataurl",
            ".woff":"dataurl",
            ".woff2":"dataurl",
            ".eot":"dataurl",
            ".ttf":"dataurl",
            ".svg":"dataurl",
            ".json": "copy"
        },
        outfile: "dist/js/app.js"
    });
    
    fs.copyFile('public/index.html', 'dist/index.html', (err) => {
        if (err) throw err;
        console.log('Copying index.html file...');
    });
    
    fs.copyFile('public/favicon.ico', 'dist/favicon.ico', (err) => {
        if (err) throw err;
        console.log('Copying favicon.ico file...');
        console.log('Building completed...');
    });
} else if(process.argv[2] && process.argv[2] === '-start'){
    console.log('Starting application...');
    await esbuild.build({
        entryPoints: ['./src/styles/app.scss',],
        bundle: true,
        color: true,
        plugins: [
            //inlineImage(),
            sassPlugin({
              async transform(source) {
                  const {css} = await postcss([autoprefixer]).process(source,{from: undefined});
                  return css;
              },
            }),
        ],
        outfile: "public/css/app.css",
    });
      
    let ctx = await esbuild.context({
        entryPoints: ['./src/index.tsx'],
        charset: 'utf8',
        bundle: true,
        sourcemap: true,
        platform: "node",
        format: 'esm',
        allowOverwrite: true,
        plugins: [
        ],
        external: ['/images/*'],
        define:{
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.DEBUG": JSON.stringify("true")
        },
        loader:{
            ".png":"dataurl",
            ".woff":"dataurl",
            ".woff2":"dataurl",
            ".eot":"dataurl",
            ".ttf":"dataurl",
            ".svg":"dataurl",
            ".json": "copy"
        },
        outfile: "public/js/app.js"
    });
      
    ctx.rebuild();
    ctx.dispose();

    const app = express();
    app.use(express.static(path.join(__dirname, "public")));

    app.use(createProxyMiddleware("/graphql", {target:"http://127.0.0.1:45222"}));

    const renderIndex = (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/index.html"));
    }

    app.get('/*', renderIndex);

    app.listen(port, host, () => {
        let msg = `Listening on: http://${host}:${port}`;
        console.log(msg);
    });

} else if(process.argv[2] && process.argv[2] === '-serve'){

    exec(uri_prod, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

    console.log(`Running at ${host}:${port}...`);
} else {
    console.log('Flag is not supported.');
}