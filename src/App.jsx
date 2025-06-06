import './App.css'
import Text from './components/Text'

function App() {

  return (
    <>
      <Text as="h1" text="Hola, soy un H1" />
      <Text as="h2" text="Hola, soy un H2" />
      <Text as="h3" text="Hola, soy un H3" />
      <Text as="p" text="Hola, soy un p" />
      <Text as="span" text="Hola, soy un span" />
    </>
  )
}

export default App
