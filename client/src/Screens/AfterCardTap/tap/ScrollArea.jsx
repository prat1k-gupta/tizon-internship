import "./ScrollArea.css";
import React from "react";
import { TitleImg } from "./TitleImg";
import { TabGroup } from "./TabGroup";

function ScrollArea({ business, id }) {
  return (
    <div className="scrollArea">
      <TitleImg data={business} />
      <hr />
      <TabGroup business={business} id={id} />
    </div>
  );
}

export { ScrollArea };
