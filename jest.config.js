// eslint-disable-next-line import/no-commonjs
module.exports = {
    timers: 'fake',
    testURL: 'http://localhost/',
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest",
    },
    globals: {
        "ts-jest": {
            useBabelrc: true,
            tsConfigFile: "tsconfig.json"
        }
    },
    testMatch: [
        "**/__tests__/*.+(ts|tsx|js|jsx)"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ]
};
