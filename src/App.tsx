import { MantineProvider } from '@mantine/core';
import { Guitar } from './Guitar/Guitar';
import { WilsonArt } from './WilsonArt/WilsonArt';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Guitar/>
      <WilsonArt/>
    </MantineProvider>
  );
}
