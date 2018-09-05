import React from 'react';
import ReactDOM from 'react-dom';
import {
  PanelGroup,
  Panel,
  Button,
  ButtonToolbar,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import './index.css';
//create the main class for displaying the recipes
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: 'Banana Smoothie',
          ingredients: [
            '2 bananas',
            '1/2 cup vanilla yogurt',
            '1/2 cup skim milk',
            '2 teaspoons honey',
            'pinch of cinnamon'
          ]
        },
        {
          name: 'Spaghetti',
          ingredients: ['Noodles', 'Tomato Sauce', 'Meatballs']
        },
        {
          name: 'Split Pea Soup',
          ingredients: [
            '1 pound split peas',
            '1 onion',
            '6 carrots',
            '4 ounces of ham'
          ]
        }
      ],
      showAddRecipe: false,
      showEditForm: false,
      currentlyEditing: 0
    };
  }
  showModal = () => {
    this.setState(() => ({
      showAddRecipe: true
    }));
  };
  //add a recipe to our existing array
  addNewRecipe = (name, ingredients) => {
    const newRecipe = {
      name,
      ingredients: [...ingredients.split(',')]
    };

    this.setState(prevState => ({
      recipes: [...prevState.recipes, newRecipe],
      showAddRecipe: false
    }));
  };
  handleEditClick = index => {
    //handle user clicking on edit button
    const { recipes } = this.state;
    this.setState(() => ({
      showEditForm: !this.state.showEditForm,
      currentlyEditing: index
    }));
  };

  editRecipe = (newName, newIngredients, currentlyEditing) => {
    let recipes = this.state.recipes;
    recipes[currentlyEditing] = { name: newName, ingredients: newIngredients };
    this.setState(() => ({
      recipes
    }));
    this.handleEditClick(currentlyEditing);
  };

  render() {
    const recipes = this.state.recipes;
    return (
      <div className="jumbotron" style={{ marginTop: '10em' }}>
        <h1>RECIPE BOX</h1>
        <PanelGroup accordion id="recipes">
          {recipes.map((recipe, index) => (
            <Panel eventKey={index} key={index}>
              <Panel.Heading>
                <Panel.Title className="title" toggle>
                  {recipe.name}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ListGroup>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroupItem key={index}>{ingredient}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button bsStyle="warning" onClick={() => this.handleEditClick(index)}>Edit</Button>
                  <EditRecipe
                    showEdit={this.state.showEditForm}
                    onEdit={this.editRecipe}
                    onEditModal={() =>
                      this.handleEditClick(this.state.currentlyEditing)
                    }
                    currentlyEditing={this.state.currentlyEditing}
                    recipe={recipes[this.state.currentlyEditing]}
                  />
                  <Button bsStyle="danger">Delete</Button>
                </ButtonToolbar>
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
        <Button bsStyle="primary" onClick={this.showModal}>
          Add Recipe
        </Button>
        <AddRecipe
          show={this.state.showAddRecipe}
          addNewRecipe={this.addNewRecipe}
        />
      </div>
    );
  }
}
export default App;
