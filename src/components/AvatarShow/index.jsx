import React from "react"
import { Grid, Typography } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import styled from "styled-components"

const CropWrap = styled.div`
	margin-top: 2rem;
	height: 200px;
	/* padding-top:2rem; */
	border: 2px dashed #c7cdd3;
	border-radius: 8px;
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
	div > img {
		margin-top: 2rem;
		margin-left: 2rem;
		border-radius: 100px;
		width: 120px;
	}
`
const StartAgainWrap = styled.div`
	margin: 3rem 4rem 0 1rem;
	color: #495567;

	button {
		margin-top: 0.5rem;
		border: none;
		text-decoration: underline;
		font-weight: 500;
		font-size: 16px;
		color: #3d485f;
	}
	svg {
		margin-right: 0.5rem;
	}
`

const AvatarShow = ({ croppedImage, setCroppedImage }) => {

	const handleClose = () => {
		setCroppedImage('')

	}
	return (
		<CropWrap>
			<button onClick={handleClose}>
				<ClearIcon />
			</button>
			<Grid sm={4}>
				<img alt='Preview Image' src={croppedImage} />
			</Grid>
			<Grid sm={8}>
				<StartAgainWrap>
					<div>
						<svg
							width='16'
							height='13'
							viewBox='0 0 16 13'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M11.99 5.99002C12.54 5.99002 12.99 5.54002 12.99 4.99002C12.99 4.44002 12.54 3.99002 11.99 3.99002C11.44 3.99002 10.99 4.44002 10.99 4.99002C10.99 5.54002 11.44 5.99002 11.99 5.99002ZM14.99 0.990021H0.990036C0.440036 0.990021 -0.00996399 1.44002 -0.00996399 1.99002V11.99C-0.00996399 12.54 0.440036 12.99 0.990036 12.99H14.99C15.54 12.99 15.99 12.54 15.99 11.99V1.99002C15.99 1.44002 15.54 0.990021 14.99 0.990021ZM13.99 9.99002L8.99004 6.99002L7.99004 8.99002L4.99004 4.99002L1.99004 9.99002V2.99002H13.99V9.99002Z'
								fill='#495567'
							/>
						</svg>
						Organization Logo
					</div>

					<button onClick={handleClose}>Click here to start again</button>
				</StartAgainWrap>
			</Grid>
		</CropWrap>
	)
}

export default AvatarShow
