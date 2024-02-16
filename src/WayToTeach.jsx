import React from 'react'

export default function WayToTeach({title, description}){
	return(
		<li>
			<p>
				<strong>{title}</strong> {description}
			</p>
		</li>
	)
}
