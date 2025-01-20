import { useEffect, useState } from 'react';
import Image from 'next/image';

import MenuItem from '@/components/MenuItem';
import styles from '@/styles/Menu.module.scss'
import { menu } from '@/data/menu';
import { exit } from '@/../public/images/Images';

export default function Menu() {
	const [menuList, setMenuList] = useState(menu);
	const [category, setCategory] = useState('All');
	const [searchValue, setSearchValue] = useState('');
	const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
	const categoryList = ['All', 'Beef', 'Chicken', 'Seafood', 'Vegetarian']

	const handleFilterMenu = (currentCategory) => {
		const filteredMenu = currentCategory === 'All'
    ? menu
    : menu.filter((item) => item.category === currentCategory);
		
		setMenuList(filteredMenu)
		setCategory(currentCategory);
	}

	// Debounce the search input
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchValue(searchValue);
		}, 300);
		return () => clearTimeout(handler);
	}, [searchValue]);

	// Search filter logic
	useEffect(() => {
		if (debouncedSearchValue.trim() === '') {
			setMenuList(menu);
			return;
		}

		const searchItem = menu.filter(({ product, info }) =>
			[product, info]
				.some((field) =>
					`${field || ''}`.toLocaleLowerCase().includes(debouncedSearchValue.toLocaleLowerCase())
				)
		);
		setMenuList(searchItem);
	}, [debouncedSearchValue]);

	return (
		<main >
			<section className={styles.category__section}>
				<nav>
					<ul>
						{categoryList.map((cat) => (
							<li
								key={cat}
								role="button"
								aria-selected={category === cat}
								onClick={() => handleFilterMenu(cat)}
								className={`${styles.category__item} ${category === cat ? styles.category__item_active : ''}`}
							>
								{cat}
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.search__container}>
					<input 
						type="text" 
						placeholder="Search for a meal..."
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{searchValue ?
						<Image src={exit} alt='clear-icon' width={15} height={15} onClick={() => setSearchValue('')}/>
						: null
					}
				</div>
			</section>
			<section className={styles.menu__section}>
				{menuList.map((item, index) => (
					<MenuItem
						key={index}
						item={item}
					/>
				))}
			</section>
		</main>
		
	)
}

export async function getStaticProps() {
  return {
    props: {
      metaTitle: "Red Sun Menu - Menu Page",
    }
  };
}