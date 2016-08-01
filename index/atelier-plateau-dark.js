/* Base16 Atelier Plateau Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/plateau)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#1b1818';
const foregroundColor = '#7e7777';
const borderColor = '#1b1818'; // same as background-color, might as well say "transparent"
const cursorColor = '#a06e3b'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#ca4949', // red
  '#4b8b8b', // green
  '#a06e3b', // yellow
  '#7272ca', // blue
  '#8464c4', // violet
  '#5485b6', // cyan
  '#e7dfdf', // light gray
  '#585050', // medium gray
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
         color: #7e7777 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #1b1818 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #585050 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #e7dfdf !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #1b1818 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #1b1818 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

