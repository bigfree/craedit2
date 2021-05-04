import { FC } from "react";
import Flow2 from "../../flow2";
import style from './content.module.scss';


const Content: FC = (): JSX.Element => {
	return (
		<div className={style.content}>
			<Flow2/>
		</div>
	)
}

export default Content;