# angular-table-of-contents
> Directive to automatically generate a table of contents.

## Dependencies

* Angular
* jQuery

## Usage

Start by including the library as a dependency to your Angular app.

``` javascript
angular.module('DemoApp', ['angular-toc']);
```

Then in your HTML add a directive where you want to add the table of contents

The directive has one attribute:


| Attribute     | Value           |
| ------------- |-------------:|
| `selector`      | Any selector that will work with jQuery. eg: `li`, `.item h2` |



``` html
<bd-toc selector=".item h2"></bd-toc>
```
