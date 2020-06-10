import { enableFetchMocks } from 'jest-fetch-mock';
import ListStore from './liststore';


test('mock get news api', () => {
    enableFetchMocks()
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    ListStore.load("LoadNewsList", {
        pageNo: 1
    })
    ListStore.getStream().subscribe((data) => {
        expect(data.newsList.data).toEqual('12345');
    });
});
  