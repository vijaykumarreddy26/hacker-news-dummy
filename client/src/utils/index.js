import isEmpty from 'lodash.isempty';


export const getDomainName = (url) => {
    if(!url){
        return '';
    }
    return new URL(url).hostname;
}

export const getDomain = () => {
    return window.location.protocol+'//'+window.location.host;
}

export const timeSince = (timeStamp) => {
    let minute = 60;
    let hour   = minute * 60;
    let day    = hour   * 24;
    let month  = day    * 30;
    let year   = day    * 365;

    let suffix = ' ago';

    let elapsed = Math.floor((Date.now() - new Date(timeStamp)) / 1000);

    if (elapsed < minute) {
        return 'just now';
    }

    // get an array in the form of [number, string]
    let a = ((elapsed < hour  && [Math.floor(elapsed / minute), 'minute']) ||
            (elapsed < day   && [Math.floor(elapsed / hour), 'hour'])    ||
            (elapsed < month && [Math.floor(elapsed / day), 'day']) ||
            (elapsed < year  && [Math.floor(elapsed / month), 'month'])   ||
            ([Math.floor(elapsed / year), 'year']));

    // pluralise and append suffix
    return a[0] + ' ' + a[1] + (a[0] === 1 ? '' : 's') + suffix;
}


export const getServerInitialData = () => {
	if (typeof window == 'undefined') {
		return !isEmpty(global.initialServerData) ? JSON.parse(unescape(global.initialServerData)) : {};
	} else {
		return window.INITIAL_DATA;
	}
}

export const getUserData = () => {
    let hiddenList = {};
    try{
        hiddenList = localStorage.getItem("voteAndHiddenList");
        if(hiddenList){
            hiddenList = JSON.parse(hiddenList);
        } else {
            hiddenList ={};
        }
    }catch(e) {

    }
    return hiddenList;
}

export const setUserData = (data) => {
    try{
        localStorage.setItem("voteAndHiddenList", JSON.stringify(data));
    }catch(e) {
    }
}