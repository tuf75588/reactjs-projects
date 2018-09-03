import React from 'react';
import ReactDOM from 'react-dom';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import AddRecipe from './components/AddRecipe'
import './index.css';
//create the main class for displaying the recipes
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
        {name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
        {name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
      ],
      showAddRecipe: false
    };
  }
  showModal = () => {
    this.setState(() => ({
      showAddRecipe: true,
    }))
  }
    //add a recipe to our existing array
    addNewRecipe = (name, ingredients) => {
      const newRecipe = {
        name,
        ...ingredients,
      }
      this.setState((prevState)  => console.log(prevState) || ({
          recipes: [...prevState.recipes, newRecipe.name]
      }))
      
    }
  render() {
    const recipes = this.state.recipes;
    return(
      <div className="jumbotron" style={{marginTop: '10em'}}>
        <h1>RECIPE BOX</h1>
        <PanelGroup accordion id="recipes">
          {recipes.map((recipe, index) => (
            <Panel eventKey={index} key={index}>
              <Panel.Heading>
                <Panel.Title className="title" toggle>{recipe.name}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ListGroup>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroupItem key={index}>{ingredient}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button bsStyle="warning">Edit</Button>
                  <Button bsStyle="danger">Delete</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
        <Button bsStyle="primary" onClick={this.showModal}>Add Recipe</Button>
        <AddRecipe show={this.state.showAddRecipe} addNewRecipe={this.addNewRecipe}/>
      </div>
    );
  }
};
export default App;