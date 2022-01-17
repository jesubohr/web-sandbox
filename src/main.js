import { encode, decode } from 'js-base64';
import { $, handleChange, initSplit } from './utils/index';
import './style.css';

const PREVIEW = $('#sandbox-preview');
const htmlCode = $('#sandbox-html');
const cssCode = $('#sandbox-css');
const jsCode = $('#sandbox-js');

htmlCode.addEventListener('input', handleChange(updatePreview));
cssCode.addEventListener('input', handleChange(updatePreview));
jsCode.addEventListener('input', handleChange(updatePreview));

function updatePreview () {
   const HTML = htmlCode.value;
   const CSS = cssCode.value;
   const JS = jsCode.value;

   const DOC = createDOC(HTML, CSS, JS);
   PREVIEW.setAttribute('srcdoc', DOC);

   const hashedCode = `${encode(HTML)}|${encode(CSS)}|${encode(JS)}`;
   window.history.replaceState(null, null, `/${hashedCode}`);
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

function initSandbox () {
   const codeFromURL = document.location.pathname.substring(1) || '%7C%7C';
   const codeFromLocal = window.localStorage.getItem('WEB-SANDBOX-CODE') ?? '';

   const hashedCode = (codeFromLocal !== '') ? codeFromLocal : codeFromURL;
   const [HTML, CSS, JS] = hashedCode.split('%7C').map(encoded => decode(encoded));

   htmlCode.value = HTML;
   cssCode.value = CSS;
   jsCode.value = JS;

   updatePreview();
}

initSplit();
initSandbox();