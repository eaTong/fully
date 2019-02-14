/**
 * Created by eaTong on 2018-23-06 .
 * Description: auto generated in  2018-23-06
 */

import React, {Component} from 'react';
import {Button, message, Input, Pagination} from 'antd';
import {inject, observer} from "mobx-react";
import Title from "~/components/Title";
import PageBase from "~/components/PageBase";

const ButtonGroup = Button.Group;
const columns = [
  {title: '名称', dataIndex: 'name'},
  {title: '备注', dataIndex: 'remark'},
];

@inject('app') @observer
class PersonalPage extends PageBase {
  async componentDidMount() {
    await this.props.role.getDataList();
  }

  render() {
    return (
      <div className="base-layout">
        <Title title='个人中心'/>


      </div>
    );
  }
}

PersonalPage.propTypes = {};
export default PersonalPage;
