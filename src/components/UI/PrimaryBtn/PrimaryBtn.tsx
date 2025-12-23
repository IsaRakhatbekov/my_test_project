import type { FC } from 'react'
import styles from './PrimaryBtn.module.scss'

interface ButtonProps {
	text: string
	showPlus?: boolean
}

const PrimaryBtn: FC<ButtonProps> = ({ text, showPlus }) => {
	return (
		<button className={styles.button}>
			{showPlus && (
				<span className={styles.plus}>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.75 0.75V14.75M14.75 7.75L0.75 7.75'
							stroke='#FAFCFF'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</span>
			)}
			{text}
		</button>
	)
}

export default PrimaryBtn
