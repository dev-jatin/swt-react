import React, { useState } from 'react';
import './App.css'; // Optional

const App = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSend = () => {

  if (window.sendQuerry) {
    window.sendQuerry(message); 
  } else {
    console.warn("sendQuerry not available");
  }


    if (message.trim()) {


      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  };





  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome, <span style={styles.strike}>YourName hdkfdkslfjdlskfjdks</span>!
      </h1>

      <div style={styles.section}>
        <p style={styles.subTitle}>Explore Actions</p>
        <p style={styles.note}>Please select code or text, to launch these actions</p>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>Explain Code</button>
          <button style={styles.button}>Generate Tests</button>
          <button style={styles.button}>Optimize Code</button>
          <button style={styles.button}>Generate Docs</button>
          <button style={styles.button}>Find Security Issues</button>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subTitle}>What would you like to chat about?</h3>
        <div style={styles.chatOptions}>
          <div style={styles.chatBox}>How to implement a RESTful API in a Flask application?</div>
          <div style={styles.chatBox}>Can you explain the concept of virtual DOM in React?</div>
        </div>
      </div>

      {/* Chat History */}
      <div style={styles.chatHistory}>
        {chatMessages.map((msg, idx) => (
          <div key={idx} style={styles.chatBubble}>
            {msg}
          </div>
        ))}
      </div>

      <p style={styles.footer}>[Redacted Disclaimer or Support Info]</p>
      <button style={styles.contextButton}>Add Context</button>

      {/* Chat Input at Bottom */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button style={styles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1c1c1c',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    paddingBottom: '100px', // leave space for input
    textAlign: 'center',
    minHeight: '100vh',
    position: 'relative'
  },
  title: {
    color: '#ff5cf4',
    fontSize: '28px',
    marginBottom: '10px'
  },
  strike: {
    textDecoration: 'line-through red'
  },
  section: {
    marginTop: '40px'
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '10px'
  },
  note: {
    fontSize: '14px',
    color: '#ccc',
    marginBottom: '20px'
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px'
  },
  button: {
    backgroundColor: '#2e2e2e',
    color: '#dcdcdc',
    padding: '10px 16px',
    border: '1px solid #555',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  chatOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px'
  },
  chatBox: {
    backgroundColor: '#444',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s'
  },
  chatHistory: {
    marginTop: '30px',
    textAlign: 'left',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  chatBubble: {
    backgroundColor: '#333',
    padding: '10px 15px',
    borderRadius: '10px',
    margin: '6px 0',
    color: '#fff'
  },
  footer: {
    marginTop: '50px',
    fontSize: '12px',
    color: 'red'
  },
  contextButton: {
    marginTop: '20px',
    backgroundColor: '#2e2e2e',
    color: '#ccc',
    padding: '10px 16px',
    border: '1px solid #555',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer'
  },
  inputContainer: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#1c1c1c',
    borderTop: '1px solid #444',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#2e2e2e',
    color: '#fff',
    fontSize: '14px'
  },
  sendButton: {
    backgroundColor: '#ff5cf4',
    color: '#1c1c1c',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    cursor: 'pointer'
  }
};

export default App;
