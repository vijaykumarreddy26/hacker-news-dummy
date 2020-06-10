import React from 'react';
import ListStore from '../stores/liststore';

const NewListContext = React.createContext();

const NewListProvider = (props) => {
  const hidePost = (postId) => {
    ListStore.load("HideNews", {
        postId
    });
  }
  const upVotePost = (postId) => {
    ListStore.load("UpVote", {
        postId
    });
  }
  return (
    <NewListContext.Provider value={[hidePost, upVotePost]}>
      {props.children}
    </NewListContext.Provider>
  );
}

export { NewListContext, NewListProvider };