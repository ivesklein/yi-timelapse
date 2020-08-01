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
		const interval = +process.argv[2]
		if(!isNaN(interval)){
			console.log('Starting yi-timelapse', interval, "sec")
			await yi.connect()
			console.log('Connected')
			let i=0
			while(true){
				try{
					i++
					const filepath = await yi.takePhoto()
					const time = new Date()
					console.log({time, i,filepath})
					await sleep(interval*1000)
				}catch(e){
					await yi.connect()
				}
			}
		}else{
			console.log("interval missing: node main.js [interval in seconds]")
		}

	}catch(e){
		console.log(e)
	}

}

main()