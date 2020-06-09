import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import useStore from './hooks/use-store';
import ListStore from './stores/liststore';
import { NewListProvider } from './context_providers/newsContext';
import News from './components/organisms/news';
import DefaultTemplateStyle from './components/templates/index.module.css';
import Header from './components/organisms/header';
import Pagination from './components/molecules/pagination';
import LineChart from './components/organisms/chart';

function App({match}) {

  const [listStoreData] = useStore(ListStore);

  const { 
    newsList = {},
    pageNo = 0,
    hideVoteNewsList ={}
    } = listStoreData;

  useEffect(() => {
     // var latestData = ListStore.get();
     // if(latestData.pageNo !== match.params.pageNo){
        ListStore.set({
            pageNo: match.params.pageNo || 1,
        });
        ListStore.load('LoadNewsList');
     //}
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
            <LineChart data={newsList.hits || []} hideVoteNewsList={hideVoteNewsList}></LineChart>
        </div>
     </div>
  </Fragment>
    
  );
}
App.propTypes = {
    match: PropTypes.object,
}
export default App;
