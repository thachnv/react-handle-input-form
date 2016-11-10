import React from 'react';

export default class FormRow extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      name: this.props.model.name,
      description: this.props.model.description,
      // ...this.props.model
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // const a = { ...this.props };
  }

  handleChange(e, field) {
    this.setState({
      [field]: e.target.value,
    }, () => this.props.onChange(this.state));
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.handleChange(e, 'name')}
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.description}
              onChange={e => this.handleChange(e, 'description')}
            />
          </div>
        </div>
      </div>
    );
  }
}
