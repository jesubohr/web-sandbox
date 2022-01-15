import './style.css';

const $ = (selector) => document.querySelector(selector);

const PREVIEW = $('#sandbox-preview');
const htmlCode = $('#sandbox-html');
const cssCode = $('#sandbox-css');
const jsCode = $('#sandbox-js');

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

function updatePreview () {
   const HTML = htmlCode.value;
   const CSS = cssCode.value;
   const JS = jsCode.value;

   const DOC = createDOC(HTML, CSS, JS);
   PREVIEW.setAttribute('srcdoc', DOC);
}

function createDOC (HTML, CSS, JS) {
   return `
   <!DOCTYPE html>
   <html>

   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sandbox Preview</title>
      <style type="text/css">
         ${CSS}
      </style>
   </head>

   <body>
      ${HTML}
      <script type="module">
         ${JS}
      </script>
   </body>

   </html>
   `;
}