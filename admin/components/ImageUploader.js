/**
 * Created by eatong on 17-12-6.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {message, Upload, Icon} from "antd";
import {getUrls} from "~/utils/utils";

class ImageUploader extends Component {
  state = {
    loading: false
  };

  handleChange(info, a, b, c) {

    const status = info.file.status;
    switch (status) {
      case 'uploading':
        this.setState({loading: true});
        break;
      case 'done':
        this.setState({loading: false});
        const {file: {response: {data}}} = info;
        // this.value = [...getUrls(this.value || this.props.value), data];
        this.props.onChange && this.props.onChange([...getUrls(this.props.value , data)]);
    }

  }

  render() {
    const {value} = this.props;
    const fileList = getUrls(value).map(item => (
      {uid: item, name: item, status: 'done', url: item}
    ));
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'}/>
        <div className="ant-upload-text">上传图片</div>
      </div>
    );
    return (
      <div>
        <Upload
          action="/api/image/upload"
          listType="picture-card"
          defaultFileList={fileList}
          onChange={(info) => this.handleChange(info)}
          beforeUpload={(file) => {
            return new Promise((resolve, reject) => {
              if (/^image/.test(file.type)) {
                resolve();
              } else {
                message.error('图片格式错误！');
                reject();
              }
            })
          }}
        >
          {uploadButton}
        </Upload>

      </div>
    );
  }
}

ImageUploader.propTypes = {
  maxCount: PropTypes.number
};
export default ImageUploader;
