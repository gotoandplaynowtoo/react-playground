import React, { Component } from 'react';
import Layout from 'components/Layout';
import LayoutRow from 'components/LayoutRow';
import LayoutColumn from 'components/LayoutColumn';

class App extends Component {
  render() {
    return (
      <Layout>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptate corrupti aliquam nobis repudiandae autem fuga tenetur eius eum praesentium officia possimus ipsam quod tempora placeat suscipit, officiis distinctio esse?</p>
        <LayoutRow>
          <LayoutColumn md='6'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos est reprehenderit dicta omnis repellendus voluptas consequuntur nisi deleniti sit distinctio maxime atque, recusandae quo aspernatur sunt architecto quaerat. Tempora?</p></LayoutColumn>
          <LayoutColumn md='6'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos est reprehenderit dicta omnis repellendus voluptas consequuntur nisi deleniti sit distinctio maxime atque, recusandae quo aspernatur sunt architecto quaerat. Tempora?</p></LayoutColumn>
        </LayoutRow>
      </Layout>
    );
  }
}

export default App;
