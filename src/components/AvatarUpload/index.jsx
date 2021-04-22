import React, { useState, createRef, useEffect } from "react"
import AvatarEditor from "react-avatar-editor"
import { useDropzone } from "react-dropzone"
import InputBox from "../InputBox"
import UploadFail from "../UploadFailed"
import AvatarPreview from "../AvatarPreview"

const AvatarUpload = ({ setCroppedImage }) => {
	const [avatarImage, setAvatarImage] = useState("")
	const [zoom, setZoom] = useState(1)
	const [preview, setPreview] = useState(null)
	const [isUploadFail, setIsUploadFail] = useState(false)
	const cropper = createRef()

    // On img change get preview
	const getImagePreview = () => {
		if (cropper.current) {
			setPreview(cropper.current.getImageScaledToCanvas().toDataURL())
		}
	}
    // To make img change on zoom change
	useEffect(() => {
		setPreview(cropper.current.getImageScaledToCanvas().toDataURL())
	}, [zoom,cropper])

    // set Img on drop
	const onDrop = React.useCallback((acceptedFiles) => {
		setAvatarImage(acceptedFiles[0])
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		noClick: true,
	})

	const handleLoadFailure = () => {
		console.log("fail")
		setIsUploadFail(true)
	}
	const handleLoadSuccess = () => {
		setIsUploadFail(false)
	}
	const handleNewImage = (e) => {
		setAvatarImage(e.target.files[0])
	}
	const handleClose = (e) => {
		setAvatarImage("")
		setPreview(null)
	}
	const handleSave = () => {
		setCroppedImage(preview)
		// setPreview(null)
	}

	const style = {
		background: "#F2F5F8",
		borderRadius: "8px",
	}
	return (
		<>
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
						onLoadSuccess={handleLoadSuccess}
						onPositionChange={getImagePreview}
						scale={zoom}
						rotate={0}
					/>
				</div>
			</div>

			{isUploadFail ? (
				<UploadFail handleClose={handleClose} />
			) : (
				<AvatarPreview
					handleClose={handleClose}
					preview={preview}
					setZoom={setZoom}
					zoom={zoom}
					handleSave={handleSave}
				/>
			)}
		</>
	)
}

export default AvatarUpload
