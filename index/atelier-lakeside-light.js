/* Base16 Atelier Lakeside Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#ebf8ff'
const foregroundColor = '#7195a8'
const borderColor = '#ebf8ff' // same as background-color, might as well say "transparent"
const cursorColor = '#8a8a0f' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#d22d72', // red
  '#568c3b', // green
  '#8a8a0f', // yellow
  '#257fad', // blue
  '#6b6bb8', // violet
  '#2d8f6f', // cyan
  '#516d7b', // medium gray
  '#c1e4f6', // light gray
  '#d22d72', // red
  '#516d7b', // green
  '#5a7b8c', // yellow
  '#7195a8', // blue
  '#6b6bb8', // violet
  '#2d8f6f', // cyan
  '#ebf8ff', // white
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
         color: #1f292e !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #ebf8ff !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #161b1d !important;
       }
       .tab_text {
         background-color: #c1e4f6;
         border-left: 3px solid #ebf8ff !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #ebf8ff;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

