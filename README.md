# Sharp Bitdepth Bug Reproduction

This repo is intended to reproduce an issue where the bitdepth option provided
to Sharp when creating a TIFF image is ignored.

## Run the example

1. Clone the repository.
2. Install dependencies with `npm install`
3. Run the example with `npm start`
4. Use `exiftool output.tif` or some EXIF viewer to check the bit depth of the
   resulting TIFF image to see that the bit depth shows as 8 rather than 1 as
   would be expected.
