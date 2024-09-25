import Page from './components/Page';
import ThemeContextProvider from '../util/ThemeContextProvider.js';
 
function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}
 
export default App;