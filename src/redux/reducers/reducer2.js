const reducer2 = (state=[{id:0, title: "Step0",}], action)=>{
	switch(action.type) {
		case 'CONST_1': 
			return[
				...state,
				{id: 1, title: "Step 1",}
			];
		case 'CONST_2':
			return[
				...state,
				{id: "A", title:"Character",}
			]
		default:
			return state;
	}
};

export default reducer2;