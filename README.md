# bmv (batch mv)

Moves a batch of files/directories to different destinations.

## Example

```javascript
const batchmv = require("./index.js");

batchmv.move([
    // move to a different directory
    ['test.md', 'testing/test.md'],
    // move back
    ['test1.md', '../'],
    // move a directory
    ['test', 'testing/test']
]);
```

### API

#### ```move( array[ [sourceFile, destFile] ] )```

Params: array

Pass through an array of move tasks, which hold both a ```sourceFile``` as the first item, then a ```destFile``` as the last item.

```javascript
batchmv.move([
    ['test1.md', '../']
]);
```
