import { $, handleChange, createEditor } from './utils';

const htmlContainer = $('#sandbox-html');
const cssContainer = $('#sandbox-css');
const jsContainer = $('#sandbox-js');

const EDITOR_OPTIONS = {
   theme: 'vs-dark',
   fontFamily: 'monospace',
   fontSize: 18,
   automaticLayout: true,
   minimap: {
      enabled: false
   }
};
const htmlEditor = createEditor(htmlContainer, { language: 'html', ...EDITOR_OPTIONS });
const cssEditor = createEditor(cssContainer, { language: 'css', ...EDITOR_OPTIONS });
const jsEditor = createEditor(jsContainer, { language: 'javascript', ...EDITOR_OPTIONS });

function editorOnChange (callback) {
   htmlEditor.onDidChangeModelContent(handleChange(callback));
   cssEditor.onDidChangeModelContent(handleChange(callback));
   jsEditor.onDidChangeModelContent(handleChange(callback));
}

export { htmlEditor, cssEditor, jsEditor, editorOnChange };