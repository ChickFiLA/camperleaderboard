import React from 'react';

const CamperListItem = ({ camper, Avatar, number }) => {
	return (
		<tr>
			<td>{number}</td>
			<td><img height="42" width="42" src={camper.img} alt={"pic for ${camper.username}"} /> <a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
			<td> {camper.recent} </td>
			<td>{camper.alltime}</td>
		</tr>
		);
}

export default CamperListItem;
