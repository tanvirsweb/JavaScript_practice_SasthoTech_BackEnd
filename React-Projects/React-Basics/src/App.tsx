import Alert from './components/Alert'
import Message from './components/Message'
import ListGroup from './components/ListGroup'
import GenericListGroup from './components/GenericListGroup'
import Button from './components/Button'

function App() {
  let items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"]
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
      <div className='container bg-transparent p-4 m-4 shadow'>
        <Message/>
        <hr/>
        <ListGroup/>
        <GenericListGroup items={items} heading="List-02: Generic Items" onSelectItem={handleSelectItem}/>
        
        <GenericListGroup 
          items={['Bangladesh', 'America', 'England', 'Australia']} 
          heading="List-03: Country" 
          onSelectItem={(item)=> console.log(`selected item: ${item}`)}/>

        <div className='m-4'></div>
        
        <Button color='primary' onClick={ () => console.log('Button Clicked') }> Click Me </Button>
      </div>

  )
}

export default App
