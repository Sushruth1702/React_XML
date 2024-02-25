import React, { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

const XmlTreeRenderer = ({ xmlData }) => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const parseXmlData = () => {
      parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
        } else {
          console.log('Parsed XML:', result);
          setTreeData(result);
        }
      });
    };

    parseXmlData();
  }, [xmlData]);

  const renderTreeNode = (node, index) => {
    if (typeof node === 'object' && node !== null) {
      return (
        <div key={index}>
          <ul>
          {Object.entries(node).map(([key, value], i) => (
            <div>
              <strong>{key}:</strong>
              {typeof value === 'object' && value !== null
                ? renderTreeNode(value, i)
                : <div>{value}</div>
              }
            </div>
          ))}
          </ul>
        </div>
      );
    } else {
      return <div key={index}>{node}</div>;
    }
  };
  
  return (
    <div>
      <h2>XML Tree:</h2>
      {treeData && renderTreeNode(treeData)}
    </div>
  );
};

export default XmlTreeRenderer;
