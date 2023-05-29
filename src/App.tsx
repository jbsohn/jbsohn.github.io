import { Guitar } from './Guitar/Guitar';
import { WilsonArt } from './WilsonArt/WilsonArt';
import { PrecisionDrum } from './PrecisionDrum/PrecisionDrum';
import { Formica } from './Formica/Formica';
import { ThemeProvider } from './ThemeProvider';
import { useState } from 'react';
import { Container, Tabs } from '@mantine/core';

export default function App() {
  const [guitarTexture, setGuitarTexture] = useState("/assets/green.png");
  return (
    <ThemeProvider>
      <Guitar guitarTexture={guitarTexture} />
      <Tabs defaultValue="wilsonArt">
        <Tabs.List>
          <Tabs.Tab value="wilson">WilsonArt</Tabs.Tab>
          <Tabs.Tab value="precision">Precision Drum</Tabs.Tab>
          <Tabs.Tab value="formica">Formica</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="wilson">
          <WilsonArt setGuitarTexture={setGuitarTexture} />
        </Tabs.Panel>
        <Tabs.Panel value="precision">
          <PrecisionDrum setGuitarTexture={setGuitarTexture} />
        </Tabs.Panel>
        <Tabs.Panel value="formica">
          <Formica setGuitarTexture={setGuitarTexture} />
        </Tabs.Panel>
      </Tabs>
    </ThemeProvider>
  );
}
