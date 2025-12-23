import type { FC } from 'react'
import styles from './Breadcrumbs.module.scss'

interface BreadcrumbsProps {
	items: string[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
	return (
		<div className={styles.Breadcrumbs}>
			{items.map((name, index) => (
				<div key={index}>
					<span
						className={`${styles.page} ${
							index === items.length - 1 ? styles.pageActive : ''
						}`}
					>
						{name}
					</span>
					{index < items.length - 1 && (
						<span className={styles.separator}> / </span>
					)}
				</div>
			))}
		</div>
	)
}

export default Breadcrumbs
