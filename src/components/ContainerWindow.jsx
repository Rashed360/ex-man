const ContainerWindow = ({ title, more, children }) => {
	return (
		<div className='window'>
			<div className='header'>
				<h2>{title}</h2>
				{more && (
					<a href='#' className='btn'>
						{more}
					</a>
				)}
			</div>
			{children}
		</div>
	)
}

export default ContainerWindow
