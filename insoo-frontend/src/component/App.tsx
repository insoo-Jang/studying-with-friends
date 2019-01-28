import * as React from 'react';
import '../styles/App.css';
import Profile from './Profile';

class App extends React.Component {
  public render() {
    return (
      <div>
          <Profile
            name="test네임"
            job="잡"
          />
      </div>
    );
  }
}

export default App;
