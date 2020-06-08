import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import useStore from './hooks/use-store';
import ListStore from './stores/liststore';
import News from './components/organisms/news';
import DefaultTemplateStyle from './components/templates/index.module.css';
import Header from './components/organisms/header';
import LineChart from './components/organisms/chart';

function App({match}) {

  const [listStoreData] = useStore(ListStore);

  const { 
    newsList = {},
    } = listStoreData;

  useEffect(() => {
    ListStore.set({
        pageNo: match.params.pageNo || 0,
    });
    ListStore.load('LoadNewsList');
  }, [match.params.pageNo]);


  return (<Fragment>
      <Header styleClass={DefaultTemplateStyle.mainHeader}></Header>
      <div className={DefaultTemplateStyle.mainContainer}>
        <News pageList={newsList.hits}>

        </News>
      </div>
      <div className={DefaultTemplateStyle.graphWrapper}>
        <div className={DefaultTemplateStyle.graph}>
            <LineChart data={newsList.hits || []}></LineChart>
        </div>
     </div>
  </Fragment>
    
  );
}
App.propTypes = {
    match: PropTypes.object,
}
export default App;
