import React, { useEffect, useState } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	BackgroundVariant,
	Elements,
	FlowElement,
	removeElements,
} from 'react-flow-renderer';
import styles from './flow.module.scss';
import { v4 as uuidv4 } from 'uuid';

const initialElements: FlowElement[] = [
	{
		id: uuidv4(),
		type: 'input',
		data: { label: 'Input Node' },
		position: { x: 250, y: 25 },
	},
	{
		id: uuidv4(),
		data: { label: 'Another Node' },
		position: { x: 100, y: 125 },
	},
];

const Flow: React.FC = (): JSX.Element => {
	const [elements, setElements] = useState<FlowElement[]>(initialElements);
	const onElementsRemove = (elementsToRemove: Elements<FlowElement>) => {
		setElements((els: FlowElement[]) => removeElements(elementsToRemove, els));
	};
	const onConnect = (params: any) => setElements((els) => addEdge(params, els));

	const addElement = () => {
		const initialElementsas = [
			...elements,
			{
				id: uuidv4(),
				data: { label: 'Another Node', adam: 123 },
				position: { x: 100, y: 125 },
			},
		]
		setElements(initialElementsas);
	}

	useEffect(() => {
		console.log(elements);
	}, [onConnect]);

	const elementClick = (event: any, element: any) => {
		console.log(event, element);
	}

	return (
		<>
			<button onClick={addElement}>Add elements</button>
			<div className={styles.flow}>
				<ReactFlow elements={elements}
				           onElementsRemove={onElementsRemove}
				           onConnect={onConnect}
				           deleteKeyCode={46}
				           snapToGrid={true}
						   onElementClick={elementClick}
				>
					<Background
						variant={BackgroundVariant.Dots}
					/>
				</ReactFlow>
			</div>
		</>
	)
}

export default Flow;