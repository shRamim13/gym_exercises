
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '4f887d0f94mshb0d53aefee8cc98p1efbefjsn451bca5de830',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  
// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };


// export const fetchData = async (url, options) => {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
// }


// // export const exerciseOptions = {
// //     method: 'GET',
// //     headers: {
// //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
// //       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
// //     },
// //   };
  
//   export const youtubeOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
//   };
  
//   export const fetchData = async (url, options) => {
//     const res = await fetch(url, options);
//     const data = await res.json();
  
//     return data;
//   };