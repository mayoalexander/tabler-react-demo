// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

/**
 * A Header component rendered as a h2 HTML element with a margin below
 */
function H2({ className, children }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h2" className={classes} size={2}>
      {children}
    </Header>
  );
}

H2.displayName = "Header.H2";

export default H2;
