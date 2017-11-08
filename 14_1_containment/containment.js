function FancyBorder(props) {
  return React.createElement(
    "div",
    { className: 'FancyBorder FancyBorder-' + props.color },
    props.children
  );
}

function WelcomeDialog() {
  return React.createElement(
    FancyBorder,
    { color: "blue" },
    React.createElement(
      "h1",
      null,
      "Welcome"
    ),
    React.createElement(
      "p",
      { className: "Dialog-message" },
      "Thank you for visiting our spacecraft!"
    )
  );
}

ReactDOM.render(React.createElement(WelcomeDialog, null), document.getElementById('root'));

