import './App.css';
import Post from "./Post";

function App() {
  return (
    <div className="app">
     <div className="app__header">
       <img 
         className=".app__headerImage"
         alt= "Add logo here"
       />
       {/* add source */}
     </div>
     <h1>hi</h1>
     <Post />
    </div>
    
  );
}

export default App;
