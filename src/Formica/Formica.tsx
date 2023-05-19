import { MouseEvent } from 'react';
import { Button, Grid, Card, Image, Container, UnstyledButton } from '@mantine/core';
import { formicaImages } from './formicaImages'
import { createTextureImage } from '../Utils/texture'

export function Formica(props: { setGuitarTexture: (image: string) => void }) {
    const textureImages = formicaImages.map((filename) => {
        return "assets/Formica/" + filename
    })

    function handleClick(e: MouseEvent<HTMLImageElement>) {
        const imageElement = e.target as HTMLImageElement
        createTextureImage(imageElement.src, function (image: HTMLImageElement) {
            props.setGuitarTexture(image.src)
        })
    }

    return (
        <Container>
            {textureImages.map((textureImage, index) => (
                <UnstyledButton>
                    <Image width="44" height="44" src={textureImage} key={index} onClick={handleClick}></Image>
                </UnstyledButton>
            ))}
        </Container>
    );
}
