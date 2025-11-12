# io8

**Canonical URL:**  
[https://alexstevovich.com/a/io8-nodejs](https://alexstevovich.com/a/io8-nodejs)

**Software URL:**  
[https://midnightcitylights.com/software/io8-nodejs](https://midnightcitylights.com/software/io8-nodejs)

Minimal filesystem I/O helper with UTF-8 defaults.

---

## Installation

```sh
npm install io8
```

## Example

```js
import io8 from 'io8';

// ─── Async Operations ───

// Write a text file
await io8.write('./example.txt', 'Hello world');

// Read a file
const content = await io8.read('./example.txt');
console.log(content);
// → "Hello world"

// Copy a file
await io8.copy('./example.txt', './copy.txt');
```

## License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).
