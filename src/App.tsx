import { Guitar } from './Guitar/Guitar';
import { WilsonArt } from './WilsonArt/WilsonArt';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Guitar />
      <WilsonArt />
    </ThemeProvider>
  );
}
