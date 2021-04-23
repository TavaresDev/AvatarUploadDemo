import React from "react"
import AvatarUpload from "../../components/AvatarUpload"
import { useState } from "react"
import { Container, Box } from "@material-ui/core"
import AvatarShow from "../../components/AvatarShow"

const Home = () => {
	const [croppedImage, setCroppedImage] = useState(null)
	return (
		<Container maxWidth='sm'>
			<Box pt={5}>
				<AvatarUpload setCroppedImage={setCroppedImage} />
			</Box>
			<Box> 
                {croppedImage && 
                <>
				<h3> Parent Component </h3>
                <AvatarShow croppedImage={croppedImage} setCroppedImage={setCroppedImage}/>
                </>
                }
		
			</Box>
		</Container>
	)
}

export default Home
