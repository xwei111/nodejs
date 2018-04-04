module.exports={
	expfun:(flag)=>{
		if(flag==0){
			throw `我是例外`//抛出例外
		}

		return 'success';
	}
}