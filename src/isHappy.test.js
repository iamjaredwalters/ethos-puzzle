import { addAllCool, isCool } from './isHappy';

describe('isCool', () => {
    it('23 - true', () => {
        const result = isCool(23);

        expect(result).toEqual(true);
    });

    it('115 - false', () => {
        const result = isCool(115);

        expect(result).toEqual(false);
    });

    it('116 - false', () => {
        const result = isCool(104);

        expect(result).toEqual(false);
    });
});

describe('addAllCool', () => {
    it('10', () => {
        const result = addAllCool(10);

        expect(result).toEqual(18);
    });

    it('1,000,000', () => {
        const result = addAllCool(1000000);

        expect(result).toEqual(70601040511);
    });
});
