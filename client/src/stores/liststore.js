import Store from '../libs/store';
import isEmpty from 'lodash.isempty';
import { getServerInitialData, getDomain } from '../utils';

const NewListStore = new Store({},
    [
        {
            label: 'LoadNewsList',
            request: {
                method: 'get',
            },
            formatter: (data, request) => {
                request.url = `${getDomain()}/api/v1/search`
                request.query ={
                    tags: 'story',
                    page: data.pageNo || 0,
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
    ],
    null,
    () => {
        const serverData = getServerInitialData();
        let initialData = {};
		if (!isEmpty(serverData)) {
			initialData = {
				newsList: serverData.newsList,
				pageNo: serverData.pageNo,
            }
		}
		return initialData;
	});

export default NewListStore;