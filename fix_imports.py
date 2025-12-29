import os
import re

target_dir = r"c:\Users\auday\Downloads\Create UI Design\landing\product\src\components\ui"
pattern = re.compile(r'from\s+["\']([^"\']+)@\d+\.\d+\.\d+["\']')

count = 0
for filename in os.listdir(target_dir):
    if filename.endswith(".tsx") or filename.endswith(".ts"):
        path = os.path.join(target_dir, filename)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        
        def repl(match):
            pkg = match.group(1)
            quote = '"' if '"' in match.group(0) else "'"
            return f'from {quote}{pkg}{quote}'

        new_content = pattern.sub(repl, content)
        
        if new_content != content:
            print(f"Fixing {filename}")
            with open(path, "w", encoding="utf-8") as f:
                f.write(new_content)
            count += 1
print(f"Fixed {count} files.")
