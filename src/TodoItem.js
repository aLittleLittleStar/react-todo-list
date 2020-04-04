import React from 'react';

class TodoTtem extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
  handleDelete() {
    // 将点击数据的index传递给父组件
    // 实际上是子组件调用了父组件的handleDelete方法
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <div onClick={this.handleDelete}>
        {this.props.content}
      </div>
    )
  }
}

export default TodoTtem;