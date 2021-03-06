import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render = () => {
    if(!this.props.book) return <div>Select a book to get started</div>;
    return (
      <div>
        <h3>Details For:</h3> 
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);