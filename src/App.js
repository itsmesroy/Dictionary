import React, {useState}  from 'react' 
import './App.css';

function App() {
  const dictionary=[{ word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
    { word: "Props", meaning: "Short for 'properties', props are used to pass data from parent to child components." },
{ word: "JSX", meaning: "A syntax extension for JavaScript that looks similar to HTML and is used in React to describe the UI." },
{ word: "Lifecycle Methods", meaning: "Functions in React components that are called at specific points during a component's lifecycle." },
{ word: "Virtual DOM", meaning: "A lightweight copy of the real DOM used by React to optimize updates." },
{ word: "Hooks", meaning: "Special functions in React (like useState and useEffect) that let you use state and lifecycle methods in functional components." },
{ word: "useEffect", meaning: "A React Hook that performs side effects like data fetching or DOM manipulation after render." },
{ word: "Context", meaning: "A React feature that allows data to be shared across components without passing props manually." },
{ word: "Reducer", meaning: "A function used in React's useReducer Hook to manage complex state updates." },
{ word: "Element", meaning: "The basic building block of an HTML document, such as a paragraph (<p>), heading (<h1>), or div (<div>)." },
{ word: "Attribute", meaning: "Provides additional information about an HTML element, such as id, class, or style." },
{ word: "Semantic HTML", meaning: "HTML elements that convey meaning about their content, like <article>, <section>, or <header>." },
{ word: "Anchor", meaning: "An HTML element (<a>) used to create hyperlinks to other pages or locations within a page." },
{ word: "Form", meaning: "An HTML element used to collect user input, such as <form>, <input>, or <textarea>." },
{ word: "Iframe", meaning: "An HTML element used to embed another HTML document within the current page." },
{ word: "Viewport", meaning: "The visible area of a web page on a user's device, controlled using the <meta> tag in responsive design." },
{ word: "Selector", meaning: "A pattern used to select and style elements in CSS, such as class (.className) or ID (#idName)." },
{ word: "Flexbox", meaning: "A CSS layout model that provides a way to align and distribute items in a container, even if their size is dynamic." },
{ word: "Grid", meaning: "A CSS layout system designed for creating complex, responsive layouts using rows and columns." },
{ word: "Pseudo-class", meaning: "A keyword added to a selector that specifies a special state of the selected element, such as :hover or :nth-child()." },
{ word: "Media Query", meaning: "A CSS technique used to apply styles based on the device's size, resolution, or orientation." },
{ word: "Box Model", meaning: "A CSS concept that describes the rectangular boxes generated for elements, consisting of margins, borders, padding, and content." },
{ word: "Z-index", meaning: "A CSS property that specifies the stack order of elements, with higher values appearing in front of lower ones." },
{ word: "Opacity", meaning: "A CSS property that sets the transparency level of an element." },

  ];

    const [definition, setDefinition]=useState("") 
    const [words, setWords] = useState("")

  const handleDefinition=()=>{
    if (!words.trim()) {
      setDefinition("Word not found in the dictionary.");
      return;
    }
    const answer = dictionary.find(
      (entry) => entry.word.toLowerCase() === words.trim().toLowerCase()
    );
    setDefinition(answer ? answer.meaning : "Word not found in the dictionary.");
    }



  return (
    <div className="App">
      <h1> Dictionary App</h1>
      <div >
    <input placeholder="Enter your word"
    value={words}
    type="text"
    onChange={(e)=>setWords(e.target.value)}
    style={{width:"30vh", height:"5vh", borderRadius:"5px"}}
    />
    <button onClick={handleDefinition} style={{margin:"10px",gap:"10px",cursor:"pointer", width:"20vh", height:"5vh", background:"#0003"}}>Search</button>
        </div>
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
    </div>
  );
}

export default App;
