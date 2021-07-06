const { NodeSSH } = require('node-ssh')

class AutoUploadPlugin {
	constructor(options) {
		this.ssh = new NodeSSH()
		this.options = options
	}

	apply(compiler) {
		compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin',
			async (compilation, callback) => {
				const outputPath = compilation.outputOptions.path

				await this.connectionServer()

				const serverDir = this.options.folder

				await this.ssh.execCommand(`rm -rf ${serverDir}/*`)

				await this.uploadFiles(outputPath, serverDir)

				this.ssh.dispose()

				callback()
			}
		)
	}

	async connectionServer() {
		await this.ssh.connect({
			host: this.options.host,
			username: this.options.username,
			password: this.options.password,
		})
	}

	async uploadFiles(localPath, remotePath) {
		const status = await this.ssh.putDirectory(localPath, remotePath, {
			recursive: true,
			concurrency: 10,
		})

		console.log(status ? '上传成功':'上传失败')
	}
}

module.exports = AutoUploadPlugin
