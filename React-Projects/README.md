# React Basics – [Tanvir Anjom Siddique](https://github.com/tanvirsweb)

## 📚 Table of Contents

- [Prerequisites](#-prerequisites)
- [Setup & Installation](#️-create-react-project-latest-vite)
- [Creating Components](#-start-coding)
- [Styling with Bootstrap](#-add-bootstrap-in-srcmaintsx)
- [Using State & Events](#️-add-onclick-event-listgroup-with-state)
- [Reusable Components](#-create-generic-list-component-using-props-interface)
- [Alert & Button Components](#-use-alert)
- [Useful Tools](#-inspecting-components-with-react-developer-tools)

---

## 🚀 Steps to Setup `React Project` using `Vite + TypeScript`

---

### ✅ Prerequisites

- [Download Node.js](https://nodejs.org/en/download)
- [Download VS Code](https://code.visualstudio.com/download)

#### VS Code Extensions:

- Prettier Code Formatter

  - Enable **Format on Save**:

  ```
  Go to File > Preferences > Settings > Search: format on save > Enable it
  ```

- ES7+ React/Redux/React-Native snippets

---

### 🔍 Check Node.js Version

```bash
node -v
```

- If you are not starting new project but cloned this git repository `open React-Basics folder in terminal ` then run

```bash
# install all necessary dependencies speified in package.json
npm install

# open vscode
code .

# run project
npm run dev
```

- Now open [http://localhost:5173/](http://localhost:5173/) in browser and you can see this project's webpage on it.

---

### ⚙️ Create React Project (Latest Vite)

```bash
npm create vite@latest
```

### ⚙️ Create React Project (Specific Vite Version)

```bash
npm create vite@4.1.0
# Press 'y' when prompted
# Project Name: React-Basics
# Select: React + TypeScript (using arrow & enter button)
```

---

### 📂 Navigate, Install, Open in VS Code

```bash
cd React-Basics
npm install
npm install bootstrap@5.2.3
code .
```

---

### 🎨 Add Bootstrap in `src/main.tsx`

```ts
import "bootstrap/dist/css/bootstrap.css";
```

---

### ▶️ Run Project

```bash
npm run dev
```

---

### ❌ Stop Dev Server

```bash
ctrl + c
```

---

## ✨ Start Coding

### 🧠 Create Message Component: `src/components/Message.tsx`

```tsx
function Message() {
  return <h2 className="text-center">Hello world!! I am a React Developer.</h2>;
}
export default Message;
```

---

### 📝 Notes

- Use **`className=`** instead of `class=` (as `class` is a reserved keyword in JS).
- Use **`.map()`** instead of traditional `for` loops for rendering lists.
- React components must return a **single root element**.
  - Wrap multiple elements inside: **`<div>...</div>`** or **`<>...</>`** (**`React Fragment`**).

---

### 📋 Static ListGroup Component: `src/components/ListGroup.tsx`

```tsx
function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London"];
  let active_index = 0;

  return (
    <>
      <h1>Static List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              active_index === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
```

---

### 🔗 Connect Components: `src/App.tsx`

```tsx
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div className="container">
      <Message />
      <ListGroup />
    </div>
  );
}

export default App;
```

---

## 🖱️ Add onClick Event: ListGroup With State

```tsx
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="mt-4">Static List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              console.log(`index: ${index} item: ${item}`);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
```

---

## 💎 Create Generic List Component using Props Interface

### 🧩 `src/components/GenericListGroup.tsx`

```tsx
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function GenericListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="mt-4">{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default GenericListGroup;
```

---

### 🧠 Use Generic Component in `src/App.tsx`

```tsx
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";

function App() {
  let items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container">
      <Message />
      <ListGroup />
      <GenericListGroup
        items={items}
        heading="List2: Generic Items"
        onSelectItem={handleSelectItem}
      />
      <GenericListGroup
        items={["Bangladesh", "America", "England", "Australia"]}
        heading="List3: Country"
        onSelectItem={(item) => console.log(`selected item: ${item}`)}
      />
    </div>
  );
}

export default App;
```

---

### 🧠Use Alert

- Install VScode extension: **_ES7+ React/Redux/React-Native snippets_**
- Create `src/components/Alert.tsx`
- Write `rafce` and you will get a code template

```tsx
import React from "react";

const Alert = () => {
  return <div>Alert</div>;
};

export default Alert;
```

- `src/components/Alert.tsx`

```tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary"> {children} </div>;
};

export default Alert;
```

- `src/App.tsx`

```tsx
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";

function App() {
  let items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container bg-transparent p-4 m-4 shadow">
      <Message />
      <hr />
      <ListGroup />
      <GenericListGroup
        items={items}
        heading="List2: Generic Items"
        onSelectItem={handleSelectItem}
      />

      <GenericListGroup
        items={["Bangladesh", "America", "England", "Australia"]}
        heading="List3: Country"
        onSelectItem={(item) => console.log(`selected item: ${item}`)}
      />

      <div className="m-4"></div>
      <Alert>
        Alert <span>Message</span>
      </Alert>
    </div>
  );
}

export default App;
```

---

### 🧠Inspecting components with [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- Search `React Developer Tools` in Chrome and add to Chrome
- `Open React project in Chrome > right click > inspect > 'console>>' > components`

---

### 🧠Building a Button Component

- `src/components/Button.tsx`
- Write `rafce` for template

```tsx
import { useState } from "react";

interface Props {
  children: string;
  // you can assign color with only one of these 3 values
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default Button;
```

- `src/App.tsx`

```tsx
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";
import Button from "./components/Button";

function App() {
  let items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container bg-transparent p-4 m-4 shadow">
      <Message />
      <hr />
      <ListGroup />
      <GenericListGroup
        items={items}
        heading="List2: Generic Items"
        onSelectItem={handleSelectItem}
      />

      <GenericListGroup
        items={["Bangladesh", "America", "England", "Australia"]}
        heading="List3: Country"
        onSelectItem={(item) => console.log(`selected item: ${item}`)}
      />

      <div className="m-4"></div>
      <Alert>
        Alert <span>Message</span>
      </Alert>

      <Button color="primary" onClick={() => console.log("Button Clicked")}>
        {" "}
        Click Me{" "}
      </Button>
    </div>
  );
}

export default App;
```

---

### 🧠Showing An Alert

- `src/components/Alert.tsx`

```tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      onClick={onClose}
      role="alert"
    >
      <strong> {children} </strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
```

- `src/component/Button.tsx`

```tsx
import { useState } from "react";
import Alert from "./Alert";
import { set } from "zod";

interface Props {
  children: string;
  // you can assign color with only one of these 3 values
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <button
        className={"btn btn-" + color}
        onClick={() => {
          setAlertVisible(true);
          onClick();
        }}
      >
        {children}
      </button>

      <div className="m-4"></div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
    </div>
  );
};

export default Button;
```

- `src/App.tsx`

```tsx
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";
import Button from "./components/Button";

function App() {
  let items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="container bg-transparent p-4 m-4 shadow">
      <Message />
      <hr />
      <ListGroup />
      <GenericListGroup
        items={items}
        heading="List-02: Generic Items"
        onSelectItem={handleSelectItem}
      />

      <GenericListGroup
        items={["Bangladesh", "America", "England", "Australia"]}
        heading="List-03: Country"
        onSelectItem={(item) => console.log(`selected item: ${item}`)}
      />

      <div className="m-4"></div>

      <Button color="primary" onClick={() => console.log("Button Clicked")}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
```

---

### 🧠 Routing in React

- Install dependencies

  ```bash
  npm install react-router-dom
  ```

- `src/main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

- `src/App.tsx`

```tsx
// App.tsx
import { Routes, Route, Link } from "react-router-dom";
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";
import Button from "./components/Button";

function App() {
  const items = ["Item-0", "Item-1", "Item-2", "Item-3", "Item-4"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="container bg-transparent m-4 p-4 shadow">
      {/* Navigation Bar */}
      <nav className="mb-4">
        <Link to="/" className="btn btn-outline-primary me-2">
          Home
        </Link>
        <Link to="/message" className="btn btn-outline-primary me-2">
          Message
        </Link>
        <Link to="/list" className="btn btn-outline-primary me-2">
          List Group
        </Link>
        <Link to="/generic-list" className="btn btn-outline-primary me-2">
          Generic List
        </Link>
        <Link to="/button" className="btn btn-outline-primary me-2">
          Alert Button
        </Link>
      </nav>

      {/* Routes: Specify for each link which component to show. In each Link components outside Routes will remain same */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h4>Welcome to React Components Demo</h4>
              <p>
                Routes: Specify for each link which component to show. For each
                Link components outside Routes will remain same.
              </p>
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
                items={["Bangladesh", "America", "England", "Australia"]}
                heading="List-03: Country"
                onSelectItem={(item) => console.log(`selected item: ${item}`)}
              />
            </>
          }
        />

        <Route
          path="/button"
          element={
            <Button
              color="primary"
              onClick={() => console.log("Button Clicked")}
            >
              Click Me
            </Button>
          }
        />
        {/* End Routes */}
      </Routes>
    </div>
  );
}

export default App;
```

- `src/App.tsx` with active link

```tsx
// App.tsx
import { Routes, Route, NavLink } from "react-router-dom";
import Alert from "./components/Alert";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import GenericListGroup from "./components/GenericListGroup";
import Button from "./components/Button";

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
            isActive ? "btn btn-primary m-2" : "btn btn-outline-primary m-2"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-2" : "btn btn-outline-primary m-2"
          }
        >
          Message
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-2" : "btn btn-outline-primary m-2"
          }
        >
          List Group
        </NavLink>

        <NavLink
          to="/generic-list"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-2" : "btn btn-outline-primary m-2"
          }
        >
          Generic List
        </NavLink>

        <NavLink
          to="/button"
          className={({ isActive }) =>
            isActive ? "btn btn-primary m-2" : "btn btn-outline-primary m-2"
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
                items={["Bangladesh", "America", "England", "Australia"]}
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
              onClick={() => console.log("Button Clicked")}
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
```

---

## 🎉 Congratulations!

You're now set up with a basic **`React + TypeScript + Vite`** project including:

- ✅ Setup with Vite & TS

- ✅ Functional components

- ✅ Props & State

- ✅ Bootstrap styling

- ✅ Reusable components

---

Made with 💙 by **Tanvir Anjom Siddique**  
📁 GitHub: [tanvirsweb](https://github.com/tanvirsweb)  
🌐 Portfolio: [tanvirsweb.github.io](https://tanvirsweb.github.io)
