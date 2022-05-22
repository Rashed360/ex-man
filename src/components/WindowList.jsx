import ContainerWindow from './ContainerWindow'
import avatar from 'assets/avatar.svg'

const WindowList = () => {
	return (
		<ContainerWindow title='Recent Customers'>
			<table className='list'>
				<tr>
					<td>
						<div className='imgBox'>
							<img src={avatar} alt='' />
						</div>
					</td>
					<td>
						<h4>David Robinson</h4>
						<span className='location'>Italy</span>
					</td>
				</tr>
				<tr>
					<td>
						<div className='imgBox'>
							<img src={avatar} alt='' />
						</div>
					</td>
					<td>
						<h4>David Robinson</h4>
						<span className='location'>Italy</span>
					</td>
				</tr>
				<tr>
					<td>
						<div className='imgBox'>
							<img src={avatar} alt='' />
						</div>
					</td>
					<td>
						<h4>David Robinson</h4>
						<span className='location'>Italy</span>
					</td>
				</tr>
			</table>
		</ContainerWindow>
	)
}

export default WindowList
