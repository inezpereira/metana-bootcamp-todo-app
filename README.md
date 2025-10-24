# ☑️ Mood-Based To-Do App

A static web application designed to help users manage tasks based on their mood. This repository contains the foundational HTML and CSS files for the app, focusing on responsive design and reusable components.

This project is part of the full-stack bootcamp assignment M2. 

## Features

- **Home Page**: Displays a list of tasks, buttons to create new tasks, and a mood selector.
- **Login Page**: A simple login form for user authentication.
- **Task Component**: A reusable card for displaying individual tasks.
- **Suggested Task Component**: A placeholder for suggested tasks based on mood and weather.
- **Task Creation Form**: A form for adding new tasks.
- **Mood Selector**: A dropdown or button group for selecting the user's mood.

## Folder Structure

```
module-2/mood-based-todo-app/
├── Styles/
│   ├── index.css
│   ├── login.css
│   ├── tasksComponent.css
│   ├── suggestedTaskComponent.css
│   ├── taskCreationForm.css
│   └── moodSelector.css
├── Assets/
│   └── // All assets used in the project
├── Components/
│   ├── taskComponent.html
│   ├── suggestedTaskComponent.html
│   ├── taskCreationForm.html
│   ├── moodSelectorForm.html
│   └── loginForm.html
└── index.html
```


## Components

### Home Page (`index.html`)
- Displays a list of tasks.
- Space for suggested tasks based on mood and weather.

### Login Page (`Components/loginForm.html`)
- Input fields for username/email and password.
- Login button.

### Task Component (`Components/tasksComponent.html`)
- Reusable card for individual tasks.
- Placeholders for task title, description, and action buttons.

### Suggested Task Component (`Components/suggestedTaskComponent.html`)
- Placeholder for suggested tasks.

### Task Creation Form (`Components/taskCreationForm.html`)
- Form fields for task title, description, and due date.
- Button to add a new task.

### Mood Selector (`Components/moodSelecterForm.html`)
- Dropdown or button group for selecting mood (Happy, Neutral, Sad).

## Responsive Design

- Built using CSS Flexbox and Grid.
- Adapts to various screen sizes (desktop, tablet, mobile).
- Ensures readability and usability on all devices.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to view the home page.
3. Navigate through the components to see the static templates.

## Customization

- Modify the CSS files in the `Styles` directory to change the appearance.
- Adjust the HTML files in the `Components` directory to alter the structure.

## Contributing

This project is part of an educational assignment. Contributions and suggestions are welcome for learning purposes.

## License

This project is for educational purposes and does not include a specific license.
