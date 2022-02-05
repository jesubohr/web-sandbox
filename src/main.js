import { encode, decode } from 'js-base64';
import { $, initSplit } from './utils';
import initOptions from './options';
import { htmlEditor, cssEditor, jsEditor, editorOnChange } from './editors';
import './style.css';

const PREVIEW = $('#sandbox-preview');

function updatePreview () {
   const HTML = htmlEditor.getValue();
   const CSS = cssEditor.getValue();
   const JS = jsEditor.getValue();

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
   const codeFromLocal = window.localStorage.getItem('WEB-SANDBOX-CODE') || '%7C%7C';

   const hashedCode = (codeFromURL === '%7C%7C') ? codeFromLocal : codeFromURL;
   const [HTML, CSS, JS] = hashedCode.split('%7C').map(encoded => decode(encoded));

   htmlEditor.setValue(HTML);
   cssEditor.setValue(CSS);
   jsEditor.setValue(JS);

   updatePreview();
}

editorOnChange(updatePreview);
initSplit();
initOptions();
initSandbox();