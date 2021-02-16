import { ChatEngine } from "react-chat-engine";
//Components
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
//Styles
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="2599567d-afce-4036-92e7-b264e847e518"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
