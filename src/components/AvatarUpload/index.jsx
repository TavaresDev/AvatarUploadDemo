import React, { useState, createRef, useEffect } from "react"
import AvatarEditor from "react-avatar-editor"
import { useDropzone } from "react-dropzone"
import styled from "styled-components"
import {
	Slider,
	Grid,
	Box,
	Container,
	Typography,
	Button,
} from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import InputBox from "../ImputBox"
import UploadFail from "../UploadFailed"
import AvatarPreview from "../AvatarPreview"

const AvatarUpload = ({ setCroppedImage }) => {
	const [avatarImage, setAvatarImage] = useState("")
	const [zoom, setZoom] = useState(1)
	const [preview, setPreview] = useState(null)
	const cropper = createRef()
	const [color, setColor] = useState([0, 0, 0, 0.6])

	const handleSave = () => {
		// setAvatarImage(e.target.files[0])
		setCroppedImage(preview)
		// setPreview(null)
		// setState({ image: e.target.files[0] });
	}

	const getImagePreview = () => {
		if (cropper.current) {
			setPreview(cropper.current.getImageScaledToCanvas().toDataURL())
		}
	}

	useEffect(() => {
		setPreview(cropper.current.getImageScaledToCanvas().toDataURL())
	}, [zoom])

	const onDrop = React.useCallback((acceptedFiles) => {
		// Do something with the files
		setAvatarImage(acceptedFiles[0])
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		noClick: true,
	})

	const handleLoadFailure = () => {
		console.log("fail")
	}
	const handleNewImage = (e) => {
		setAvatarImage(e.target.files[0])
	}
	const handleClose = (e) => {
		setAvatarImage("")
		setPreview(null)
	}

	const style = {
		background: "#F2F5F8",
		border: "2px dashed #C7CDD3",
		borderRadius: "8px",
		canvas: {
			// background: "#F2ddF8",
		},
	}
	return (
		<div>
			<div>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					{avatarImage ? " " : <InputBox handleNewImage={handleNewImage} />}
					<AvatarEditor
						style={style}
						ref={cropper}
						image={avatarImage}
						width={180}
						height={180}
						border={[180, 10]}
						borderRadius={100}
						onLoadFailure={handleLoadFailure}
						onPositionChange={getImagePreview}
						color={color} // RGBA
						scale={zoom}
						rotate={0}></AvatarEditor>
				</div>
			</div>
			<UploadFail handleClose={handleClose} />

			<AvatarPreview
				handleClose={handleClose}
				preview={preview}
				setZoom={setZoom}
				zoom={zoom}
                handleSave={handleSave}
			/>
		</div>
	)
}

export default AvatarUpload
