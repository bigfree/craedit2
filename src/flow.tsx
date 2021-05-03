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

const initialElements: FlowElement[] = [
	{
		id: '1',
		type: 'input',
		data: { label: 'Input Node' },
		position: { x: 250, y: 25 },
	},
	{
		id: '2',
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
				id: Math.random().toString(),
				data: { label: 'Another Node' },
				position: { x: 100, y: 125 },
			},
		]
		setElements(initialElementsas);
	}

	useEffect(() => {
		console.log(elements);
	}, [onConnect])

	return (
		<>
			<button onClick={addElement}>Add elements</button>
			<div className={styles.flow}>
				<ReactFlow elements={elements}
				           onElementsRemove={onElementsRemove}
				           onConnect={onConnect}
				           deleteKeyCode={46}
				           snapToGrid={true}
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