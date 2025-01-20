import styles from "./Footer.module.scss"

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className={styles.footer}> 
			<p> ©{year} Copyright. All content are for education purposes only | Developer: Lance Michael M. Malaga </p>
		</footer>
	)
}

export default Footer