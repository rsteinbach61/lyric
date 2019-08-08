export const UPDATE_STORY = "UPDATE_STORY"
export function loadStorySuccess(story){
  return {type: UPDATE_STORY, story}
}

export const GET_TEXT = "GET_TEXT"
export function getTextSuccess(text){
  return {type: GET_TEXT, text}
}

export function sendQuery(query){
  return function(dispatch) {
    const url = `https://content.guardianapis.com/search?q=${query}&api-key=`  + process.env.REACT_APP_API_KEY
    return getQuery(url).then(story => {
      getText(story.response.results[0].apiUrl)
      dispatch(loadStorySuccess(story))
    })
  }
}

export function getText(apiUrl){
  debugger;
  return function(dispatch){
    const url = apiUrl + "?show-fields=all&api-key="  + process.env.REACT_APP_API_KEY
    return getQuery(url).then(text => {
      dispatch(getTextSuccess(text))
    })
  }
}

async function getQuery(url){
 const fetchResult = fetch(url);
 const response = await fetchResult;
 const jsonData = await response.json();
 return jsonData;
}
