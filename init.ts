/**
 * Tagged bitmap literal converter
 */
//% shim=@f4 helper=bitmaps::ofBuffer blockIdentity="bitmaps._bitmap"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function bmp(lits: any, ...args: any[]): Bitmap { return null; }

control.waitMicros(300000)

// set palette before creating screen, which initializes the display
shieldhelpers.setPalette(hex`000000ffffffff2121ff93c4ff8135fff609249ca378dc52003fad87f2ff8e2ec4a4839f5c406ce5cdc491463d000000`)

const theScreen: Bitmap = __screen_internal.createScreen();
theScreen.fill(15)
// __screen_internal.loop()

namespace __screen_internal {

    export function createScreen() {
        const img = bitmaps.create(
            shieldhelpers.displayWidth(), // control.getConfigValue(DAL.CFG_DISPLAY_WIDTH, 160)
            shieldhelpers.displayHeight() // control.getConfigValue(DAL.CFG_DISPLAY_HEIGHT, 120)
        )

        control.__screen.setupUpdate(() => shieldhelpers.updateScreen(img))
        // control.inBackground(() => {
        radioControlRxLoop();
        // })

        return img as Bitmap;
    }

    export function loop() {

        let i = 0;
        while (true) {
            // basic.showNumber(i)
            screen().fill(i % 16)
            i += 1

            basic.pause(500)
        }
    }
}
