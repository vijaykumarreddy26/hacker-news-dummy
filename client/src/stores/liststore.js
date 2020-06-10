import Store from '../libs/store';
import isEmpty from 'lodash.isempty';
import { getServerInitialData, getDomain, getUserData, setUserData } from '../utils';


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
        {
            label: 'HideNews',
            request: {
                method: 'post',
            },
            formatter: (data, request, config) => {
                var mockData = getUserData();
                if(!mockData[config.postId]){
                    mockData[config.postId] ={};
                }
                mockData[config.postId].hide = true;
                request.mock = mockData
                return request;
            },
            outputField: 'hideVoteNewsList',
            statusLabel: 'hideNewsListStatus',
            parse: (output) => {
               var data = output.data;
               setUserData(data);
               return data;
            }
        },
        {
            label: 'UpVote',
            request: {
                method: 'post',
            },
            formatter: (data, request, config) => {
                var mockData = getUserData();
                if(!mockData[config.postId]){
                    mockData[config.postId] ={};
                }
                var votes = mockData[config.postId].votes;
                if(!isNaN(votes)){
                    votes = Number(votes) + 1;
                }else {
                    votes = 1;
                }
                mockData[config.postId].votes = votes;
                request.mock = mockData
                return request;
            },
            outputField: 'hideVoteNewsList',
            statusLabel: 'hideNewsListStatus',
            parse: (output) => {
               var data = output.data;
               setUserData(data);
               return data;
            }
        },
        {
            label: 'GetHiddenList',
            request: {
                method: 'post',
            },
            formatter: (data, request, config) => {
                request.mock = getUserData();
                return request;
            },
            outputField: 'hideVoteNewsList',
            statusLabel: 'hideNewsListStatus',
            parse: (output) => {
               var data = output.data;
               return data;
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