import React, { Component } from 'react';
import {
  Modal,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      ingredients: ''
    };
  }
  handleRecipeChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
        [name]: value
    }))
  }

  addRecipe =  () => {
      const { ingredients, recipeName } = this.state;
      const formattedIngredients = ingredients.split(' ').join(' ')
      console.log(formattedIngredients);
      this.props.addNewRecipe(recipeName, formattedIngredients)
  }

  render() {
 
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Add Recipe</Modal.Title>
          <Modal.Body>
            {' '}
            <FormGroup >
                <ControlLabel>Recipe Name</ControlLabel>
              <FormControl name='recipeName' type="text" onChange={this.handleRecipeChange} placeholder="Recipe Name.." />
              <ControlLabel style={{marginTop: '1em'}}>Recipe Ingredients</ControlLabel>
              <FormControl componentClass="textarea" onChange={this.handleRecipeChange} name='ingredients' placeholder="Ingredients (seperated by commas)" />
            </FormGroup>
          </Modal.Body>
          <Button>Close</Button>
          <Button onClick={this.addRecipe}>Submit Recipe</Button>
        </Modal.Header>
      </Modal>
    );
  }
}

export default RecipeForm;
