const yi = require('yi-action-camera');

const sleep = function(milis){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, milis)
	})
}

const main = async function(){

	try{
		console.log('Starting yi-timelapse')
		await yi.connect()
		console.log('connected')
		
		for(let i in [0,1,2,3,4,5,6,7,8,9]){
			const filepath = await yi.takePhoto()
			console.log({i,filepath})
			await sleep(5000)
		}
	}catch(e){
		console.log(e)
	}

}

main()