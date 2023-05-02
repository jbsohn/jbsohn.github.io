import { Guitar } from './Guitar/Guitar';
import { WilsonArt } from './WilsonArt/WilsonArt';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  function setGuitarTexture(image: string) {
    console.log("setGuitarTexture, image: " + image)
  }

  return (
    <ThemeProvider>
      <Guitar />
      <WilsonArt onSetGuitarTexture={setGuitarTexture} />
    </ThemeProvider>
  );
}
