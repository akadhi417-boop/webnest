import os
import math
from PIL import Image

def remove_bg(image_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()
        
        # Use top-left pixel as background color reference
        bg_r, bg_g, bg_b, _ = datas[0]
        
        newData = []
        for item in datas:
            r, g, b, a = item
            # Calculate distance from background color
            dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
            
            # If distance is small, it's the background
            if dist < 45:
                # Make it transparent
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(image_path, "PNG")
        print(f"Processed: {image_path}")
    except Exception as e:
        print(f"Failed {image_path}: {e}")

# Process files
assets_dir = "src/assets"
for file in os.listdir(assets_dir):
    if file.endswith(".png"):
        remove_bg(os.path.join(assets_dir, file))

logo_dir = os.path.join(assets_dir, "logo")
if os.path.exists(logo_dir):
    for file in os.listdir(logo_dir):
        if file.endswith(".png"):
            remove_bg(os.path.join(logo_dir, file))
