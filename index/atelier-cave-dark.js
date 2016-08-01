/* Base16 Atelier Cave Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/cave)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#19171c';
const foregroundColor = '#7e7887';
const borderColor = '#19171c'; // same as background-color, might as well say "transparent"
const cursorColor = '#a06e3b'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#be4678', // red
  '#2a9292', // green
  '#a06e3b', // yellow
  '#576ddb', // blue
  '#955ae7', // violet
  '#398bc6', // cyan
  '#e2dfe7', // light gray
  '#585260', // medium gray
  '#be4678', // red
  '#585260', // green
  '#655f6d', // yellow
  '#7e7887', // blue
  '#955ae7', // violet
  '#398bc6', // cyan
  '#efecf4', // white
  foregroundColor
]

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node[focus="true"] {
         opacity: .5 !important;
       }
    `,
    css: `
      ${config.css || ''}
      * {
         font-weight: 400;
       }
       .tabs_title,
       .tab_tab {
         color: #7e7887 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #19171c !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #585260 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #e2dfe7 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #19171c !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #19171c !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

