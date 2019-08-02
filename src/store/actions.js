export const UPDATE_STORY = "UPDATE_STORY"
export function loadStorySuccess(story){
  return {type: UPDATE_STORY, story}
}

export function sendQuery(apiUrl){

  return function(dispatch) {
    const url = `https://content.guardianapis.com/sport?api-key=`  + process.env.REACT_APP_API_KEY
    return getQuery(url).then(story => {
      dispatch(loadStorySuccess(story))
    })
  }
}

async function getQuery(url){
 const fetchResult = fetch(url);
 const response = await fetchResult;
 const jsonData = await response.json();
 return jsonData;
}
