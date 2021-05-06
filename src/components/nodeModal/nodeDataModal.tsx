import { Modal, Button, Form, Input } from 'antd';
import { FC, useEffect } from "react";
import { FlowElement } from "react-flow-renderer";
import { useStoreActions, useStoreState } from "../../store/hooks";

const NodeDataModal: FC = (): JSX.Element => {
	const [form] = Form.useForm();
	const openModal = useStoreState((state => state.openModal));
	const node = useStoreState((state => state.node));

	const actions = useStoreActions((actions => actions));

	useEffect(() => {
		if (node !== null) {
			form.setFieldsValue({
				label: node.data?.label
			});
		}
	}, [form, node]);

	const handleOk = () => {
		// actions.setOpenModal(false);
		const formData = form.getFieldsValue();
		let customNode = node;
		if (customNode !== null) {
			customNode.data.label = formData.label;
		}

		console.log(customNode);
	};

	const handleCancel = () => {
		actions.setOpenModal(false);
	};

	const afterClose = () => {
		actions.setNode(null);
		console.info('close modal event');
	}

	return (
		<Modal
			title={node?.data.label}
			visible={openModal}
			afterClose={afterClose}
			footer={[
				<Button key="back" onClick={handleCancel}>
					Close
				</Button>,
				<Button key="submit" type="primary" onClick={handleOk}>
					Save
				</Button>
			]}
		>
			<Form form={form} name="control-hooks">
				<Form.Item name="label" label="Name" rules={[{ required: true }]}>
					<Input />
				</Form.Item>
			</Form>
			{JSON.stringify(node)}
		</Modal>
	)
}

export default NodeDataModal;