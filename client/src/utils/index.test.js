import { getDomainName } from './index';

test('extract domain name', () => {
    var domainName = getDomainName("https://abc.xyz.com");
    expect(domainName).toEqual("abc.xyz.com");
});
