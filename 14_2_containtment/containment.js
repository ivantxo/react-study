function Contacts() {
  return React.createElement("div", { className: "Contacts" });
}

function Chat() {
  return React.createElement("div", { className: "Chat" });
}

function SplitPane(props) {
  return React.createElement(
    "div",
    { className: "SplitPane" },
    React.createElement(
      "div",
      { className: "SplitPane-left" },
      props.left
    ),
    React.createElement(
      "div",
      { className: "SplitPane-right" },
      props.right
    )
  );
}

function App() {
  return React.createElement(SplitPane, {
    letf: React.createElement(Contacts, null),
    right: React.createElement(Chat, null)
  });
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

