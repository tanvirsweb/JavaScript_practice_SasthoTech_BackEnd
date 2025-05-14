# React Basics – [Tanvir Anjom Siddique](https://github.com/tanvirsweb)

## 🚀 Steps to Setup React Project using Vite + TypeScript

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

---

### 🔍 Check Node.js Version

```bash
node -v
```

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

- Use `className=` instead of `class=` (as `class` is a reserved keyword in JS).
- Use `.map()` instead of traditional `for` loops for rendering lists.
- React components must return a **single root element**.
  - Wrap multiple elements inside: `<div>...</div>` or `<>...</>` (React Fragment).

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

## 🎉 Congratulations!

You're now set up with a basic React + TypeScript + Vite project including:

- Bootstrap styling
- Static and dynamic components
- Reusable generic components
- Props, events, and state management

---

Made with 💙 by **Tanvir Anjom Siddique**  
📁 GitHub: [tanvirsweb](https://github.com/tanvirsweb)  
🌐 Portfolio: [tanvirsweb.github.io](https://tanvirsweb.github.io)
