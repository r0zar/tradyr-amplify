import React, { Component } from 'react'
import { Box } from 'grommet';
import './Dropzone.css'

export default class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();
  
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }

  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  onDragOver(evt) {
    evt.preventDefault();
  
    if (this.props.disabled) return;
  
    this.setState({ hightlight: true });
  }

  onDragLeave() {
    this.setState({ hightlight: false });
  }

  onDrop(event) {
    event.preventDefault();
  
    if (this.props.disabled) return;
  
    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  render() {
    return (
      <Box
        className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
        animation={{"type":"jiggle","size":"xlarge","delay":0,"duration":500000}}
      >
        {/* <img
          alt="upload"
          className="Icon"
          src="https://banner2.cleanpng.com/20180517/vtw/kisspng-pdf-computer-icons-encapsulated-postscript-logo-pdf-5afde5cc411bf7.3109834215265888762667.jpg"
        /> */}
         <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
      </Box>
    );
  }
}