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
    ),
    props.children
  );
}

class SignupDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return React.createElement(
      Dialog,
      { title: "Mars Exploration Program",
        message: "How should we refer to you?" },
      React.createElement("input", { value: this.state.login,
        onChange: this.handleChange }),
      React.createElement(
        "button",
        { onClick: this.handleSignUp },
        "Sign Me Up!"
      )
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(React.createElement(SignupDialog, null), document.getElementById('root'));

