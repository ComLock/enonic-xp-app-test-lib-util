import {deepStrictEqual} from 'assert';
import {content} from '/lib/enonic/util';
import {getContent as getCurrentContent} from '/lib/xp/portal';

export function get() {
	const currentContent = getCurrentContent();
	return {
		body: {
			'content.get()': deepStrictEqual(content.get(), currentContent),
			"content.exists('non-existant') --> false": deepStrictEqual(content.exists('non-existant'), false),
			'content.exists(currentContent._id) --> true': deepStrictEqual(content.exists(currentContent._id), true),
			'content.exists(currentContent._path) --> true': deepStrictEqual(content.exists(currentContent._path), true)
			//"content.getParent({key: '/'})": content.getParent({key: '/'})
		},
		contentType: 'text/html;charset=utf-8'
	};
}
