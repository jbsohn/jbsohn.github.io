import { useRef } from 'react'
import { Image, Box, createStyles } from '@mantine/core'
import { createTextureImage } from "../util/GuitarTexture"
import React from 'react';

const useStyles = createStyles(() => ({
    parent: {
        position: "relative",
        top: "0px",
        left: "0px"
    },
    image1: {
        position: "relative",
        top: "0px",
        left: "0px"
    },
    image2: {
        position: "absolute",
        top: "0px",
        left: "0px"
    }
}));


export function setGuitarTexture(image: string) {
    console.log("setGuitarTexture, image: " + image)
    
    createTextureImage(image, function(image) {
        console.log("setGuitarTexture, created image: " + image)
    })
}

export function Guitar() {
    const { classes } = useStyles();
    return (
        <Box className={classes.parent}>
            <Image className={classes.image1} src="assets/green.png" id="textureRef" />
            <Image className={classes.image2} src="assets/guitar.png" />
        </Box>
    );
}
