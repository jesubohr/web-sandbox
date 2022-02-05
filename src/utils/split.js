import Split from "split-grid";
import { $, $$ } from './dom';

const desktopSplit = {
   columnGutters: [{
      track: 1,
      element: $('.splitter.col-1')
   }, {
      track: 1,
      element: $('.splitter.col-2')
   }],
   rowGutters: [{
      track: 1,
      element: $('.splitter.row')
   }]
};

const mobileSplit = {
   rowGutters: [{
      track: 1,
      element: $('.splitter.col-1'),
   }, {
      track: 1,
      element: $('.splitter.row'),
   }, {
      track: 1,
      element: $('.splitter.col-2'),
   }]
};

let SPLIT;
const horizontal = $$('.horizontal');
function manageSplits () {
   if (window.innerWidth <= 550) {
      if (SPLIT && SPLIT.options.columnGutters.length === 0) return;
      else if (SPLIT) SPLIT.destroy();

      horizontal.forEach(el => {
         el.style['grid-template-columns'] = 'none';
         el.style['grid-template-rows'] = '1fr 6px 1fr';
      });
      SPLIT = createSplit(true);
   }
   else {
      if (SPLIT && SPLIT.options.columnGutters.length !== 0) return;
      else if (SPLIT) SPLIT.destroy();

      horizontal.forEach(el => {
         el.style['grid-template-rows'] = 'none';
         el.style['grid-template-columns'] = '1fr 6px 1fr';
      });
      SPLIT = createSplit();
   }
}

function createSplit (isMobile = false) {
   return Split((!isMobile) ? desktopSplit : mobileSplit);
};

function initSplit () {
   window.onload = () => manageSplits();
   window.onresize = () => manageSplits();
}

export default initSplit;