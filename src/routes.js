import {
  DrinkCount,
  DrinkHistory,
  DrinkWarning,
} from './views';
import Full from './containers/Full';

const routes = [
  { path: '/', exact: true, name: 'Home', component: Full },
  { path: '/system', exact: true, name: 'System', component: DrinkCount },
  { path: '/system/drinkcount', name: 'DrinkCount', component: DrinkCount },
  { path: '/system/drinkhistory', name: 'DrinkHistory', component: DrinkHistory },
  { path: '/system/drinkwarning', name: 'DrinkWarning', component: DrinkWarning },
];

export default routes;
