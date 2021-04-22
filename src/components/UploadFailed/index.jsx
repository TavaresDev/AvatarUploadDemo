import React from "react"
import { Grid, Typography } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import styled from "styled-components"

const CropWrap = styled.div`
	margin-top: 2rem;
	height: 200px;
	/* padding-top:2rem; */
	background: #f2f5f8;
	border-radius: 8px;
	display: flex;
	position: relative;
	color: #677489;
	& > button {
		color: #677489;
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
		background: #f2f5f8;
		border: 0;
	}
	div > svg {
		margin-top: 2rem;
		margin-left: 2rem;
		border-radius: 100px;
		width: 120px;
	}
`
const FailWrap = styled.div`
	margin: 3rem 4rem 0 1rem;
	color: #c64d32;
	button {
		margin-top: 0.5rem;

		border: none;
		text-decoration: underline;
		font-weight: 500;
		font-size: 16px;
		color: #3d485f;
	}
`

const UploadFail = ({ handleClose }) => {
	return (
		<CropWrap>
			<button onClick={handleClose}>
				<ClearIcon />
			</button>
			<Grid sm={4}>
				<svg
					width='113'
					height='113'
					viewBox='0 0 113 113'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='113' height='113' rx='56.5' fill='#C3CBD5' />
				</svg>
			</Grid>
			<Grid sm={8}>
				<FailWrap>
					<Typography id='Zoom Label' gutterBottom>
						Sorry, the upload failed.
					</Typography>

					<button onClick={handleClose}>Try again</button>
				</FailWrap>
			</Grid>
		</CropWrap>
	)
}

export default UploadFail
