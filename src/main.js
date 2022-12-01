import ms from 'ms';
import lunchtime from './lunchtime.js';
import millisecondsUntil from './millisecondsUntil.js';

import { CmpApiModel } from '@iabtcf/cmpapi/lib/mjs/CmpApiModel.js'
//import { CmpApiModel } from '@iabtcf/cmpapi/lib/CmpApiModel.js'
//import { CmpApiModel } from '@iabtcf/cmpapi/lib/CmpApiModel'

import {
	CmpApi
} from '@iabtcf/cmpapi/lib/CmpApi.js';

console.log("test iabtcf")
console.log(CmpApiModel.apiVersion);
console.log(CmpApi.name)

export default function howLongUntilLunch(hours, minutes) {
	// lunch is at 12.30
	if (hours === undefined) hours = 12;
	if (minutes === undefined) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(lunchtime(hours, minutes));

	console.log("millisecondsUntilLunchTime", millisecondsUntilLunchTime);

	return ms(millisecondsUntilLunchTime, { long: true });
}