# Dev Stack Builder

Dev Stack Builder is a simple web app that helps developers explore different technologies and build their custom tech stack. You can browse popular tools across categories like Frontend, Backend, Databases, and DevOps, see their details, and add them to your personal stack.

---

## 📸 Website Preview

<img width="1900" height="938" alt="Preview" src="https://github.com/user-attachments/assets/a2e02481-a38c-4686-83fb-93b338bb8f1c" />


---

## ✨ Features

- **Browse Technologies**: View cards showing tech icons, ratings, categories, badges, and difficulty levels loaded dynamically from a JSON file.
- **Build Your Stack**: Add tools to your sidebar stack, prevent duplicates, and remove items individually or all at once.
- **Interactive Alerts & Loading**: Get real-time toast notifications for actions and see a smooth loading state while data fetches.

---

## 🛠️ Built With

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **React Toastify** & **React Icons**

---

## ❓ React Concepts & Questions

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets you write HTML directly inside JavaScript code. It is used in React because it makes designing user interfaces much easier to read and write compared to raw JavaScript DOM creation methods.

### 2. What is the difference between props and state?
Props are read-only inputs passed down from a parent component to a child component. State is internal data managed directly inside a component that can change over time based on user actions, causing the component to re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` allows functional components to create and manage local state variables. In this project, it is used in `MainLayout.jsx` to manage the list of technologies, track the user's selected stack, and handle the loading spinner state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React, such as fetching data or subscribing to events after a component mounts. It was needed here to run an asynchronous `fetch()` call to load `/data.json` when the app first renders.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop gives React a unique identifier for each list element. This helps React figure out which specific items changed, added, or removed so it can efficiently update only those elements instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements depending on a boolean condition. In this app, it is used in `Sidebar.jsx` to show "Your stack is empty" when no items are selected, or display the list of added technologies when `stack.length > 0`.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component passes data down to a child using **props**. To send data back up, the parent passes a function as a prop, and the child calls that function whenever an action occurs (like clicking an "Add to Stack" button).
