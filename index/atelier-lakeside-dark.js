/* Base16 Atelier Lakeside Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#161b1d';
const foregroundColor = '#7195a8';
const borderColor = '#161b1d'; // same as background-color, might as well say "transparent"
const cursorColor = '#8a8a0f'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#d22d72', // red
  '#568c3b', // green
  '#8a8a0f', // yellow
  '#257fad', // blue
  '#6b6bb8', // violet
  '#2d8f6f', // cyan
  '#c1e4f6', // light gray
  '#516d7b', // medium gray
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
         color: #7195a8 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #161b1d !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #516d7b !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #c1e4f6 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #161b1d !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #161b1d !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

