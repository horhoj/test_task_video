import React from "react";

export interface IRouteItem {
  name: string;
  path: string;
  exact: boolean;
  component: React.FC;
}
