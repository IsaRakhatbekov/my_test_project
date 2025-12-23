import type { FC } from 'react'
import styles from './SearchInput.module.scss'

interface SearchInputProps {
	placeholder?: string
}

const SearchInput: FC<SearchInputProps> = ({ placeholder }) => {
	return (
		<label htmlFor='search' className={styles.lbl}>
			<input
				className={styles.searchInput}
				type='text'
				id='search'
				placeholder={placeholder}
			/>
			<span className={styles.searchIcon}>
				<svg
					width='20'
					height='20'
					viewBox='0 0 17 17'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M15.75 15.75L10.75 10.75M12.4167 6.58333C12.4167 9.80499 9.80499 12.4167 6.58333 12.4167C3.36167 12.4167 0.75 9.80499 0.75 6.58333C0.75 3.36167 3.36167 0.75 6.58333 0.75C9.80499 0.75 12.4167 3.36167 12.4167 6.58333Z'
						stroke='#787A80'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</span>
		</label>
	)
}

export default SearchInput
