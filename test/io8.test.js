import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import fs from 'fs/promises';
import path from 'path';
import io8 from '../src/index.js';
const testRoot = path.join(process.cwd(), 'temptest', 'io8');

async function setupTestDir() {
    await fs.mkdir(testRoot, { recursive: true });
}

async function cleanupTestDir() {
    await fs.rm(path.join(process.cwd(), 'temptest'), {
        recursive: true,
        force: true,
    });
}

describe('io8 basic I/O operations', () => {
    const fileA = path.join(testRoot, 'a.txt');
    const fileB = path.join(testRoot, 'b.txt');
    const fileC = path.join(testRoot, 'c.txt');

    beforeAll(async () => {
        await setupTestDir();
    });

    afterAll(async () => {
        await cleanupTestDir();
    });

    it('writes and reads a UTF-8 text file asynchronously', async () => {
        const message = 'hello io8 async 🌐';
        await io8.write(fileA, message);
        const readBack = await io8.read(fileA);
        expect(readBack).toBe(message);
    });

    it('copies a file asynchronously', async () => {
        const message = 'copy test ✅';
        await io8.write(fileB, message);
        await io8.copy(fileB, fileC);
        const copied = await io8.read(fileC);
        expect(copied).toBe(message);
    });

    it('writes and reads a UTF-8 text file synchronously', () => {
        const fileSync = path.join(testRoot, 'sync.txt');
        const message = 'hello io8 sync ⚙️';
        io8.writeSync(fileSync, message);
        const readBack = io8.readSync(fileSync);
        expect(readBack).toBe(message);
    });

    it('copies a file synchronously', () => {
        const src = path.join(testRoot, 'srcSync.txt');
        const dest = path.join(testRoot, 'destSync.txt');
        const content = 'sync copy test 📂';
        io8.writeSync(src, content);
        io8.copySync(src, dest);
        const readBack = io8.readSync(dest);
        expect(readBack).toBe(content);
    });
});
