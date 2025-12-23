import { useState } from 'react'
import styles from './Table.module.scss'
import Tbody from './Tbody/Tbody'
import Thead from './Thead/Thead'

// Экспортируем один раз для всех
export interface User {
	id: number
	role: string
	name: string
	login: string
	position: string
	telegram: string
	email: string
	phone: string
	address: string
}

const initialUsers: User[] = [
	{
		id: 13619,
		role: 'Админ',
		name: 'Александр',
		login: 'someDesigner',
		position: 'Дизайнер',
		telegram: '@test',
		email: 'test@test.ru',
		phone: '+7 999 999 99 99',
		address: 'Нижний Новгород',
	},
	{
		id: 13620,
		role: 'Админ',
		name: 'Александр',
		login: 'someDesigner',
		position: 'Дизайнер',
		telegram: '@AlexMellon',
		email: 'test@test.ru',
		phone: '+7 999 999 99 99',
		address: 'Нижний Новгород',
	},
]

const Table = () => {
	const [users, setUsers] = useState<User[]>(initialUsers)
	const [sortKey, setSortKey] = useState('id')
	const [isAsc, setIsAsc] = useState(true)

	const handleSort = (key: string) => {
		const newDirection = sortKey === key ? !isAsc : true
		setSortKey(key)
		setIsAsc(newDirection)

		const sorted = [...users].sort((a, b) => {
			const valA = a[key as keyof User]
			const valB = b[key as keyof User]

			if (valA < valB) return newDirection ? -1 : 1
			if (valA > valB) return newDirection ? 1 : -1
			return 0
		})

		setUsers(sorted)
	}

	return (
		<div className={styles.tableWrapper}>
			<table className={styles.table}>
				<Thead onSort={handleSort} sortKey={sortKey} isAsc={isAsc} />
				<Tbody users={users} />
			</table>
		</div>
	)
}

export default Table
