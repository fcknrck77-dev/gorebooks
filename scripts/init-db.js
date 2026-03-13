const { initDB } = require('./src/lib/db.ts');
// Note: This won't work directly due to TS/ESM. 
// I'll use a simpler approach: calling initDB in a layout or a route.
// Actually, I'll just write a script that can be run with ts-node or similar, 
// or better, call it in the main layout.
