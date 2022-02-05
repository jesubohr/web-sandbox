import { $ } from '../utils';
import openPreview from './preview';

const save = $('#options #save');
const share = $('#options #share');
const open = $('#options #open');

function initOptions () {
   save.addEventListener('click', saveToLocal);
   share.addEventListener('click', copyToClipboard);
   open.addEventListener('click', openPreview);
}

function saveToLocal () {
   const hashedCode = document.location.pathname.substring(1) || '%7C%7C';
   window.localStorage.setItem('WEB-SANDBOX-CODE', hashedCode);
   alert('Code saved to local storage!');
}

async function copyToClipboard () {
   const sandboxURL = document.location.href;
   await navigator.clipboard.writeText(sandboxURL);
   alert('URL copied to Clipboard!');
}

export default initOptions;