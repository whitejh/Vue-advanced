import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`); // 백틱기호 사용
}

function fetchJobsList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}jobs/1.json`); // 백틱기호 사용
}

function fetchAskList() {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}ask/1.json`); // 백틱기호 사용
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`); // 백틱기호 사용
}

function fetchCommentItem(id){
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem
};
