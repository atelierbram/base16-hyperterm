/* Base16 Atelier Estuary Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/estuary)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#22221b';
const foregroundColor = '#878573';
const borderColor = '#22221b'; // same as background-color, might as well say "transparent"
const cursorColor = '#a5980d'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ba6236', // red
  '#7d9726', // green
  '#a5980d', // yellow
  '#36a166', // blue
  '#5f9182', // violet
  '#5b9d48', // cyan
  '#e7e6df', // light gray
  '#5f5e4e', // medium gray
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
         color: #878573 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #22221b !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #5f5e4e !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #e7e6df !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #22221b !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #22221b !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

