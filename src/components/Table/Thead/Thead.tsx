import styles from './Thead.module.scss'

interface TheadProps {
	onSort: (key: string) => void
	sortKey: string
	isAsc: boolean
}

const Thead = ({ onSort, sortKey, isAsc }: TheadProps) => {
	const cols = [
		{ name: 'ID', slug: 'id' },
		{ name: 'Роль', slug: 'role', hasInfo: true }, // Добавили метку для иконки
		{ name: 'Имя', slug: 'name' },
		{ name: 'Логин', slug: 'login' },
		{ name: 'Должность', slug: 'position' },
		{ name: 'Телеграм', slug: 'telegram' },
		{ name: 'Почта', slug: 'email' },
		{ name: 'Телефон', slug: 'phone' },
		{ name: 'Адрес', slug: 'address' },
	]

	return (
		<thead className={styles.thead}>
			<tr>
				{cols.map(col => {
					const isActive = sortKey === col.slug
					return (
						<th
							key={col.slug}
							onClick={() => onSort(col.slug)}
							style={{ cursor: 'pointer' }}
						>
							<div className={styles.thContent}>
								{/* Стрелка сортировки */}
								<span
									className={`${styles.arrow} ${
										isActive ? styles.active : ''
									} ${isActive && !isAsc ? styles.rotate : ''}`}
								>
									<svg
										width='9'
										height='11'
										viewBox='0 0 9 11'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M3.49994 0.75C3.49994 0.335787 3.83573 2.25254e-07 4.24994 0C4.66416 1.09729e-08 4.99994 0.335786 4.99994 0.75V7.93945L7.21967 5.71973C7.51256 5.42683 7.98732 5.42683 8.28022 5.71973C8.57311 6.01262 8.57311 6.48738 8.28022 6.78027L4.78022 10.2803C4.48732 10.5732 4.01256 10.5732 3.71967 10.2803L0.21967 6.78027C-0.0732233 6.48738 -0.0732232 6.01262 0.21967 5.71973C0.494274 5.44512 0.928995 5.42766 1.22358 5.66797L1.28022 5.71973L3.49994 7.93945V0.75Z'
											fill='#5F6166'
										/>
									</svg>
								</span>
								{col.name}
								{col.hasInfo && (
									<span className={styles.infoIcon}>
										<svg
											width='13'
											height='13'
											viewBox='0 0 13 13'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5ZM6.5 6C6.77614 6 7 6.22386 7 6.5V8.66667H7.16667C7.44281 8.66667 7.66667 8.89052 7.66667 9.16667C7.66667 9.44281 7.44281 9.66667 7.16667 9.66667H6.5C6.22386 9.66667 6 9.44281 6 9.16667V7H5.83333C5.55719 7 5.33333 6.77614 5.33333 6.5C5.33333 6.22386 5.55719 6 5.83333 6H6.5ZM6.50651 3.33333C6.78265 3.33333 7.00651 3.55719 7.00651 3.83333C7.00651 4.10948 6.78265 4.33333 6.50651 4.33333H6.5C6.22386 4.33333 6 4.10948 6 3.83333C6 3.55719 6.22386 3.33333 6.5 3.33333H6.50651ZM13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5Z'
												fill='#5F6166'
											/>
										</svg>
									</span>
								)}
							</div>
						</th>
					)
				})}
			</tr>
		</thead>
	)
}

export default Thead
