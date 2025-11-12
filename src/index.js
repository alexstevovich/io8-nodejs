/*
 * io8
 * https://alexstevovich.com/a/io8-nodejs
 *
 * Copyright (c) 2015–2025 Alex Stevovich
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import fsSync from 'fs';
import fs from 'fs/promises';

/* ---------- Async ---------- */
async function readFile(filePath, { encoding = 'utf8' } = {}) {
    return fs.readFile(filePath, encoding);
}
async function writeFile(filePath, data, { encoding = 'utf8' } = {}) {
    await fs.writeFile(filePath, data, encoding);
}
async function copyFile(src, dest, { encoding = 'utf8' } = {}) {
    const data = await readFile(src, { encoding });
    await writeFile(dest, data, { encoding });
}

/* ---------- Sync ---------- */

function readFileSync(filePath, { encoding = 'utf8' } = {}) {
    return fsSync.readFileSync(filePath, encoding);
}

function writeFileSync(filePath, data, { encoding = 'utf8' } = {}) {
    fsSync.writeFileSync(filePath, data, encoding);
}

function copyFileSync(src, dest, { encoding = 'utf8' } = {}) {
    const data = readFileSync(src, { encoding });
    writeFileSync(dest, data, { encoding });
}

export {
    readFile as read,
    writeFile as write,
    copyFile as copy,
    readFileSync as readSync,
    writeFileSync as writeSync,
    copyFileSync as copySync,
};

export default {
    read: readFile,
    write: writeFile,
    copy: copyFile,
    readSync: readFileSync,
    writeSync: writeFileSync,
    copySync: copyFileSync,
};
