import { Card, CardStyleType, HeaderTitleSortType } from "./framework/Card";
import { TabContainer } from "./framework/Tab";

function App() {
  return (
    <div className="w-screen h-screen p-2 bg-slate-700">
      <Card CardStyle={CardStyleType.Gold}>
        <Card.Header TitleSortStyle={HeaderTitleSortType.Center}>
          This is Header
        </Card.Header>
        <Card.Body>
          <Card.Text>this is text</Card.Text>
          <Card.Text>this is text</Card.Text>
          <Card.Text>this is text</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button type="button">Click button</button>
        </Card.Footer>
      </Card>

      <TabContainer>
        <TabContainer.Tab label="a">Tab A</TabContainer.Tab>
        <TabContainer.Tab label="b">Tab B</TabContainer.Tab>

        <TabContainer.Panel label="a">this is A Panel</TabContainer.Panel>
        <TabContainer.Panel label="b">this is B Panel</TabContainer.Panel>
      </TabContainer>
    </div>
  );
}

export default App;
