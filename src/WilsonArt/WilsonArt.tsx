import { MouseEvent } from 'react';
import { Grid, Box, Image } from '@mantine/core';
import { hplImages } from '../util/hplImages'
import { createTextureImage } from "../util/GuitarTexture"

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

    return (
        <Box>
            <Grid>
                {textureImages.map((textureImage, index) => (
                    <Image src={textureImage} key={index} width={40} height={40} onClick={handleClick}></Image>
                ))}
            </Grid>
        </Box>
    );
}
