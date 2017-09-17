module.exports = {
    workspace: '/var/lib/norman',
    port: 42001,
    workers: [
        { name: 'worker001', address: '127.0.0.1', port: 42002, processors: 2 }
    ]
};
