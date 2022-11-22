import {MediaUpload, RichText} from '@wordpress/editor';
import {Button, SelectControl, ColorPicker} from '@wordpress/components';
import {useState} from '@wordpress/element';

const Edit = ({attributes, setAttributes}) => {
	const [level, setLevel] = useState(attributes.titleLevel)
	const [color, setColor] = useState(attributes.titleColor)

	const getImageButton = (openEvent) => {
		if (attributes.imageUrl) {
			return (
				<img
					src={attributes.imageUrl}
					alt={attributes.imageAlt}
					onClick={openEvent}
				/>
			);
		} else {
			return (
				<Button
					onClick={openEvent}
					className='button button-large'
				>
					Pick an image
				</Button>
			);
		}
	};
	return (
		<div>
			<MediaUpload
				onSelect={media => {
					setAttributes({imageAlt: media.alt, imageUrl: media.url});
				}}
				type='image'
				render={({open}) => getImageButton(open)}
			/>

			<RichText
				onChange={content => setAttributes({title: content})}
				value={attributes.title}
				tagName='p'
				placeholder='Image title'
				style={{color: color}}
			/>

			<RichText
				onChange={content => setAttributes({imageAlt: content})}
				value={attributes.imageAlt}
				tagName='p'
				placeholder='Image alt'
			/>

			<SelectControl
				label='Title level:'
				value={level}
				options={[
					{label: 'h1', value: 'h1'},
					{label: 'h2', value: 'h2'},
					{label: 'h3', value: 'h3'},
					{label: 'h4', value: 'h4'},
					{label: 'h5', value: 'h5'},
					{label: 'h6', value: 'h6'}
				]}
				onChange={(newLevel) => {
					setLevel(newLevel)
					setAttributes({titleLevel: newLevel})
				}}
			/>

			<ColorPicker
				color={attributes.titleColor}
				onChange={(newColor) => {
					setColor(newColor);
					setAttributes({titleColor: newColor})
				}}
			/>
		</div>
	);
}

export default Edit;
