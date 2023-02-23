import OpenAISVGLogo from './OpenAISVGLogo'

// Primary Chat Window
const ChatBox = ({chatLog, setChatInput, handleSubmit, handleExport, chatInput}) =>
  <section className="chatbox">
    <div className="chat-log">
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
    <div className="chat-input-holder">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          rows="1"
          value={chatInput}
          onChange={(e)=> setChatInput(e.target.value)}
          className="chat-input-textarea" >
        </input>
        <button className="submit" type="submit">Submit</button>
        <button className="submit" type="button" onClick={handleExport}>Export</button>
      </form>
    </div>
  </section>

// Individual Chat Message
const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        {message.user === "gpt" ? <OpenAISVGLogo /> : <div>You</div>}
      </div>
      <div className="message">
        {message.message}
      </div>
    </div>
  </div>
  )
}

export default ChatBox