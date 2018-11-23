//import {deepStrictEqual} from 'assert';
import {content, toStr} from '/lib/enonic/util';
import {getContent as getCurrentContent} from '/lib/xp/portal';

export function get() {
	const currentContent = getCurrentContent();
	const body = {
		'content.get() --> currentContent': content.get()._id === currentContent._id,
		"content.exists('non-existant') --> false": content.exists('non-existant') === false,
		'content.exists(currentContent._id) --> true': content.exists(currentContent._id) === true,
		'content.exists(currentContent._path) --> true': content.exists(currentContent._path) === true,

		'content.getParent({key: currentContent._id})': content.getParent({key: currentContent._id}),

		'content.getPath(currentContent._id) --> currentContent._path': content.getPath(currentContent._id) === currentContent._path,
		'content.getPath(currentContent._path) --> currentContent._path': content.getPath(currentContent._path) === currentContent._path,
		"content.getProperty(currentContent._id, '_name') --> currentContent._name": content.getProperty(currentContent._id, '_name') === currentContent._name
	};
	log.info(toStr(body));
	return {
		body,
		contentType: 'text/json;charset=utf-8'
	};
}
