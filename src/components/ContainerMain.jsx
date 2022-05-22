const ContainerMain = ({ toggle, children }) => {
	return <div className={toggle ? 'main active' : 'main'}>{children}</div>
}

export default ContainerMain
