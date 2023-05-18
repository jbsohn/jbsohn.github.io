import { MouseEvent } from 'react';
import { Button, Grid, Card, Image, Container, UnstyledButton } from '@mantine/core';
import { hplImages } from './hplImages'

export function WilsonArt(props: { setGuitarTexture: (image: string) => void }) {
    const textureImages = hplImages.map((filename) => {
        return "assets/HPL/" + filename
    })

    function handleClick(e: MouseEvent<HTMLImageElement>) {
        const imageElement = e.target as HTMLImageElement
        createTextureImage(imageElement.src, function (image: HTMLImageElement) {
            props.setGuitarTexture(image.src)
        })
    }

    function createTextureImage(imageName: string, onComplete: (image: HTMLImageElement) => void) {
        loadImage("assets/white.png", function (backgroundImage) {
            const textureCanvas = document.createElement("canvas")
            textureCanvas.id = "textureCanvas"
            textureCanvas.width = 2042
            textureCanvas.height = 502

            loadImage(imageName, function (textureImage) {
                const textureContext = textureCanvas.getContext("2d")
                if (textureContext) {
                    const pattern = textureContext.createPattern(textureImage, "repeat")
                    if (pattern) {
                        textureContext.fillStyle = pattern
                        textureContext.fillRect(0, 0, textureCanvas.width, textureCanvas.height)
                        textureContext.globalCompositeOperation = "multiply"
                        textureContext.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height)
                        textureContext.globalCompositeOperation = "destination-in"
                        textureContext.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height)

                        const image = document.createElement("img")
                        image.src = textureCanvas.toDataURL()
                        textureCanvas.remove()
                        onComplete(image)
                    }
                }
            })
        })
    }

    function loadImage(imageName: string, onComplete: (image: HTMLImageElement) => void) {
        const image = document.createElement("img")
        image.onload = function () {
            onComplete(image)
        }
        image.src = imageName
    }

    return (
        <Container>
                    {textureImages.map((textureImage, index) => (
                        <UnstyledButton>
                            <Image width="44" height="44" src={textureImage} key={index}  onClick={handleClick}></Image>
                        </UnstyledButton>
                    ))}
        </Container>
    );
}
