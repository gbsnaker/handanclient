import React, { Component, Fragment } from 'react';

import { connect } from 'dva';




import sytles from './Test.less';

import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd';


const { Meta } = Card;
@connect(({ test, loading }) => ({
  test,
  loading: loading.effects['test/fetchList'],
}))

export default class Test extends Component {

  state = {
    peoples: [],
  };

  componentDidMount() {
    // this.props.dispatch({
    //   type: '/test/fetch',
    // });
    this.props.dispatch({
      type: 'test/fetchList',
    });
  };

  render(){
    const { peoples } = this.props;
    return (
      <p>123</p>
    );
  }
}
