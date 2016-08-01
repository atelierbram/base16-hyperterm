#!/bin/bash -x

# write to file
overwrite_to_file()
{
  base16-builder --scheme "db/schemes/atelier-cave.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-cave-dark.js"
  base16-builder --scheme "db/schemes/atelier-cave.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-cave-light.js"
  base16-builder --scheme "db/schemes/atelier-dune.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-dune-dark.js"
  base16-builder --scheme "db/schemes/atelier-dune.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-dune-light.js"
  base16-builder --scheme "db/schemes/atelier-estuary.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-estuary-dark.js"
  base16-builder --scheme "db/schemes/atelier-estuary.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-estuary-light.js"
  base16-builder --scheme "db/schemes/atelier-forest.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-forest-dark.js"
  base16-builder --scheme "db/schemes/atelier-forest.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-forest-light.js"
  base16-builder --scheme "db/schemes/atelier-heath.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-heath-dark.js"
  base16-builder --scheme "db/schemes/atelier-heath.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-heath-light.js"
  base16-builder --scheme "db/schemes/atelier-lakeside.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-lakeside-dark.js"
  base16-builder --scheme "db/schemes/atelier-lakeside.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-lakeside-light.js"
  base16-builder --scheme "db/schemes/atelier-plateau.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-plateau-dark.js"
  base16-builder --scheme "db/schemes/atelier-plateau.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-plateau-light.js"
  base16-builder --scheme "db/schemes/atelier-savanna.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-savanna-dark.js"
  base16-builder --scheme "db/schemes/atelier-savanna.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-savanna-light.js"
  base16-builder --scheme "db/schemes/atelier-seaside.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-seaside-dark.js"
  base16-builder --scheme "db/schemes/atelier-seaside.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-seaside-light.js"
  base16-builder --scheme "db/schemes/atelier-sulphurpool.yml" --template "db/templates/hyperterm/dark.ejs" > "index/atelier-sulphurpool-dark.js"
  base16-builder --scheme "db/schemes/atelier-sulphurpool.yml" --template "db/templates/hyperterm/light.ejs" > "index/atelier-sulphurpool-light.js"
  base16-builder --scheme "db/schemes/solarized.yml" --template "db/templates/hyperterm/dark.ejs" > "index/base16-solarized-dark.js"
  base16-builder --scheme "db/schemes/solarized.yml" --template "db/templates/hyperterm/light.ejs" > "index/base16-solarized-light.js"
 }

# execute it
overwrite_to_file
