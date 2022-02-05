
# SHP.js

This is a Javascript port of my HTML pre-processor that's to be used on the client side. It can be used to dynamically create complex DOM fragments.

**For more information about SHP syntax check [the original SHP repository](https://github.com/Jakub21/shp.py).**

# Package usage


## Setup

#### Node setup

1. Install from the NPM `npm install @jakub21/shp`
2. Require the package to get the path to the bundled file `require('@jakub21/shp').path`
3. Use your server setup to serve the file
4. Add a `<script>` tag in your HTML document with your chosen path

#### No Node setup

If you do not use Node.js you can download prebuilt `shp.js` file from the releases tab. Add a `<script>` tag that points to this file instead.

## Usage with Domi.js

The recommended use is through [Domi.js](https://github.com/Jakub21/Domi.js). See [this section](https://github.com/Jakub21/Domi.js#domiobject---shp-methods) of readme for relevant information.

## Standalone usage

Package is contained within global `shp` object. You can use the `Compiler` class yourself for more control or utilize `append` and `prepend` aliases for clarity.

### `append(element, shp)`

Compiles `shp` and appends created nodes to `element`.

### `prepend(element, shp)`

Compiles `shp` and prepends created nodes to `element`.

### `new Compiler()`

Used to compile SHP code.

#### `compile(shp)`

Returns an array of DOM nodes.

#### `reset()`

Resets internal state. Must be used between `compile` calls.

