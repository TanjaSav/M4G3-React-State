# React + Vite + TypeScript – State
A React project built with Vite and TypeScript. 
This project demonstrates effective use of useState for UI control (sidebar visibility) and dynamic component behavior.
 
## How useState Is Used
1. **App.tsx** — Sidebar Toggle
- `useState` is used to control the visibility of the sidebar.
- State variable: `isSidebarOpen`
- When the menu icon is clicked in the `Header`, `setSidebarOpen(true)` opens the sidebar.
- The sidebar is conditionally rendered based on this state.
`const [isSidebarOpen, setSidebarOpen] = useState(false);`
2. **Header.tsx** — Icon Interaction (Optional Enhancement)
- `useState` is used to track which icon is active.
- State variable: `activeIcon`
- This allows dynamic styling or behavior based on user interaction.
`const [activeIcon, setActiveIcon] = useState<string | null>(null);`


### In this project includes reusable components that can be easily adapted for future projects like:
- `Header.tsx` with navigation icons
- `PromoBanner.tsx` with image, text, and CTA button 
- `Sidebar.tsx` — menu overlay.

`App.tsx` demonstrates how to use the components together.


## How to Install React with Vite + TypeScript

1. **Create a new Vite project**  
   `npm create vite@latest my-app -- --template react-ts`

- `my-app` is your project folder name — change it if needed.
- `--template react-ts` sets up React with TypeScript.

2. **Navigate into the project**
`cd my-app`

3. **Install dependencies**
`npm install`

4. **Start the development server**
`npm run dev`


## Demo Link:




