```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initialize state, but avoid using props here
  }

  componentDidMount() {
    console.log(this.props.someProp); // Access props here, it is safe
    // Perform any actions that rely on props or state
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

export default MyComponent;
```