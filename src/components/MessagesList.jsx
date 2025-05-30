export const MessageList = ({messages}) => {
    return (
        <ul>
            {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
            ))}
        </ul>
    );
};