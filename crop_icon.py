from PIL import Image, ImageChops

def crop_icon():
    img = Image.open('/Users/hak/.gemini/antigravity/brain/7ce3eee1-352c-4f90-a8c6-80afddbe5745/impetus_logo_minimal_book_pages_1773268055147.png')
    # The image is 640x640 with text at the bottom.
    # We can just crop the top 440 pixels.
    # Let's see if we can automatically find the text by slicing.
    # A simple crop is just height * 0.7
    w, h = img.size
    cropped = img.crop((0, 0, w, int(h * 0.72)))
    
    # Try getting bounding box of non-white pixels in the cropped area
    bg = Image.new(cropped.mode, cropped.size, (255, 255, 255) if cropped.mode == 'RGB' else (255, 255, 255, 255))
    diff = ImageChops.difference(cropped, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        # Add a little padding
        pad = 20
        bbox = (max(0, bbox[0]-pad), max(0, bbox[1]-pad), min(w, bbox[2]+pad), min(int(h * 0.72), bbox[3]+pad))
        cropped = cropped.crop(bbox)
        
    cropped.save('public/logo-icon.png')

crop_icon()
