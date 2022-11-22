import {registerBlockType} from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	attributes: {
		title: {
			type: 'text'
		},
		titleColor: {
			type: 'text'
		},
		titleLevel: {
			type: 'text'
		},
		imageAlt: {
			type: 'text',
			attribute: 'alt',
		},
		imageUrl: {
			type: 'text',
			attribute: 'src',
		}
	},
	edit: Edit,
	save: Save,
});
