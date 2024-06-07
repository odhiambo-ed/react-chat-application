import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

function App() {
  if (!localStorage.getItem('username')) return <Login />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="0c033c07-4731-40fc-bef6-b961ecd3376f"
        userName="odhiambo-ed"
        userSecret="12900001"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
