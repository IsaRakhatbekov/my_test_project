import styles from './Pagination.module.scss'

interface PaginationProps {
	currentPage: number
	totalPage: number
	onPageChange: (page: number) => void
}

const Pagination = ({
	currentPage,
	totalPage,
	onPageChange,
}: PaginationProps) => {
	let startPage = 1
	if (currentPage > 5) {
		startPage = currentPage - 4
	}

	const pages = Array.from({ length: 5 }, (_, i) => startPage + i)

	return (
		<div className={styles.paginationWrapper}>
			<div className={styles.pagination}>
				<button
					className={styles.arrow}
					onClick={() => onPageChange(Math.max(1, currentPage - 1))}
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46972 12.5303C7.17683 12.2374 7.17683 11.7626 7.46972 11.4697L13.4697 5.46973C13.7626 5.17684 14.2374 5.17684 14.5303 5.46973C14.8232 5.76262 14.8232 6.23738 14.5303 6.53028L9.06054 12L14.5303 17.4697Z'
							fill='#FAFCFF'
						/>
					</svg>
				</button>

				{pages.map(page => (
					<button
						key={page}
						className={`${styles.pageItem} ${
							currentPage === page ? styles.active : ''
						}`}
						onClick={() => onPageChange(page)}
					>
						{page}
					</button>
				))}

				<span className={styles.dots}>...</span>

				<button
					className={`${styles.pageItem} ${
						currentPage === totalPage ? styles.active : ''
					}`}
					onClick={() => onPageChange(totalPage)}
				>
					{totalPage}
				</button>

				<button
					className={styles.arrow}
					onClick={() => onPageChange(Math.min(totalPage, currentPage + 1))}
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.46973 6.53027C9.17684 6.23738 9.17684 5.76262 9.46973 5.46972C9.76262 5.17683 10.2374 5.17683 10.5303 5.46972L16.5303 11.4697C16.6709 11.6104 16.75 11.8011 16.75 12C16.75 12.1989 16.6709 12.3896 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76262 18.8232 9.46973 18.5303C9.17684 18.2374 9.17684 17.7626 9.46973 17.4697L14.9395 12L9.46973 6.53027Z'
							fill='#FAFCFF'
						/>
					</svg>
				</button>
			</div>
			<p className={styles.info}>Показано 1-20 из 30 000 пользователей</p>
		</div>
	)
}

export default Pagination
