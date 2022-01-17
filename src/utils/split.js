import Split from "split-grid";
import { $ } from './dom';

const createSplits = () => Split({
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
});

export default createSplits;