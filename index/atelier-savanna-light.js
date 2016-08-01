/* Base16 Atelier Savanna Light colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/savanna)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#ecf4ee'
const foregroundColor = '#78877d'
const borderColor = '#ecf4ee' // same as background-color, might as well say "transparent"
const cursorColor = '#a07e3b' // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#b16139', // red
  '#489963', // green
  '#a07e3b', // yellow
  '#478c90', // blue
  '#55859b', // violet
  '#1c9aa0', // cyan
  '#526057', // medium gray
  '#dfe7e2', // light gray
  '#b16139', // red
  '#526057', // green
  '#5f6d64', // yellow
  '#78877d', // blue
  '#55859b', // violet
  '#1c9aa0', // cyan
  '#ecf4ee', // white
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
         color: #232a25 !important;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #ecf4ee !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border: transparent !important;
         color: #171c19 !important;
       }
       .tab_text {
         background-color: #dfe7e2;
         border-left: 3px solid #ecf4ee !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color: #ecf4ee;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

