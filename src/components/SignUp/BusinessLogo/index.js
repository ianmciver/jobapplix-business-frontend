import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { connect } from "react-redux";

import Progress from "../ProgressBar";
import addIcon from "../../../assets/add.svg";
import {
  DropContainer,
  DropInstructions,
  AddIcon,
  SkipOption,
  UploadContainer,
  UploadTitle,
  UploadInstructions,
  ButtonContainer,
  Instructions,
  AdditionalInstructionsContainer
} from "./styles";
import { NextButton } from "../../../styles/forms2";
import { Headline, Error } from "../SignUpContainer/styles";

import { uploadFileToS3 } from "../../../actions/businessActions";
import { withFirebase } from "../../../Firebase";

function BusinessLogo(props) {
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState();
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
      setFile(file);
    });

    reader.onabort = () => console.log("file read was aborted");
    reader.onerror = () => console.log("file read errored out");
    reader.onloadend = e => {
      setImage(reader.result);
    };
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    rejectedFiles
  } = useDropzone({
    onDrop,
    maxSize: 2097152,
    accept: "image/jpeg, image/png"
  });

  useEffect(() => {
    // Use Effect to handle rejected files.
    if (rejectedFiles.length > 0 && rejectedFiles[0].size > 2097152) {
      setError("Please select a file that is less than 2MB.");
    } else if (
      rejectedFiles.length > 0 &&
      (rejectedFiles[0].type !== "image/jpeg" ||
        rejectedFiles[0].type !== "image/png")
    ) {
      setError(
        "That file type is not supported, please select a .png, .jpg, or .jpeg"
      );
    } else {
      setError("");
    }
  }, [rejectedFiles]);

  const submitImage = () => {
    props.uploadFileToS3(file, props.next);
  };
  return (
    <>
      <Headline>CREATE BUSINESS</Headline>
      <Progress progress={"83%"} />
      <UploadContainer>
        <UploadTitle>Upload Your Logo</UploadTitle>
        <UploadInstructions>
          <Instructions>
            Upload your business's logo. Brand your page and make it your own.
          </Instructions>
        </UploadInstructions>
        <AdditionalInstructionsContainer>
          {image && !error && (
            <Instructions>
              If everything looks good, click the upload button below to finish
              the signup process. If not, click on the image, or drop new file
              to change.
            </Instructions>
          )}
          {!image && (
            <>
              <Instructions>
                File must be an image file, png, jpg, or gif.
              </Instructions>
              <Instructions>File must be less than 2 MB.</Instructions>
            </>
          )}
          {error && <Error>{error}</Error>}
        </AdditionalInstructionsContainer>
        <DropContainer {...getRootProps()} background={image}>
          <input {...getInputProps()} />
          {isDragActive ? (
            isDragReject ? (
              <DropInstructions>
                That file type is not supported, please select a .png, .jpg, or
                .jpeg
              </DropInstructions>
            ) : (
              <DropInstructions>Drop the files here ...</DropInstructions>
            )
          ) : image ? null : (
            <DropInstructions>
              <AddIcon src={addIcon} alt="Click to add your logo" />
              <p>Drag and drop or click to add file</p>
            </DropInstructions>
          )}
        </DropContainer>
        <ButtonContainer>
          <NextButton onClick={submitImage} disabled={!image}>
            UPLOAD AND FINISH
          </NextButton>
        </ButtonContainer>
      </UploadContainer>
      <SkipOption onClick={props.next}>SKIP FOR NOW >></SkipOption>
    </>
  );
}

export default connect(
  null,
  { uploadFileToS3 }
)(withFirebase(BusinessLogo));
