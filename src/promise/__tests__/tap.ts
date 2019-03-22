import promiseTap from '../tap';

describe('promiseTap', () => {
    it('should run promise and return passed argument', () => {
        const fn = jest.fn((x) => 0);
        const tapped = promiseTap(fn);
        const saveResult = jest.fn();

        return Promise.resolve(5)
            .then(tapped)
            .then(saveResult)
            .then(() => {
                expect(fn).toBeCalledWith(5);
                expect(saveResult).toBeCalledWith(5);
            });
    });
});
