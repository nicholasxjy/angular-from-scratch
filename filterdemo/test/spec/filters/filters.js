/**
 * Created by nicholas_xue on 14-7-29.
 */
'use strict';

describe('filters test', function() {
    beforeEach(module('filterdemoApp'));

    it('should reverse greeting', function() {
        expect(binding('greeting | reverse')).toEqual('olleh');
        input('greeting').enter('ABC');
        expect(binding('greeting | reverse')).toEqual('CBA');
    });
});