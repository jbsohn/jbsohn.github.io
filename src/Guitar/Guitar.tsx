import { Image, Box, createStyles } from '@mantine/core'

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

export function Guitar(props: { guitarTexture: string }) {
    const { classes } = useStyles();
    return (
        <Box className={classes.parent}>
            <Image className={classes.image1} src={props.guitarTexture} />
            <Image className={classes.image2} src="/assets/guitar.png" />
        </Box>
    );
}
