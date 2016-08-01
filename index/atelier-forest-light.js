/* Base16 Atelier Forest Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#f1efee'
const foregroundColor = '#9c9491'
const borderColor = '#f1efee' // same as background-color, might as well say "transparent"
const cursorColor = '#c38418' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#f22c40', // red
  '#7b9726', // green
  '#c38418', // yellow
  '#407ee7', // blue
  '#6666ea', // violet
  '#3d97b8', // cyan
  '#68615e', // medium gray
  '#e6e2e0', // light gray
  '#f22c40', // red
  '#68615e', // green
  '#766e6b', // yellow
  '#9c9491', // blue
  '#6666ea', // violet
  '#3d97b8', // cyan
  '#f1efee', // white
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
         color: #2c2421 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #f1efee !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #1b1918 !important;
       }
       .tab_text {
         background-color: #e6e2e0;
         border-left: 3px solid #f1efee !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #f1efee;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

