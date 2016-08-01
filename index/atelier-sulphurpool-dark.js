/* Base16 Atelier Sulphurpool Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#202746';
const foregroundColor = '#898ea4';
const borderColor = '#202746'; // same as background-color, might as well say "transparent"
const cursorColor = '#c08b30'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#c94922', // red
  '#ac9739', // green
  '#c08b30', // yellow
  '#3d8fd1', // blue
  '#6679cc', // violet
  '#22a2c9', // cyan
  '#dfe2f1', // light gray
  '#5e6687', // medium gray
  '#c94922', // red
  '#5e6687', // green
  '#6b7394', // yellow
  '#898ea4', // blue
  '#6679cc', // violet
  '#22a2c9', // cyan
  '#f5f7ff', // white
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
         color: #898ea4 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #202746 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #5e6687 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #dfe2f1 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #202746 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #202746 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

