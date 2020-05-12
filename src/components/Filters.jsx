import React, { useState } from 'react';

const Filters = ({contacts, setList}) => {
	const [context, setContext] = useState('');

	const filterByName = (name, list) => list.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));

	const sortByTarget = (list, target) => list.sort((a, b) => a[target].localeCompare(b[target]));

	const sortByDate = (list) => list.sort((a, b) => new Date(a.admissionDate) - new Date(b.admissionDate));

	const handleClick = (textContent) => setContext(context !== textContent ? textContent: '');

	const handleTyping = (value) => setList(filterByName(value, contacts));

	const sortList = (targetContext) => ({
		"name": sortByTarget(contacts, 'name').map(el => el),
		"country": sortByTarget(contacts, 'country').map(el => el),
		"company": sortByTarget(contacts, 'company').map(el => el),
		"department": sortByTarget(contacts, 'department').map(el => el),
		"date": sortByDate(contacts).map(el => el),
		"": setList(contacts)
	})[targetContext];

	const handleSortList = ({target: {classList}}, targetContext) => setList(reverseList(classList, sortList(targetContext)));
	
	const reverseList = (classList, list) => !classList.contains('is-selected') ? list : list.reverse();

	return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar" 
						onChange={e => handleTyping(e.target.value)}
						onPaste={e => handleTyping(e.target.value)}
					/>
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
