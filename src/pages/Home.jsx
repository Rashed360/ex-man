const Home = () => {
	return (
		<div className='home'>
			<div>
				<div className='header'>
					<h1>eX-Man</h1>
					<p>Your everyday expense tracker!</p>
				</div>
				<div className='login'>
					<h3>Login to Continue</h3>
					<form>
						<input type='text' placeholder='Email Address' autoFocus />
						<input type='password' placeholder='●●●●●●●●' />
						<button type='submit'>Login Now</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Home
