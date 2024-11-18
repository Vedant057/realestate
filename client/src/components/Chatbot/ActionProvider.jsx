import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction = () => {
        const message = createChatBotMessage('Just type in your name to begin.');
        updateState(message, "price")
    }

    const afterNameMessage = () => {
        const message = createChatBotMessage("Let me know your budget so I can suggest the best Property for you.")
        updateState(message, "preference")
    }

    const afterAgeMessage = () => {
        const message = createChatBotMessage("Please Select Type Of Property", {
            widget: "startSlow"
        })
        updateState(message)
    }

    const finalResult = (name, price, preference, vehicle) => {
        const message1 = createChatBotMessage(`Got it, ${name}! Based on your Budget ${price} and preference for a ${preference} property, I recommend the '${vehicle} and Base Price can be change by your location.' Enjoy the Life!`, {
            widget: "finalImage"
        })
        const message2 = createChatBotMessage("Thanks You & Enjoy Your Time On Real Estate.")
        updateState(message1)
        updateState(message2)
    }

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        initialAction,
                        afterNameMessage,
                        afterAgeMessage,
                        finalResult
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;