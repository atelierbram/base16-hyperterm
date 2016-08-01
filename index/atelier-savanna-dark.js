/* Base16 Atelier Savanna Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/savanna)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#171c19';
const foregroundColor = '#78877d';
const borderColor = '#171c19'; // same as background-color, might as well say "transparent"
const cursorColor = '#a07e3b'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#b16139', // red
  '#489963', // green
  '#a07e3b', // yellow
  '#478c90', // blue
  '#55859b', // violet
  '#1c9aa0', // cyan
  '#dfe7e2', // light gray
  '#526057', // medium gray
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
         color: #78877d !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #171c19 !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #526057 !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #dfe7e2 !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #171c19 !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #171c19 !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

