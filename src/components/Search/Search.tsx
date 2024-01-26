import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({isValid = true, className, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref} className={cn(styles['input'] ,className, styles['input'], {
				[styles['invalid']]: isValid
			})} />
			<img className={styles['icon']} src='/search-icon.svg' alt='иконка лупы' />
		</div>
	);
});

export default Search;