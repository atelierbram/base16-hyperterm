/* Base16 Atelier Dune Dark colorscheme by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)
 * HyperTerm template by Bram de Haan (https://github.com/atelierbram/base16-hyperterm)
 */
const backgroundColor = '#20201d';
const foregroundColor = '#999580';
const borderColor = '#20201d'; // same as background-color, might as well say "transparent"
const cursorColor = '#ae9513'; // yellow, opacity set in .termCSS: see under

const colors = [
  backgroundColor,
  '#d73737', // red
  '#60ac39', // green
  '#ae9513', // yellow
  '#6684e1', // blue
  '#b854d4', // violet
  '#1fad83', // cyan
  '#e8e4cf', // light gray
  '#6e6b5e', // medium gray
  '#d73737', // red
  '#6e6b5e', // green
  '#7d7a68', // yellow
  '#999580', // blue
  '#b854d4', // violet
  '#1fad83', // cyan
  '#fefbec', // white
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
         color: #999580 !important;
         letter-spacing: .025em;
       }
       .tabs_list {
         border: 0;
       }
       .tab_tab {
         background-color: #20201d !important;
         letter-spacing: .025em;
         border-bottom: 3px solid #6e6b5e !important;
       }
       .tab_tab:hover {
         border-bottom-color: transparent !important;
       }
       .tab_tab:before {
         border: 0;
       }
       .tab_tab.tab_active {
         border-color: transparent !important;
         color: #e8e4cf !important;
       }
       .tab_text {
         background-color:rgba(0,0,0,.33);
         border-left: 3px solid #20201d !important;
         transition: all .3s;
       }
       .tab_tab:hover .tab_text {
         background-color:rgba(0,0,0,0);
         border-left: 3px solid #20201d !important;
       }
       .tab_active .tab_text {
         background-color: transparent;
       }
    `
  });
};

