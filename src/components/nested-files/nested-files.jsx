//This is a component which will demonstrate nested file structure in React
//It'll get the data as input from the parent component and display it in a nested manner
//In JSON, there should be keys as 'name', 'type', and 'children' (if type is folder)

import NestedFileItem from "./nested-file-item";
import "./nested-files.css";

export default function NestedFile({ data }) {
  return (
    <div className="explorer-container">
      {data.data.children.map((node) => (
        <NestedFileItem treeItem={node} />
      ))}
    </div>
  );
}
