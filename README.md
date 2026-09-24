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

- ## 🛠️ Extra Questions Answers
# What is JSX, and why is it used in React?
  Ans: JSX stands for JavaScript XML, it is an extention for javaScript that lets us write HTML like code directly inside javaScript and it is used in React

#What does the useState hook do, and where did you use it in this project?
  Ans:  When Data is passed from parent to child it is Props &
	  When a data belongs to a component that can change later
    
#What does useState do, and where did you use it?
    Ans:  useState is a component that lets us store and update data.
	    In this project, I used it to store the technology list (technologies), track selected items (stack), and manage the loading state. 

#What does useEffect do, and why did you need it to load JSON data?
  Ans:	useEffect handles effects in React, such as fetching data after a component renders. I needed it to run an asynchronous fetch() call to load /data.json when the page first loads. 

#Why does every item in a .map() list need a unique key prop?
  Ans:	A unique key prop helps React track which items in a list have been added, removed, or modified. This allows React to efficiently update only the specific changed element instead of re-rendering the entire list. 

#What is conditional rendering? Show one place you used it (example: the empty stack message).
  Ans: 	Conditional rendering means showing or hiding UI elements based on a true/false condition. I used it in Sidebar.jsx to render the "Your stack is empty" message when stack.length === 0 and show the selected items when stack.length > 0. 

#How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  Ans:	A parent component passes data down to a child using props. For example, MainLayout passes the single technology object (tech={tech}) down to the TechCard component. To send data back, the parent component passes     a handler function down as a prop. When a user clicks the "Add to Stack" button inside TechCard, the child executes that function (handleAddToStack(tech)). This sends the selected technology object back up to update       the stack state in MainLayout.

---

