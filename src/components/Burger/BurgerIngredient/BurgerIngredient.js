import React, {Component} from 'react';
import classes from './BurgerIngredient.css;
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.Breadtop}>
            <div className={classes.Seed1} />
            <div className={classes.Seed2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese} />;
        break;
      case 'bacon':
        ingredient = <div className={classes.bacon} />;
        break;
      case 'salad':
        ingredient = <div className={classes.salad} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
