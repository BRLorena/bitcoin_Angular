// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  baseUrl: 'https://coinranking1.p.rapidapi.com/',
  key: '?rapidapi-key=309cc96bebmsh2737d7c69ff8cd7p1e9eb1jsnb0ab7c3dc5dd',
  getList: 'https://coinranking1.p.rapidapi.com/coins',
  getCoinUrl: 'https://coinranking1.p.rapidapi.com/coin/',
  getHistoryUrl: '/history/7d'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
