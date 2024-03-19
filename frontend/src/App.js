import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [typescriptCode, setTypescriptCode] = useState('');
  const [testCases, setTestCases] = useState([]);

  const handleGenerateTestCases = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-test-cases', { typescript_code: typescriptCode });
      setTestCases(response.data);
    } catch (error) {
      console.error('Error generating test cases:', error);
    }
  };

  return (
    <div>
      <center>
      <h2> Input your typescript code here : </h2>
      <textarea border={3} rows={25} cols={120} value={typescriptCode} onChange={(e) => setTypescriptCode(e.target.value)} />
      <br></br>
      <br></br>
      <button onClick={handleGenerateTestCases}>Generate Test Cases</button>
      <br></br>
      <br></br>
      <div>
        {testCases.map((testCase, index) => (
          <div key={index}>{testCase}</div>
        ))}
      </div>
      </center>
    </div>
  );
}

export default App;
