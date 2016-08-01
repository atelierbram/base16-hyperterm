/* Base16 Atelier Sulphurpool Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#f5f7ff'
const foregroundColor = '#898ea4'
const borderColor = '#f5f7ff' // same as background-color, might as well say "transparent"
const cursorColor = '#c08b30' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#c94922', // red
  '#ac9739', // green
  '#c08b30', // yellow
  '#3d8fd1', // blue
  '#6679cc', // violet
  '#22a2c9', // cyan
  '#5e6687', // medium gray
  '#dfe2f1', // light gray
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
         color: #293256 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #f5f7ff !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #202746 !important;
       }
       .tab_text {
         background-color: #dfe2f1;
         border-left: 3px solid #f5f7ff !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #f5f7ff;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

