import React, { Component } from 'react';
import Clock from 'containers/Clock';
import Layout from 'components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{
          width: '100vw',
          height: '100vh'
        }}>
          <Clock/>          
        </Layout>
      </div>
    );
  }
}

export default App;
