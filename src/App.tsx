import { Guitar } from './Guitar/Guitar';
import { WilsonArt } from './WilsonArt/WilsonArt';
import { ThemeProvider } from './ThemeProvider';
import { useState } from 'react';

export default function App() {
  const [guitarTexture, setGuitarTexture] = useState("/assets/green.png");
  return (
    <ThemeProvider>
      <Guitar guitarTexture={guitarTexture} />
      <WilsonArt setGuitarTexture={setGuitarTexture} />
    </ThemeProvider>
  );
}
