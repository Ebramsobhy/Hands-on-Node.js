const fs = require('fs');
const path = require('path');

const SOURCE_FILE = 'student_results.json';
const DEST_DIR = 'backup';
const DEST_FILE = path.join(DEST_DIR, 'student_results_backup.json');

async function ensureDirectoryExists(dir) {
    try {
      await fs.promises.readdir(dir);
      console.log(`Directory "${dir}" exists.`);
    } catch (err) {
      if (err.code === 'ENOENT') {
        try {
          await fs.promises.mkdir(dir);
          console.log(`Directory "${dir}" is created.`);
        } catch (mkdirErr) {
          console.error('Error creating directory:', mkdirErr.message);
          process.exit(1);
        }
      } else {
        console.error('Error reading directory:', err.message);
      }
    }
}

async function copyFileToDirectory(source, destination){
    try {
        await fs.promises.copyFile(source, destination); 
        console.log(`File copied from "${source}" to "${destination}".`);
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.error(`Source file "${source}" not found.`);
        } else {
          console.error('Error copying file:', err.message);
        }
      }
}

async function main() {
    try {
      await ensureDirectoryExists(DEST_DIR);
      await copyFileToDirectory(SOURCE_FILE, DEST_FILE);

    } catch (err) {
      console.error('Operation failed:', err.message);
    }
  }
  
main();