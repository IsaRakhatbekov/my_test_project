import type { User } from '../Table'
import TableRow from '../TableRow/TableRow'
import styles from './Tbody.module.scss'

interface TbodyProps {
	users: User[]
}

const Tbody = ({ users }: TbodyProps) => {
	return (
		<tbody className={styles.tbody}>
			{users.map(item => (
				<TableRow key={item.id} user={item} />
			))}
		</tbody>
	)
}

export default Tbody
