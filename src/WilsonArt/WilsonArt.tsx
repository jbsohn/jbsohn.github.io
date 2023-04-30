import { Grid, Box, Image } from '@mantine/core';
import { MouseEventHandler, MouseEvent, useState } from 'react';
import { Guitar, setGuitarTexture } from '../Guitar/Guitar'
import { hplImages } from './hplImages'

const textureImages = hplImages.map((filename) => {
    return "assets/HPL/" + filename
})

function handleClick(e: MouseEvent<HTMLImageElement>) {
    const imageElement = e.target as HTMLImageElement
    setGuitarTexture(imageElement.src)
}

export function WilsonArt() {
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
