import React from 'react';
import FormRow from '../FormRow';
import Immutable from 'immutable';

function createModel() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result.push({
      id: i,
      name: `name${i}`,
      description: `desc${i}`,
    });
  }
  return Immutable.List(result);
}

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      model: createModel(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

  }

  handleChange(obj, index) {
    this.setState({
      model: this.state.model.set(index, obj),
    });
  }

  render() {
    return (
      <div>
        {
          this.state.model.map((item, index) =>
            <FormRow
              key={item.id}
              model={item}
              onChange={newValue => this.handleChange(newValue, index)}
            />
          )
        }
      </div>
    );
  }
}
