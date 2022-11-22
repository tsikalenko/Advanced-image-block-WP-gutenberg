import {RichText} from '@wordpress/block-editor';

const Save = ({attributes}) => {
	return (
		<div>
			<img src={attributes.imageUrl} alt={attributes.imageAlt}/>
			<RichText.Content
				tagName={attributes.titleLevel}
				style={{color: attributes.titleColor}}
				value={attributes.title}
			/>
		</div>
	);
}

export default Save;
