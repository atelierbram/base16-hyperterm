/* Base16 Atelier Forest Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#1b1918';
const foregroundColor = '#9c9491';
const borderColor = '#1b1918'; // same as background-color, might as well say "transparent"
const cursorColor = '#c38418'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#f22c40', // red
  '#7b9726', // green
  '#c38418', // yellow
  '#407ee7', // blue
  '#6666ea', // violet
  '#3d97b8', // cyan
  '#e6e2e0', // light gray
  '#68615e', // medium gray
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
         color: #9c9491 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #1b1918 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #68615e !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #e6e2e0 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #1b1918 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #1b1918 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

