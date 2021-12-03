// $PI = 3.141592653589793;
export var deg2rad = Math.PI / 180.0;

export function sin4deg( X ){
	return Math.sin( X * deg2rad );
}

export function cos4deg( X ){
	return Math.cos( X * deg2rad );
}

export function tan4deg( X ){
	return Math.tan( X * deg2rad );
}

export function asin4deg( X ){
	return Math.asin( X ) / deg2rad;
}

export function acos4deg( X ){
	return Math.acos( X ) / deg2rad;
}

export function atan4deg( X ){
	return Math.atan( X ) / deg2rad;
}

export function atan24deg( X, Y ){
	return Math.atan2( X, Y ) / deg2rad;
}

export function sgn( X ){
	return Math.sign( X );
}

export function fmod( X, t ){
	var res = 0.0;
	res = X - Math.floor( X / t ) * t;
	if( res < 0.0 ){
		res += t;
	}
	return res;
}

export function mod360( X ){
	return X - Math.floor( X / 360.0 ) * 360.0;
}

export function floor( X ){
	return Math.floor( X );
}

export function ceil( X ){
	return Math.ceil( X );
}

1;
