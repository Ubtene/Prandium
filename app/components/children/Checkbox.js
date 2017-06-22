import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked:false};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange () {
      this.props.toggleCheck(this.props.label);
      const checked = this.state.isChecked;
      if (!checked) {
        this.setState({isChecked: true});
      } else {
        this.setState({isChecked: false});
      }
  }

  render() {
    return (
        <div>
        <label>
            <input 
                type='checkbox'
                checked={this.state.isChecked}
                onChange={this.handleChange}
            />
            {this.props.label}
        </label>
        </div>
    )
  }

}

export default Checkbox;
