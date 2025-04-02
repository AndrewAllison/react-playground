import styles from './Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>Welcome to React Playground 🧪</div>
			<div className={styles.grid}>
				<a href="/challenge/01">Challenge 01 - Tweet Card</a>
				<a href="/challenge/02">Challenge 02 - Toggle Menu</a>
				{/* Add more links */}
			</div>
		</div>
	);
}
