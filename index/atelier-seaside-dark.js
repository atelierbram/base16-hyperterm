/* Base16 Atelier Seaside Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#131513';
const foregroundColor = '#809980';
const borderColor = '#131513'; // same as background-color, might as well say "transparent"
const cursorColor = '#98981b'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#e6193c', // red
  '#29a329', // green
  '#98981b', // yellow
  '#3d62f5', // blue
  '#ad2bee', // violet
  '#1999b3', // cyan
  '#cfe8cf', // light gray
  '#5e6e5e', // medium gray
  '#e6193c', // red
  '#5e6e5e', // green
  '#687d68', // yellow
  '#809980', // blue
  '#ad2bee', // violet
  '#1999b3', // cyan
  '#f4fbf4', // white
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
         color: #809980 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #131513 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #5e6e5e !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #cfe8cf !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #131513 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #131513 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

