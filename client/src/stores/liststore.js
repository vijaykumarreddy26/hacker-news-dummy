import Store from '../libs/store';

const NewListStore = new Store({},
    [
        {
            label: 'LoadNewsList',
            request: {
                url: `http://hn.algolia.com/api/v1/search`,
                method: 'get',
            },
            formatter: (data, request) => {
                request.query ={
                    tags: 'story',
                    page: data.page || 0,
                }
                return request;  
            },
            outputField: 'newsList',
            statusLabel: 'newsListStatus',
            parse: (output) => output,
        },
    ]);

export default NewListStore;