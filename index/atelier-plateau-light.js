/* Base16 Atelier Plateau Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/plateau)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#f4ecec'
const foregroundColor = '#7e7777'
const borderColor = '#f4ecec' // same as background-color, might as well say "transparent"
const cursorColor = '#a06e3b' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ca4949', // red
  '#4b8b8b', // green
  '#a06e3b', // yellow
  '#7272ca', // blue
  '#8464c4', // violet
  '#5485b6', // cyan
  '#585050', // medium gray
  '#e7dfdf', // light gray
  '#ca4949', // red
  '#585050', // green
  '#655d5d', // yellow
  '#7e7777', // blue
  '#8464c4', // violet
  '#5485b6', // cyan
  '#f4ecec', // white
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
         color: #292424 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #f4ecec !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #1b1818 !important;
       }
       .tab_text {
         background-color: #e7dfdf;
         border-left: 3px solid #f4ecec !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #f4ecec;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

