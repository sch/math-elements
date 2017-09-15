<p align="center"><strong>math-elements</strong></p>

This library implements a couple custom elements to easily work with formatted
math expressions in html.

- `<math-inline>` allows you to display an expression within paragraph text
- `<math-display>` centers an expression on a new line

Here's a screenshot:

<p align="center"><img width="807" alt="screenshot" src="https://user-images.githubusercontent.com/109822/30462167-e69d3d98-9991-11e7-971f-b39e74d5c656.png"></p>

##### Installation

You'll need to use a polyfill for custom elements to display these elements. Either the Polymer or X-Tag frameworks supply a polyfill, or you can install the standalone [CustomElements one](https://github.com/webcomponents/custom-elements):

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.0.4/custom-elements.min.js"></script>
```
