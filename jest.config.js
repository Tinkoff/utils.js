// eslint-disable-next-line import/no-commonjs

module.exports = {
    timers: 'fake',
    preset: 'ts-jest',
    testURL: 'http://localhost/',
    globals: {
        'ts-jest': {
            tsConfig: {
                esModuleInterop: true
            }
        }
    },
    testMatch: [
        '**/__tests__/*.+(ts|tsx|js|jsx)',
    ]
}
