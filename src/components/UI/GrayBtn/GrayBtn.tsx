import type { FC, ReactNode } from 'react'
import styles from './GrayBtn.module.scss'

interface IconButtonProps {
	children: ReactNode
}

const GrayBtn: FC<IconButtonProps> = ({ children }) => {
	return <button className={styles.btn}>{children}</button>
}

export default GrayBtn
