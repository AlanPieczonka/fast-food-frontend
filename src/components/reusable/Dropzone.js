import React, { useState } from "react";

import ReactDropzone from "react-dropzone";
import { toBase64 } from "./helpers";

const Dropzone = props => {
  const [temporaryImage, setTemporaryImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const onDrop = async acceptedFiles => {
    const image = acceptedFiles[0];

    setCurrentImage(image);
    setTemporaryImage(await toBase64(image));

    props.onChange(image);
  };

  const clearImage = () => {
    setTemporaryImage(null);
    setCurrentImage(null);
  };

  return (
    <>
      {!!props.label && (
        <label className="form__label" htmlFor={props.name}>
          {props.label}
        </label>
      )}

      <ReactDropzone onDrop={onDrop} id={props.name}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <p className="form__dropzone-message">
                {temporaryImage !== null || props.photoUrl ? (
                  <img
                    src={temporaryImage || props.photoUrl}
                    className="form__dropzone-preview"
                    onClick={clearImage}
                  />
                ) : (
                  "Drag 'n' drop some files here, or click to select files"
                )}
              </p>
            </div>
          </section>
        )}
      </ReactDropzone>
    </>
  );
};

export default Dropzone;
