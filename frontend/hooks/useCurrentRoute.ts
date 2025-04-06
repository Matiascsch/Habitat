// hooks/useCurrentRoute.ts
import { useNavigationState, Route } from '@react-navigation/native';

type RouteParams = Record<string, any>;

type RouteInfo = {
  fullPath: string;
  routeName: string;
  params: RouteParams;
} & RouteParams;

export const useCurrentRoute = (): RouteInfo => {
  const state = useNavigationState(state => state);

  const route: Route<string> = state.routes[state.index];
  const fullPath = route.name;
  const params: RouteParams = route.params ?? {};

  return {
    fullPath,
    routeName: route.name,
    params,
    ...params,
  };
};
