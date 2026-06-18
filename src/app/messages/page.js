import Navbar from "../../../components/Navbar";

export default function Messages() {
  const chats = ["Ari Luxe", "Mila Rose", "Nova Sky"];

  return (
    <main className="page-container">
      <Navbar />

      <section className="messagesShell glass">
        <aside className="chatList">
          <div className="badge">Messages</div>
          <h2>Inbox</h2>

          {chats.map((chat) => (
            <div className="chatItem" key={chat}>
              <div className="miniAvatar"></div>
              <div>
                <strong>{chat}</strong>
                <p>New preview message...</p>
              </div>
            </div>
          ))}
        </aside>

        <div className="conversation">
          <h1>Ari Luxe</h1>
          <p className="muted">Premium chat preview</p>

          <div className="bubble left">Hey, welcome to my private feed ✨</div>
          <div className="bubble right">This demo looks clean.</div>
          <div className="bubble left">Unlock more by subscribing.</div>

          <div className="messageInput">Type a message...</div>
        </div>
      </section>
    </main>
  );
}
