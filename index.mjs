import sharp from "sharp"

async function convertFile(inputFile, outputFile) {
  await sharp(inputFile)
    .tiff({ bitdepth: 1 })
    .toFile(outputFile)
}

await convertFile("input.gif", "output.tif")
