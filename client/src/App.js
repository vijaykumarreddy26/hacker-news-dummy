import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import useStore from './hooks/use-store';
import ListStore from './stores/liststore';
import { NewListProvider } from './context_providers/news_context';
import News from './components/organisms/news';
import DefaultTemplateStyle from './components/templates/index.module.css';
import Header from './components/organisms/header';
import Pagination from './components/molecules/pagination';
import LineChart from './components/organisms/chart';

function App({match, staticContext}) {
    // Register liststore to listen to latest data
  const [listStoreData] = useStore(ListStore);

  const { 
    newsList = {},
    pageNo = 0,
    hideVoteNewsList ={}
    } = listStoreData;

  useEffect(() => {
    ListStore.load('GetHiddenList');
  }, [])

  useEffect(() => {
     const page =  match.params.pageNo || 1
     if(pageNo !== page){
        ListStore.set({
            pageNo:page,
        });
        ListStore.load('LoadNewsList');
     }
     //}
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.pageNo]);


  return (<Fragment>
      <Header styleClass={DefaultTemplateStyle.mainHeader}></Header>
      <div className={DefaultTemplateStyle.mainContainer}>
        <NewListProvider>
            <News pageList={newsList.hits} hideVoteNewsList={hideVoteNewsList}>

            </News>
        </NewListProvider>
      </div>
      <div className={DefaultTemplateStyle.pagination}>
          <Pagination currentPageNo={pageNo} totalPages={newsList.nbPages}></Pagination>
      </div>
      <div className={DefaultTemplateStyle.graphWrapper}>
        <div className={DefaultTemplateStyle.graph}>
            {!staticContext && <LineChart data={newsList.hits || []} hideVoteNewsList={hideVoteNewsList}></LineChart>}
        </div>
     </div>
      
  </Fragment>
    
  );
}
App.propTypes = {
    match: PropTypes.object,
}
export default App;
