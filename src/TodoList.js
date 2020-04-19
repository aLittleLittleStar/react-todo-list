import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChangeAction,
  getGetItemAction,
  getDeleteItemAction,
  initListAction,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  // 生命周期
  componentDidMount() {
    const URL =
      "https://www.fastmock.site/mock/be29b6a9c5d33ecb8f0a0e40865bc821/api/api/old";
    axios.get(URL).then((res) => {
      const data = res.data.data;
      const action = initListAction(data);
      store.dispatch(action);
      console.log("data:", data);
    });
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  // 添加数据
  handleBtnClick() {
    const action = getGetItemAction();
    store.dispatch(action);
  }
  // 删除数据
  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
