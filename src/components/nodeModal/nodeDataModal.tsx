import { FC, useEffect, useState } from "react";
import { Modal } from 'antd';

type TProps = {
	openModal: boolean
}

const NodeDataModal: FC<TProps> = ({openModal}: TProps): JSX.Element => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(openModal);

	useEffect(() => {
		// setIsModalVisible(openModal);
		console.log(openModal)
	}, [isModalVisible, openModal]);


	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Modal>
	)
}

export default NodeDataModal;