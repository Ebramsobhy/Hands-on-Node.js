const fs = require('fs');
const file_name = 'bigfile.txt';

console.time('Reading Time');

const reader = fs.createReadStream(file_name, {
  encoding: 'utf-8',
  highWaterMark: 1024 
});

let chunkCount = 0;

reader.on('data', (chunk) => {
  chunkCount++;
  console.log(`Chunk ${chunkCount} (size: ${chunk.length}):`);
  console.log(chunk);
  console.log('-------------------------------------------');
});

reader.on('end', () => {
  console.log(`File reading completed! Total chunks: ${chunkCount}`);
  console.timeEnd('Reading Time');
});

reader.on('error', (err) => {
  console.error('Error reading file:', err.message);
});