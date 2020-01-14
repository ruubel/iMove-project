import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
  <header className="App-header">
  <iframe title = "myFrame" name="hiddenFrame" className="hidden"></iframe>
    <h1>iMove application</h1>
    <form action = "http://localhost:9000/myAction" method = "POST" target = "hiddenFrame">
      <div className="form-group">
        <input type="email" className="form-control" name="mail" placeholder="Enter email"></input>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="comment" placeholder="Comment (optional)"></input>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  </header>
</div>
    );
}
export default App;