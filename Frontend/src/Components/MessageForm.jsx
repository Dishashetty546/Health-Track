import React from 'react';

const MessageForm = () => {
  return (
    <div className="container form-component message-form">
      <h2>Send us a message</h2>
      
      {/* Form for message submission */}
      <form>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <textarea rows={7} placeholder="Message"></textarea>
        <div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MessageForm;
