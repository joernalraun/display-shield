# clone

Copy a bitmap to make another just like it.

```sig
bitmaps.create(0, 0).clone()
```

A new bitmap is created that is a copy of the original. The bitmap layout and pixel colors are the same.

## Returns

* a bitmap that is an exact copy of the original bitmap.

## Example #example

Make a bitmap layout for a stick figure person. Clone the bitmap and display it below the original bitmap.

```blocks
let stickPerson1 = bmp`
. . . a a . . .
. . a . . a . .
. . . a a . . .
. . . a . . . .
a a a a a a a .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . a   a . . .
. a . . . a . .
. a a . . a a .
`
let stickPerson2 = stickPerson1.clone()
screen().drawBitmap(stickPerson1, 0, 0)
screen().drawBitmap(stickPerson2, 0, 32)
```

```package
display-shield=github:microbit-apps/display-shield
```
