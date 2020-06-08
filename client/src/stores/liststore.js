import Store from '../libs/store';
import map from 'lodash.map'

const NewListStore = new Store({},
    [
        {
            label: 'LoadNewsList',
            request: {
                url: `/api/v1/search`,
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
            parse: (output) => {
               var data = output.data || [];
               return data;
              /* data.hits = map(data.hits, () => {

               }) */
            }
        },
    ]);

export default NewListStore;