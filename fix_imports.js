import fs from 'fs';
import path from 'path';

const targetDir = String.raw`c:\Users\auday\Downloads\Create UI Design\landing\product\src\components\ui`;
const pattern = /from\s+["']([^"']+)@\d+\.\d+\.\d+["']/g;

fs.readdirSync(targetDir).forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const filePath = path.join(targetDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        let newContent = content.replace(pattern, (match, pkg) => {
            const quote = match.includes('"') ? '"' : "'";
            return `from ${quote}${pkg}${quote}`;
        });

        if (newContent !== content) {
            console.log(`Fixing ${file}`);
            fs.writeFileSync(filePath, newContent, 'utf-8');
        }
    }
});
