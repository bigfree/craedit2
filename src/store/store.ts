import axios from "axios";
import { action, createStore, thunk } from "easy-peasy";
import { StoreModel } from "./storeModel";

const store = createStore<StoreModel>({
	nodes: [],
	error: null,
	addNode: action(({ nodes }, payload) => {
		nodes.push(payload);
	}),
	addNodes: action((state, payload) => {
		state.nodes = payload;
	}),
	setError: action((state, payload) => {
		state.error = payload;
	}),
	loadNodes: thunk(async (actions, payload) => {
		try {
			const { data } = await axios.get('http://localhost:3000/test.json');
			return data;
		} catch (error) {
			actions.setError(error.message);
		}
	}),
	openModal: false,
	setOpenModal: action((state, payload) => {
		state.openModal = payload;
	}),
});

export { store };