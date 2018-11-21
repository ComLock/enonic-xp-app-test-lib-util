import {
	log as doLog,
	toStr
} from '/lib/enonic/util';

const obj = {
	name: 'value'
};

doLog(obj);
log.info(toStr({obj}));
