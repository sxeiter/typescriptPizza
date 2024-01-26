import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {

	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src='/avatar.png' alt='аватар пользователя'/>
				<div className={styles['name']}>Pavel Baksheev</div>
				<div className={styles['email']}>sxeiter@mail.ru</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to='/' className={({isActive}) => cn(styles['link'], {[styles.active]: isActive})}>
					<img src='/menu-icon.svg' alt='иконка меню'/>
					Меню</NavLink>
				<NavLink to='/cart' className={({isActive}) => cn(styles['link'], {[styles.active]: isActive})}>
					<img src='/cart-icon.svg' alt='иконка корзины'/>
					Корзина</NavLink>
			</div>
			<Button className={styles['exit']}>
				<img src='/exit-icon.svg' alt='иконка выхода'/>
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>;
}