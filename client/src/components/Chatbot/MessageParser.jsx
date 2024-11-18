import React from 'react';

const MessageParser = ({ children, actions }) => {
    // console.log(children.props.state)
    const { checker } = children.props.state;
    const parse = (message) => {
        if (checker === "price") {
            actions.afterNameMessage();
            children.props.state.userData.name = message;
        }

        if (checker === "preference" && Number(message)) {
            actions.afterAgeMessage();
            children.props.state.userData.amount = message;
            if (message <= 100000) {
                children.props.state.userData.category = "loot1";
            } 
             else {
                children.props.state.userData.category = "loot1";
            }
        }
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;
