function FancyBorder(props) {
  return React.createElement(
    "div",
    { className: 'FancyBorder FancyBorder-' + props.color },
    props.children
  );
}

function Dialog(props) {
  return React.createElement(
    FancyBorder,
    { color: "blue" },
    React.createElement(
      "h1",
      { className: "Dialog-title" },
      props.title
    ),
    React.createElement(
      "p",
      { className: "Dialog-message" },
      props.message
    )
  );
}

function WelcomeDialog() {
  return React.createElement(Dialog, {
    title: "Welcome",
    message: "Thank you for visiting our tutorial" });
}

ReactDOM.render(React.createElement(WelcomeDialog, null), document.getElementById('root'));

