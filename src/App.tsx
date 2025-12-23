import { useState } from 'react'
import styles from './App.module.scss'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Footer from './components/Footer/Footer'
import Table from './components/Table/Table'
import Pagination from './components/UI/Pagination/Pagination'
import UserControls from './components/UserControls/UserControls'

const App = () => {
	const [currentPage, setCurrentPage] = useState(1)
	return (
		<div className={styles.App}>
			<div className={`${styles.container} container`}>
				<Breadcrumbs items={['Данные', 'Пользователи']} />
				<UserControls />
				<div className={styles.tableWrapper}>
					<Table />
				</div>
				<div className={styles.paginationWrapper}>
					<Pagination
						currentPage={currentPage}
						totalPage={30000}
						onPageChange={page => setCurrentPage(page)}
					/>
				</div>
				<Footer />
			</div>
		</div>
	)
}
export default App
