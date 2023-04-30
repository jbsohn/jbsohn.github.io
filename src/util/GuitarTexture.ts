
export function createTextureImage(imageName: string, onComplete: (image: HTMLImageElement) => void) {
    loadImage("white.png", function (backgroundImage) {
        const textureCanvas = <HTMLCanvasElement> document.createElement("canvas")
        textureCanvas.id = "textureCanvas"
        textureCanvas.width = 2042
        textureCanvas.height = 502
        textureCanvas.hidden = true
        document.body.appendChild(textureCanvas)

        loadImage(imageName, function (textureImage) {
            const textureContext = <CanvasRenderingContext2D> textureCanvas.getContext("2d")
            textureContext.fillStyle = <CanvasPattern> textureContext.createPattern(textureImage, "repeat") 
            textureContext.fillRect(0, 0, textureCanvas.width, textureCanvas.height)
            textureContext.globalCompositeOperation = "multiply"
            textureContext.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height)
            textureContext.globalCompositeOperation = "destination-in"
            textureContext.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height)

            const image = new HTMLImageElement()
            image.src = textureCanvas.toDataURL()
            textureCanvas.remove()
            onComplete(image)
        })
    })
}

function loadImage(imageName: string, onComplete:(image: HTMLImageElement) => void) {
    const image = new HTMLImageElement()
    image.onload = function () {
        onComplete(image)
    }
    image.src = imageName
}
