import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONFIG_FILE = path.join(process.cwd(), "slots-config.json");
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// Helper to read the config file
function readConfig(): Record<string, any> {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = fs.readFileSync(CONFIG_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading slots-config.json:", err);
  }
  return {};
}

// Helper to write the config file
function writeConfig(config: Record<string, any>) {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing slots-config.json:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { id, base64Data, fit, pos } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing slot ID" }, { status: 400 });
    }

    const config = readConfig();
    const slotConfig = config[id] || {};

    let src = slotConfig.src;

    // Handle base64 image upload if provided
    if (base64Data) {
      // Create uploads directory if it doesn't exist
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
      }

      // Parse base64 data URL
      const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return NextResponse.json({ error: "Invalid base64 data format" }, { status: 400 });
      }

      const base64Buffer = Buffer.from(matches[2], "base64");
      
      // Determine file extension (defaulting to .jpg as compressed in canvas)
      const extension = "jpg";
      const filename = `${id}.${extension}`;
      const filePath = path.join(UPLOAD_DIR, filename);

      // Write file to filesystem
      fs.writeFileSync(filePath, base64Buffer);

      // Set URL path relative to public/ with a cache-buster query
      src = `/uploads/${filename}?v=${Date.now()}`;
    }

    // Update config entries
    config[id] = {
      src,
      fit: fit || slotConfig.fit || "cover",
      pos: pos || slotConfig.pos || "50% 50%",
    };

    writeConfig(config);

    return NextResponse.json({ success: true, slot: config[id] });
  } catch (err: any) {
    console.error("Upload API error:", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Missing slot ID" }, { status: 400 });
    }

    const config = readConfig();
    
    if (config[id]) {
      const srcPath = config[id].src;
      if (srcPath && srcPath.startsWith("/uploads/")) {
        // Resolve path to physical file
        const filename = path.basename(srcPath);
        const filePath = path.join(UPLOAD_DIR, filename);
        
        // Remove file if exists
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      // Remove configuration key
      delete config[id];
      writeConfig(config);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Delete API error:", err);
    return NextResponse.json({ error: err.message || "Internal Server Error" }, { status: 500 });
  }
}
