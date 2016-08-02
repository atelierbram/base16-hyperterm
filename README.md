# Base16 HyperTerm

Generate themes for HyperTerm with Base16-Builder

![screenshot of Base16-Solarized-Dark in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-base16-solarized-dark-screenshot.png)
<br>Base16-Solarized-Dark

![screenshot of Base16-Solarized-Light in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-base16-solarized-light-screenshot.png)
<br>Base16-Solarized-Light

![screenshot of AtelierSulphurpool-Dark in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-atelier-sulphurpool-dark-screenshot.png)
<br>AtelierSulphurpool-Dark

![screenshot of AtelierSulphurpool-Light in HyperTerm](http://atelierbram.github.io/syntax-highlighting/assets/img/hyperterm-atelier-sulphurpool-light-screenshot.png)
<br>AtelierSulphurpool-Light

### Installation

1. Make a folder in `.hyperterm_plugins/local/` like for example `hyperterm-base16-solarized-dark`, and copy the `package.json.txt` and one of your favorite themes like `base16-solarized-dark` from the `index`-folder over there.
2. Rename `base16-solarized-dark.js` to `index.js`
3. Rename `package.json.txt` and adapt this `package.json` to the choosen theme names.
4. Open HyperTerm's preferences by pressing `Cmd+,` or manually at `~/.hyperterm.js`.
5. Find and Update the local-plugins array to one of the themes from the `index` folder.
```js
  localPlugins: [
    'hyperterm-base16-solarized-dark'
  ],
```
6. Reload HyperTerm by pressing `Cmd + Shft + R`

### Base16 Builder
Made with [Base16 Builder](https://github.com/base16-builder/base16-builder), one will need to have Base16 Builder installed from NPM to regenerate the themes, or to create your own from a custom colorscheme. For convenience I use the `io.sh` bash script to output all of the themes to the `index` folder from the commandline with one small command: `io.sh`.

### Credits
- Original [Solarized colorscheme by Ethan Schoonover](http://ethanschoonover.com/solarized)
- [@Ghosh](https://github.com/Ghosh/hyperterm-solarized-dark) for [Solarized Dark for HyperTerm](https://github.com/Ghosh/hyperterm-solarized-dark)
- Base16
  - [@chriskempson](https://github.com/chriskempson)
  - [@alexbooker](https://github.com/alexbooker)
  - [@aloisdg](https://github.com/aloisdg)

Released under [MIT Licence](http://atelierbram.mit-license.org)
