import React, {
    useState
} from 'react'
import './App.css'
import ValidationComponent from 'react-native-form-validator';

function App() {
    //initializing state
    const [mail, setMail] = useState('');
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState('')
        //parsing the data into json and sending it.
    const submitValue = () => {
            const data = JSON.stringify({
                'mail': mail,
                'comment': comment
            })
            sendData(data);
        }
        //validating with regex expression
    function validate(mail, comment) {
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return {
            mail: !expression.test(mail),
            comment: comment.length > 100
        }
    }
    const errors = validate(mail, comment);
    //checks if the inputs have atleast one element in the array that passes the test.
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    //XMLHttpRequest to server in addition to retrieving server response to print for UI.
    function sendData(data) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:9000');
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.statusText !== "OK") {
                    setResponse("Failed to respond due to: " + xhr.statusText);
                } else {
                    setResponse(xhr.responseText);
                }

            }
        };
        xhr.send(data);
    }
      return(
      <>
      <div>
      <h1>iMove application</h1>
      <input type="email" 
             className={errors.mail ? "error" : ""}  
             placeholder="Enter email" 
             onChange = {e=>setMail(e.target.value)}/><br/>
      <input type="text" 
             className={errors.comment ? "error" : ""} 
             placeholder="Comment (Optional)" 
             onChange = {e=>setComment(e.target.value)}/><br/>
      <button type ="submit" disabled = {!isEnabled} onClick = {submitValue}>Submit</button>
      <h1>{response}</h1>
      </div>
      </>
        );
    }
export default App;