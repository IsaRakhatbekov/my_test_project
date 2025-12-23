import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import type { User } from '../Table'

import styles from './TableRow.module.scss'

const TableRow = ({ user }: { user: User }) => {
	return (
		<tr className={styles.row}>
			<td>{user.id}</td>
			<td>{user.role}</td>
			<td>{user.name}</td>
			<td>{user.login}</td>
			<td className={styles.selectCell}>
				<CustomSelect initialValue={user.position} />
			</td>
			<td>{user.telegram}</td>
			<td>{user.email}</td>
			<td>{user.phone}</td>
			<td>{user.address}</td>
		</tr>
	)
}

export default TableRow
