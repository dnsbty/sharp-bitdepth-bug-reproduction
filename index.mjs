import sharp from "sharp"

async function convertFile(inputFile, outputFile) {
  await sharp(inputFile)
    .removeAlpha()
    .toColourspace('b-w')
    .withMetadata({ density: 200 })
    .tiff({ bitdepth: 1, predictor: "none" })
    .toFile(outputFile)
}

await convertFile("input.gif", "output.tif")
