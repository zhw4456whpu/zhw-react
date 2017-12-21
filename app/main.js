import React from 'react';
import ReactDom from 'react-dom';
import KanbanBoard from './components/KanbanBoard.jsx';

let cardsList = [
	{
		id:1,
		title:'Read the Book',
		description:'I should read the whole book',
		status:'in-progress',
		tasks:[]
	},
	{
		id:2,
		title:'Write some code',
		description:'Code along with the samples in the book',
		status:'todo',
		tasks:[
			{
				id:2.1,
				name:'联系人列表',
				done:true
			},
			{
				id:2.2,
				name:'看板',
				done:false
			},
			{
				id:2.3,
				name:'个人经历',
				done:false
			}
		]
	},
	{
		id:3,
		title:'Read the Book',
		description:'I should read the whole book2',
		status:'in-progress',
		tasks:[]
	},
	{
		id:4,
		title:'Read the Book',
		description:'I should read the whole book2',
		status:'done',
		tasks:[]
	}
];

ReactDom.render(
	<KanbanBoard cards={cardsList} />,document.getElementById('root')
);