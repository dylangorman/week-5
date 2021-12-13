const App = () => {
    return (
      <div>
        <h1>hello there</h1>
        <Greeting/>
        </div>
      )
  } 
  const Greeting = () =>{
    return<h2>Dylan Gorman</h2>
  }
  ReactDOM.render(<App />, mountNode);