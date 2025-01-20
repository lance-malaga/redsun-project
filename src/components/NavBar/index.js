import Link from 'next/link'
import Image from 'next/image'
import styles from './NavBar.module.scss'
import { logo, cart } from '../../../public/images/Images'

const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>
				<Image
					src={logo}
					alt='Red Sun Menu logo'
					width={105}
					height={40}
				/>
			</Link>
			<div className={styles.links__container}>
				<Link href='/'>Home</Link>
				<Link href='/menu'>Menu</Link>
				<Link href='/#about__section'>About</Link>
			</div>
			<div className={styles.right_side}>
				<div className={styles.cart}>
					<Image
						src={cart}
						alt='cart-icon'
						width={28}
						height={25}
					/>
					<div className={styles.cart__number}></div>
				</div>
				<button>Log In</button>
			</div>
		</nav>
	)
}

export default NavBar


