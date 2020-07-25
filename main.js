const yi = require('yi-action-camera');


const main = async function(){

	try{
		await yi.connect()
		console.log('connected')
		const filepath = await yi.takePhoto()
		console.log({filepath})
		const config = await yi.getConfig()
		console.log({config})
	}catch(e){
		console.log(e)
	}

}