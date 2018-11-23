import index, {
	app as appLib,
	//content as contentLib, // Can't be used outside portal context
	data as dataLib,
	log as doLog,
	object as objectLib,
	//region as regionLib, // Can't be used outside portal context
	toStr,
	value as valueLib
} from '/lib/enonic/util';

import {getJsonName} from '/lib/enonic/util/app';
import {isInt} from '/lib/enonic/util/data';
import {dlv} from '/lib/enonic/util/object';
import {isString} from '/lib/enonic/util/value';

const obj = {
	nested: {
		name: true
	}
};

doLog(obj);
index.log(obj);

log.info(toStr({
	getShortName: appLib.getShortName(),
	getJsonName: getJsonName(),

	isSet: dataLib.isSet(true),
	isInt: isInt(1),

	hasProperty: objectLib.hasProperty(obj, 'nested.name'),
	dlv: dlv(obj, 'nested.name'),

	isObject: valueLib.isObject(obj),
	isString: isString('string')
}));
