import React, { Component } from 'react'
import Dropzone from '../dropzone/Dropzone'
import Progress from '../progress/Progress'
import './Upload.css'
const axios = require('axios');

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="https://banner2.cleanpng.com/20180517/vtw/kisspng-pdf-computer-icons-encapsulated-postscript-logo-pdf-5afde5cc411bf7.3109834215265888762667.jpg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    }
    if (this.state.files.length > 0) {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Load Ticket
        </button>
      );
    }
  }

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);
  
      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  async sendRequest(file) {

    let reader = new FileReader()
    reader.onload = (e) => {
      console.log('length: ', e.target.result.includes('data:image/jpeg'))
      this.image = e.target.result
    }
    reader.readAsDataURL(file)

    const response = await axios({
      method: 'GET',
      url: 'https://byn4po1z88.execute-api.us-east-1.amazonaws.com/Prod/'
    })
    console.log('Response: ', response.data)
    console.log('Uploading: ', this.image)
    let binary = atob(this.image.split(',')[1])
    let array = []
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i))
    }
    let blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
    console.log('Uploading to: ', response.data.uploadURL)
    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: blobData
    })
    console.log('Result: ', result)
    // Final URL for the user doesn't need the query string params
    this.uploadURL = response.data.uploadURL.split('?')[0]
   }

  render() {
    return (
      <div className="Upload">
        {/* <span className="Title">Blur ticket barcodes</span> */}
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          {/* <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    );
  }
}