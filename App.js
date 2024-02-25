import React from 'react';
import XmlTreeRenderer from './components/TestComponent'; // Adjust the path accordingly

const App = () => {
  const xmlData = `<tutorials>
	<tutorial>
		<id>123</id>
		<content>Javascript</content>
	</tutorial>
	<tutorial>
		<id>456</id>
		<content>Java</content>
	</tutorial>
	<tutorial>
		<id>456</id>
		<content>Java</content>
		<author>Sam</author>
	</tutorial>
	</tutorials>`;

  return (
    <div>
      <h1>React XML Tree Renderer</h1>
      <XmlTreeRenderer xmlData={xmlData} />
    </div>
  );
};

export default App;
