/* Base16 Atelier Cave Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/cave)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#efecf4'
const foregroundColor = '#7e7887'
const borderColor = '#efecf4' // same as background-color, might as well say "transparent"
const cursorColor = '#a06e3b' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#be4678', // red
  '#2a9292', // green
  '#a06e3b', // yellow
  '#576ddb', // blue
  '#955ae7', // violet
  '#398bc6', // cyan
  '#585260', // medium gray
  '#e2dfe7', // light gray
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
         color: #26232a !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #efecf4 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #19171c !important;
       }
       .tab_text {
         background-color: #e2dfe7;
         border-left: 3px solid #efecf4 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #efecf4;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

