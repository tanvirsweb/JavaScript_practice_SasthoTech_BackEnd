// App.tsx
import { Routes, Route, NavLink } from 'react-router-dom'
import Alert from './components/Alert'
import Message from './components/Message'
import ListGroup from './components/ListGroup'
import GenericListGroup from './components/GenericListGroup'
import Button from './components/Button'

function App() {
  const items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container bg-transparent m-4 p-4 shadow">
      {/* Navigation Bar */}
      <nav className="mb-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
          }
        >
          Message
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
          }
        >
          List Group
        </NavLink>

        <NavLink
          to="/generic-list"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
          }
        >
          Generic List
        </NavLink>

        <NavLink
          to="/button"
          className={({ isActive }) =>
            isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'
          }
        >
          Alert Button
        </NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h4>Welcome to React Components Demo</h4>
              <p>Use the navigation bar to explore each component.</p>
            </div>
          }
        />

        <Route path="/message" element={<Message />} />

        <Route path="/list" element={<ListGroup />} />

        <Route
          path="/generic-list"
          element={
            <>
              <GenericListGroup
                items={items}
                heading="List-02: Generic Items"
                onSelectItem={handleSelectItem}
              />
              <GenericListGroup
                items={['Bangladesh', 'America', 'England', 'Australia']}
                heading="List-03: Country"
                onSelectItem={(item) => console.log(`Selected item: ${item}`)}
              />
            </>
          }
        />

        <Route
          path="/button"
          element={
            <Button
              color="primary"
              onClick={() => console.log('Button Clicked')}
            >
              Click Me
            </Button>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
