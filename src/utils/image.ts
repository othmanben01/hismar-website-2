/**
 * Compresses an image file on the client side using HTML5 Canvas
 * to prevent exceeding localStorage size limits.
 * 
 * @param file The image file uploaded by the user
 * @param maxDim Maximum width or height of the compressed image (default: 1400)
 * @param quality JPEG compression quality from 0 to 1 (default: 0.82)
 * @returns A promise that resolves with the compressed base64 Data URL
 */
export function compressImage(file: File, maxDim = 1400, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let w = img.width;
        let h = img.height;

        // Calculate new dimensions keeping aspect ratio
        if (w > maxDim) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        }
        if (h > maxDim) {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get 2D canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0, w, h);
        
        try {
          const compressed = canvas.toDataURL("image/jpeg", quality);
          resolve(compressed);
        } catch (err) {
          reject(err);
        }
      };
      
      img.onerror = () => reject(new Error("Failed to load image element"));
      img.src = e.target?.result as string;
    };
    
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
