import * as monaco from 'monaco-editor/'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
	getWorker(_, label) {
      if (label === 'html') return new htmlWorker();
		if (label === 'css') return new cssWorker();
		if (label === 'javascript') return new tsWorker();
		return new editorWorker();
	}
};

export default monaco.editor.create