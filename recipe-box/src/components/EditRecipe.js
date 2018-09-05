import {
  Modal,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import React, { Component } from 'react';

class EditRecipe extends Component {
  state = {
    name: '',
    ingredients: ''
  };
  static getDerivedStateFromProps(props,state) {
    const prevName = state.prevName;
    const prevIngredients = state.prevIngredients;
    const name = prevName !== props.recipe.name ? props.recipe.name : state.name;
    const ingredients = prevIngredients !== props.recipe.ingredients.join(",") ? props.recipe.ingredients.join(",") : state.ingredients;
    return {
      prevName: props.recipe.name, name,
      prevIngredients: props.recipe.ingredients.join(","), ingredients,
    }
  }

  handleEdit = event => {
      event.preventDefault();
      const { onEdit, currentlyEditing } = this.props;
      const regExp = /\s*,\s*/;
      const name = this.state.name;
      const ingredients = this.state.ingredients.split(regExp);
      onEdit(name, ingredients, currentlyEditing);
  } 

  handleRecipeChange = event => {
      const { name, value } = event.target;
      this.setState(() => ({
          [name]: value
      }))
  }
  render() {
    return (
      <Modal show={this.props.showEdit}>
        <Modal.Header>
          <Modal.Title>Edit Recipe</Modal.Title>
          <Modal.Body>
            {' '}
            <FormGroup >
                <ControlLabel>Recipe Name</ControlLabel>
              <FormControl name='recipeName'  value={this.state.name} type="text" onChange={this.handleRecipeChange} placeholder="Recipe Name.." />
              <ControlLabel style={{marginTop: '1em'}}>Recipe Ingredients</ControlLabel>
              <FormControl componentClass="textarea" value={this.state.ingredients} onChange={this.handleRecipeChange}  name='ingredients' placeholder="Ingredients (seperated by commas)" />
            </FormGroup>
          </Modal.Body>
          <Button>Close</Button>
        </Modal.Header>
      </Modal>
    );
  }
}

export default EditRecipe;
