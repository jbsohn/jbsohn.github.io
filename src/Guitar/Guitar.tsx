import { useRef } from 'react'
import { Image, Box, createStyles } from '@mantine/core'
import { createTextureImage } from "../util/GuitarTexture"

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

export function Guitar() {
    const { classes } = useStyles();

    function setGuitarTexture(image: string) {
        createTextureImage(image, function (image) {

        })
    }

    return (
        <Box className={classes.parent}>
            <Image className={classes.image1} src="/assets/green.png" />
            <Image className={classes.image2} src="/assets/guitar.png" />
        </Box>
    );
}
