import React, { FC, useEffect, useState } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	BackgroundVariant,
	Elements,
	FlowElement,
	removeElements
} from "react-flow-renderer";
import NodeDataModal from "./components/nodeModal/nodeDataModal";
import { useStoreActions, useStoreState } from './store/hooks';

const Flow2: FC = (): JSX.Element => {
	const nodes = useStoreState((state => state.nodes));
	const actions = useStoreActions((actions => actions));

	const [elements, setElements] = useState<FlowElement[]>(nodes);

	const onElementsRemove = (elementsToRemove: Elements<FlowElement>) => {
		setElements((els: FlowElement[]) => removeElements(elementsToRemove, els));
	};
	const onConnect = (params: any) => setElements((els) => addEdge(params, els));

	const onClickButton = () => {
		actions.loadNodes('aaa').then((res: FlowElement[]) => {
			actions.addNodes(res);
			setElements(res);
		});
	}

	const elementClick = (event: any, element: any) => {
		console.log(event, element);
		actions.setNode(element);
		actions.setOpenModal(true);
	}

	useEffect(() => {
		console.log(elements);
	}, [elements]);

	return (
		<>
			<button onClick={onClickButton}>Load</button>
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
			<NodeDataModal />
		</>
	);
}

export default Flow2;