import { useState } from "react";
import "./nested-files.css";
export default function NestedFileItem({ treeItem }) {
  const item = treeItem;
  const [showChildren, setShowChildren] = useState(false);

  const setChildVisible = () => {
    //console.log("EVENT: ", evt);
    //evt.stopPropagation();
    setShowChildren(!showChildren);
  };
  const getItem = (item) => {
    if (item.isFolder) {
      return (
        <>
          <div>
            {showChildren ? <span>- </span> : <span>+ </span>}
            <span
              className="folder-item"
              onClick={() => setChildVisible()}
            >{`${item.name}`}</span>
          </div>
          <div className={showChildren ? "child-item" : "hidden-item"}>
            {item.children.map((node) => (
              <NestedFileItem treeItem={node} />
            ))}
          </div>
        </>
      );
    } else {
      return <div>{item.name}</div>;
    }
  };
  return <>{getItem(item)}</>;
}
