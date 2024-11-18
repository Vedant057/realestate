import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './items/avatar';
import User from './items/useravatar'
import StartBtn from './items/StartBtn';
import StartSlow from './items/StartSlow';
import data from './data';
import DipslayImage from './items/DipslayImage';



const config = {
    botName: "Real Estate Bot",
    initialMessages: [createChatBotMessage(`Welcome to Real Estate!`, {
        widget: "startBtn"
    })],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
        userAvatar: (props) => <User {...props} />,
    },
    state: {
        checker: null,
        data,
        userData: {
            name: "",
            age: 0,
            category: "",
            product: {
                name: "",
                link: "",
                imageUrl: ""
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DipslayImage {...props} />,
        },
    ]
};

export default config;