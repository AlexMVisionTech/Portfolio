// One-off: optimize photos for web (resize + EXIF strip).
// Usage: node scripts/optimize-photo.mjs <input.jpg> [output.jpg] [maxHeight]
import sharp from 'sharp'
import { statSync } from 'node:fs'

const [input, output = 'public/profile-photo.jpg', heightArg = '1600'] = process.argv.slice(2)

if (!input) {
  console.error('Usage: node scripts/optimize-photo.mjs <input.jpg> [output.jpg] [maxHeight]')
  process.exit(1)
}

const before = statSync(input).size

await sharp(input)
  .rotate() // respect EXIF orientation
  .resize({ height: parseInt(heightArg, 10) || 1600, withoutEnlargement: true })
  .jpeg({ quality: 85, progressive: true, mozjpeg: true })
  .toFile(output)

const after = statSync(output).size
const meta = await sharp(output).metadata()

console.log(
  `optimized: ${meta.width}x${meta.height}px, ` +
  `${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024).toFixed(0)} KB (${output})`
)
