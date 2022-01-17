import React from 'react'

const Rank = ({name, requests}) => {
	return (
		<div style={{position:"relative", fontFamily: "monospace"}}>
			<div className='f3 center'>
				{`${name} your current request count is ...`}
			</div>
			<div className='sega f1 center'>
				{Object.values(requests)}
			</div>
		</div>
	)
}

export default Rank
