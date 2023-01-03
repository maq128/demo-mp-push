const uniPush = uniCloud.getPushManager({
	appId: "__UNI__24CD51C"
})

module.exports = {
	pushMessageTo(params) {
		return uniPush.sendMessage({
			"push_clientid": params.push_clientid,
			"title": params.title,
			"content": params.content,
			"payload": params.payload
		})
	}
}
