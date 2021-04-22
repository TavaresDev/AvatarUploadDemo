import React from "react"
import styled from "styled-components"
import { Slider, Grid, Typography } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"

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
	img {
		border-radius: 100px;
	}
`
const SliderWrap = styled.div`
	margin: 3rem 4rem 0 1rem;
	button {
		margin-top: 1rem;
		padding: 5px 24px 7px 24px;
		float: right;
		background: #3d485f;
		border-radius: 16px;
		border: none;
		font-weight: 500;
		font-size: 14px;
		color: #fff;
	}
`

const AvatarPreview = ({ handleClose, handleSave, setZoom, zoom, preview }) => {
	return (
		<CropWrap>
			<button onClick={handleClose}>
				<ClearIcon />
			</button>
			<Grid sm={4}>
				<img alt='Preview Image' src={preview} />
	
			</Grid>
			<Grid sm={8}>
				<SliderWrap>
					<Typography id='Zoom Label' gutterBottom>
						Crop
					</Typography>
					<Slider
						value={zoom}
						min={1}
						max={4}
						step={0.1}
						aria-labelledby='Zoom'
						onChange={(e, zoom) => setZoom(zoom)}
					/>
					<button onClick={handleSave}>Save</button>
				</SliderWrap>
			</Grid>
		</CropWrap>
	)
}

export default AvatarPreview
