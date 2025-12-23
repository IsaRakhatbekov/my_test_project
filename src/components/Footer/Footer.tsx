import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				<a className={styles.link} href='#'>
					Информация
				</a>
				<a className={styles.link} href='#'>
					Пользователи
				</a>
				<a className={styles.link} href='#'>
					Реклама
				</a>
				<a className={styles.link} href='#'>
					Условия
				</a>
				<a className={styles.link} href='#'>
					Политика Конфиденциальности
				</a>
				<a className={styles.link} href='#'>
					Поддержка
				</a>
				<a className={styles.link} href='#'>
					Клиенты
				</a>
				<a className={styles.link} href='#'>
					Настройки Куки
				</a>
				<a className={styles.link} href='#'>
					Главная
				</a>
			</nav>
			<span className={styles.copy}>@test</span>
		</footer>
	)
}

export default Footer
