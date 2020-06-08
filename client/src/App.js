import React, {Fragment} from 'react';
import {} from 'react-router-dom';
import DefaultTemplateStyle from './components/templates/index.module.css';
import Header from './components/organisms/header';

function App() {
  return (<Fragment>
      <Header styleClass={DefaultTemplateStyle.mainHeader}></Header>
      <div className={DefaultTemplateStyle.mainContainer}>
        
      </div>
      <div className={DefaultTemplateStyle.graphWrapper}>
        <div className={DefaultTemplateStyle.graph}>

        </div>
     </div>
  </Fragment>
    
  );
}

export default App;
