exports = module.exports = (config) => {
    return new Promise(async (resolve, reject) => {
        resolve({
            $: {
                promise: 'resolved',
                from_config: await config.get('foo.bar')
            }
        });
    })
}
