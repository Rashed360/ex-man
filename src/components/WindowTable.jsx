import ContainerWindow from './ContainerWindow'

const WindowTable = () => {
	return (
		<ContainerWindow title='Recent Orders'>
			<table className='table'>
				<thead>
					<tr>
						<td>Name</td>
						<td>Price</td>
						<td>Payment</td>
						<td>Status</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Refrigerator</td>
						<td>15,350</td>
						<td>5,000</td>
						<td>
							<span className='done'>Delivered</span>
						</td>
					</tr>
					<tr>
						<td>Refrigerator</td>
						<td>15,350</td>
						<td>5,000</td>
						<td>
							<span className='pend'>Pending</span>
						</td>
					</tr>
					<tr>
						<td>Refrigerator</td>
						<td>15,350</td>
						<td>5,000</td>
						<td>
							<span className='fail'>Failed</span>
						</td>
					</tr>
					<tr>
						<td>Refrigerator</td>
						<td>15,350</td>
						<td>5,000</td>
						<td>
							<span className='fail'>Failed</span>
						</td>
					</tr>
				</tbody>
			</table>
		</ContainerWindow>
	)
}

export default WindowTable
