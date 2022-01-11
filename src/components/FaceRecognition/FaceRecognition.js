import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center mt3 mb3 relative'>
			<img src={imageUrl} alt='The image' width="500px" height="auto" />
		</div>
	)
}

export default FaceRecognition
