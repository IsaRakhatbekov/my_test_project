import { useState } from 'react'
import styles from './CustomSelect.module.scss'

const positions = ['Дизайнер', 'Front End разработчик', 'Back End разработчик']

interface CustomSelectProps {
	initialValue: string
}

const CustomSelect = ({ initialValue }: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selected, setSelected] = useState(initialValue)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleSelect = (value: string) => {
		setSelected(value)
		setIsOpen(false)
	}

	return (
		<div className={styles.container}>
			<div
				className={`${styles.select} ${isOpen ? styles.active : ''}`}
				onClick={toggleDropdown}
			>
				<span className={styles.label}>{selected}</span>

				<span className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`}>
					<svg
						width='11'
						height='6'
						viewBox='0 0 11 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0.749999 5.25L5.25 0.750001L9.75 5.25'
							stroke='#DDE0E6'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</span>
			</div>

			{isOpen && (
				<ul className={styles.dropdown}>
					{positions.map(pos => (
						<li
							key={pos}
							className={`${styles.option} ${
								selected === pos ? styles.selectedOption : ''
							}`}
							onClick={() => handleSelect(pos)}
						>
							<span className={styles.check}>
								<svg
									width='12'
									height='9'
									viewBox='0 0 12 9'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.6666 1.5L4.24992 7.91667L1.33325 5'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</span>
							{pos}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
