import './styles/App.css'
import Text from './components/Text'
import Button from './components/Button'
import Counter from './components/Counter'
import Form from './components/Form'

function App2() {

  return (
    <div>
      <Form />
      <div>
        <Text as="h1" text="Hola, soy un H1" />
        <Text as="h2" text="Hola, soy un H2" />
        <Text as="h3" text="Hola, soy un H3" />
        <Text as="p" text="Hola, soy un p" />
        <Text as="span" text="Hola, soy un span" />
      </div>
      <div className="button-container">
        <Button 
          label="Primary Solid" 
          color="primary" 
          variant="solid" 
          onClick={() => console.log(`Soy un botón solid primary`)}/>
        <Button 
          label="Secondary Solid" 
          color="secondary" 
          variant="solid" 
          onClick={() => console.log(`Soy un botón solid secondary`)}/>
        <Button 
          label="Primary outline" 
          color="primary" 
          variant="outline" 
          onClick={() => console.log(`Soy un botón outline primary`)}/>
        <Button 
          label="Secondary outline" 
          color="secondary" 
          variant="outline" 
          onClick={() => console.log(`Soy un botón outline secondary`)}/>
      </div>
      <Counter />
    </div>
  )
}

export default App2
