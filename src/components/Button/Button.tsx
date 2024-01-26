//import { FC } from 'react';
import styles from'./Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';

// export const ButtonAlt: FC<ButtonProps> = ({className, children, ...props}) => {
//     return (
// 		<button className={cn('button accent', className)} {...props}>{children}</button>
// 	);
// } это альтернативный вариант с использованием функциональных компонентов

function Button({children, className, appearence = 'small', ...props}: ButtonProps) {
	return (
		<button className={cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearence === 'small',
			[styles['big']]: appearence === 'big'
		})} {...props}>{children}</button>
	);
}

export default Button;