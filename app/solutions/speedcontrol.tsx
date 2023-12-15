function gps(s:any, x:any) {
	return Math.max(...x.slice(1).map((a:any, i:any) => (a - x[i]) / s * 3600)) | 0
}