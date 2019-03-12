import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import addIcon from "../../../assets/add.svg";
import {
  DropContainer,
  Instructions,
  AddIcon,
  AdditionalInstructions,
  SkipOption
} from "./styles";
import { NextButton } from "../SignUpContainer/styles";

export default function BusinessLogo(props) {
  const [image, setImage] = useState("");
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log("shit was aborted");
    reader.onerror = () => console.log("errored out");
    reader.onload = e => {
      setImage(reader.result);
    };
    acceptedFiles.forEach(file => reader.readAsDataURL(file));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  console.log(getInputProps());
  return (
    <>
      <h1 className="headline">UPLOAD YOUR LOGO</h1>
      <span className="step">FINAL STEP:</span>
      <span>
        Upload your business's logo. Brand your page and make it your own.
      </span>
      <DropContainer {...getRootProps()} background={image}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : image ? null : (
          <Instructions>
            <AddIcon src={addIcon} alt="Click to add your logo" />
            <p>Drag 'n' drop your logo here, or click to select file</p>
          </Instructions>
        )}
      </DropContainer>
      {image ? (
        <AdditionalInstructions>
          Click on image above, or drop new file to change.
        </AdditionalInstructions>
      ) : (
        <AdditionalInstructions />
      )}
      <NextButton disabled={image.length === 0}>SUBMIT AND FINISH</NextButton>
      <SkipOption onClick={props.next}>SKIP FOR NOW >></SkipOption>
    </>
  );
}
