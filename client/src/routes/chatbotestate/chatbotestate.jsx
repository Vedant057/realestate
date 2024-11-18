import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../../components/Chatbot/config';
import ActionProvider from '../../components/Chatbot/ActionProvider';
import MessageParser from '../../components/Chatbot/MessageParser';
import './chatbot.scss'


function chatbotestate() {

  return (
    <div className="chatbotPage">
    <div className="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
      <div className="imgContainer">
       <img src="/bg6.png" alt="" />
      </div>
    </div>
  );
}

export default chatbotestate;
