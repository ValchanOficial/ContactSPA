import React, { useState, useEffect } from 'react';

const Filters = ({contacts, handleSetList}) => {
	const [context, setContext] = useState('');

	useEffect(() => {
		const callArray = async () => {
			await handleSetList(contacts);
		}
		callArray();
	}, [contacts, handleSetList]);

	const filterByName = (name, list) => list.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));

	const sortByTarget = (list, target) => list.sort((a, b) => a[target].localeCompare(b[target]));

	const sortByDate = (list) => list.sort((a, b) => new Date(a.admissionDate) - new Date(b.admissionDate));

	const handleClick = (textContent) => setContext(context !== textContent ? textContent: '');

	const handleTyping = (value) => handleSetList(filterByName(value, contacts));

	const handleSortList = (e, textContent) => {
		const { classList } = e.target;
		let list = [];
		
		switch (textContent) {
			case 'name':
				list = sortByTarget(contacts, 'name').map(el => el);
				handleSetList(reverseList(classList, list));		
				break;
			case 'country':
				list = sortByTarget(contacts, 'country').map(el => el);
				handleSetList(reverseList(classList, list));		
				break;
			case 'company':
				list = sortByTarget(contacts, 'company').map(el => el);
				handleSetList(reverseList(classList, list));
				break;
			case 'date':
				list = sortByDate(contacts).map(el => el);
				handleSetList(reverseList(classList, list));
				break;
			case 'department':
				list = sortByTarget(contacts, 'department').map(el => el);
				handleSetList(reverseList(classList, list));
				break;
			default:
				handleSetList(contacts);
				break;
		}
	};

	const reverseList = (classList, list) => !classList.contains('is-selected') ? list : list.reverse();

	return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={e => handleTyping(e.target.value)}/>
					<button className="filters__search__icon">
					<i className="fa fa-search"/>
					</button>
				</div>

				<button 
					className={`filters__item ${context === 'name' && 'is-selected'}`}
					onClick={(e) => {handleClick('name'); handleSortList(e, 'name');}}>
					Nome <i className={`fas ${context === 'name' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>

				<button className={`filters__item ${context === "country" && "is-selected"}`}
					onClick={(e) => {handleClick('country'); handleSortList(e, 'country');}}>
					País <i className={`fas ${context === 'country' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>

				<button className={`filters__item ${context === "company" && "is-selected"}`}
					onClick={(e) => {handleClick('company'); handleSortList(e, 'company');}}>
					Empresa <i className={`fas ${context === 'company' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>

				<button className={`filters__item ${context === "department" && "is-selected"}`}
					onClick={(e) => {handleClick('department'); handleSortList(e, 'department');}}>
					Departamento <i className={`fas ${context === 'department' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>

				<button className={`filters__item ${context === "date" && "is-selected"}`}
					onClick={(e) =>{handleClick('date'); handleSortList(e, 'date');}}>
					Data de admissão <i className={`fas ${context === 'date' ? 'fa-sort-up' : 'fa-sort-down'}`} />
				</button>
			</section>
      </div>
	);
}

export default Filters;
