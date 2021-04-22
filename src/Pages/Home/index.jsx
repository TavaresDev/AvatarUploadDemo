import React from "react"
import AvatarUpload from "../../components/AvatarUpload"
import { useState } from "react"
import { Container, Box } from "@material-ui/core"

const Home = () => {
	const [croppedImage, setCroppedImage] = useState(null)
	return (
		<Container maxWidth='sm'>
			<Box pt={5}>
				<AvatarUpload setCroppedImage={setCroppedImage}  />
			</Box>
			<Box>
				<h3> Parent Component </h3>
				<img alt='Cropped Image' src={croppedImage} />
			</Box>
		</Container>
	)
}

export default Home
