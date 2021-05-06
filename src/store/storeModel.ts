import { Action, Thunk } from "easy-peasy";
import { FlowElement } from "react-flow-renderer";

export interface StoreModel {
	nodes: FlowElement[],
	node: FlowElement | null,
	setNode: Action<StoreModel, FlowElement | null>,
	error: string | null,
	addNode: Action<StoreModel, FlowElement>,
	addNodes: Action<StoreModel, FlowElement[]>,
	setError: Action<StoreModel, string>,
	loadNodes: Thunk<StoreModel, string>,
	openModal: boolean,
	setOpenModal: Action<StoreModel, boolean>
}