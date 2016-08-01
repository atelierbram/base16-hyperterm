/* Base16 Atelier Heath Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#f7f3f7'
const foregroundColor = '#9e8f9e'
const borderColor = '#f7f3f7' // same as background-color, might as well say "transparent"
const cursorColor = '#bb8a35' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ca402b', // red
  '#918b3b', // green
  '#bb8a35', // yellow
  '#516aec', // blue
  '#7b59c0', // violet
  '#159393', // cyan
  '#695d69', // medium gray
  '#d8cad8', // light gray
  '#ca402b', // red
  '#695d69', // green
  '#776977', // yellow
  '#9e8f9e', // blue
  '#7b59c0', // violet
  '#159393', // cyan
  '#f7f3f7', // white
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
         color: #292329 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #f7f3f7 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #1b181b !important;
       }
       .tab_text {
         background-color: #d8cad8;
         border-left: 3px solid #f7f3f7 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #f7f3f7;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

