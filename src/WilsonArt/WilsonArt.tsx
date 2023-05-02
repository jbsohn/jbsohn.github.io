import { MouseEvent } from 'react';
import { Grid, Box, Image } from '@mantine/core';
import { hplImages } from './hplImages'

// 
export function WilsonArt(props: { onSetGuitarTexture: (image: string) => void }) {
    const textureImages = hplImages.map((filename) => {
        return "assets/HPL/" + filename
    })

    function handleClick(e: MouseEvent<HTMLImageElement>) {
        const imageElement = e.target as HTMLImageElement
        props.onSetGuitarTexture(imageElement.src)
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
