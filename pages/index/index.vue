<template>
	<view class="content">
		<view class="text-area">
			<text class="title">cid: {{cid}}</text>
		</view>
		<view class="text-area">
			<button @click="getPushClientId">getPushClientId</button>
		</view>
		<view class="text-area">
			<button @click="doPushMessage">doPushMessage</button>
		</view>
		<view class="text-area">
			<text>以真机调试方式运行本程序。</text>
			<text>点击 doPushMessage 按钮向自己推送一条消息，在 Console 里可以看到收到的消息。</text>
			<text>熄屏等待 1 分钟，再次亮屏之后点击 doPushMessage 按钮，不能再次收到消息。</text>
		</view>
	</view>
</template>

<script>
	const test_push = uniCloud.importObject('test-push')

	export default {
		data() {
			return {
				cid: '-'
			}
		},
		onLoad() {
			this.getPushClientId()
		},
		methods: {
			getPushClientId() {
				// 获取推送标识
				uni.getPushClientId({
					success: (res) => {
						console.log('uni.getPushClientId success:', res)
						this.cid = res.cid
					},
					fail: (err) => {
						console.log('uni.getPushClientId fail:', err)
					}
				})
			},
			doPushMessage() {
				test_push.pushMessageTo({
					push_clientid: this.cid,
					title: '通知栏显示的标题',
					content: '通知栏显示的内容: ' + new Date().getTime(),
					payload: {
						text: '体验一下uni-push2.0: ' + new Date().getTime()
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1em;
	}
</style>
