import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: [`${buildFolder}/js`, `${buildFolder}/css`, `${buildFolder}/img`, 'index.html', `!${buildFolder}/fonts`],
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: '',
};
