/* Base16 Atelier Estuary Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/estuary)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#f4f3ec'
const foregroundColor = '#878573'
const borderColor = '#f4f3ec' // same as background-color, might as well say "transparent"
const cursorColor = '#a5980d' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ba6236', // red
  '#7d9726', // green
  '#a5980d', // yellow
  '#36a166', // blue
  '#5f9182', // violet
  '#5b9d48', // cyan
  '#5f5e4e', // medium gray
  '#e7e6df', // light gray
  '#ba6236', // red
  '#5f5e4e', // green
  '#6c6b5a', // yellow
  '#878573', // blue
  '#5f9182', // violet
  '#5b9d48', // cyan
  '#f4f3ec', // white
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
         color: #302f27 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #f4f3ec !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #22221b !important;
       }
       .tab_text {
         background-color: #e7e6df;
         border-left: 3px solid #f4f3ec !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #f4f3ec;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

