# replace

Replace all the pixels of one color with pixels of another color.

```sig
bitmaps.create(0, 0).replace(0, 0)
```

## Parameters

* **from**: the color [number](/types/number) of the pixels to change
* **to**: the color [number](/types/number) of the replacement pixels

## Example #example

Make a square of random colors, then randomly replace the colors until the square becomes just one color.

```blocks
let colorBlock = bitmaps.create(32, 32)
for (let y = 0; y < 32; y++) {
    for (let x = 0; x < 32; x++) {
        colorBlock.setPixel(x, y, Math.randomRange(0, 15))
    }
}
basic.forever(() => {
    screen().drawBitmap(colorBlock, 0, 0)
    basic.pause(500)
    colorBlock.replace(Math.randomRange(0, 15), Math.randomRange(0, 15))
})
```


```package
display-shield=github:microbit-apps/display-shield
```
