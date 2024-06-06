import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="0c033c07-4731-40fc-bef6-b961ecd3376f"
        userName="odhiambo-ed"
        userSecret="12900001"
        renderChatFeed={(chatAppProps) => <ChatFeed />}
      />
    </div>
  );
}

export default App;
