import * as React from 'react';
import { Text, StyleSheet, View, Picker, TouchableOpacity, TextInput } from 'react-native';

export default class FindFoodScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      food: '',
      diet: '',
      health: '',
      mealType: '',
      dishType: '',
      cuisineType: '',
      api: ''
    };
  }

  getRecipes = async () => {
    var food = '&q=' + this.state.food;
    var diet = '&diet=' + this.state.diet;
    var health = '&health=' + this.state.health;
    var mealType = '&mealType=' + this.state.mealType;
    var dishType = '&dishType=' + this.state.dishType;
    var cuisineType = '&cuisineType=' + this.state.cuisineType;

    if (!this.state.diet) {
      diet = '';
    }

    if (!this.state.health) {
      health = '';
    }

    if (!this.state.mealType) {
      mealType = '';
    }

    if (!this.state.dishType) {
      dishType = '';
    }

    if (!this.state.cuisineType) {
      cuisineType = '';
    }


    var url = 'https://api.edamam.com/search?app_id=226996f1&app_key=ff026ba1ac748f365b53ddfb8d48c1ec' + food + diet + health + mealType + dishType + cuisineType;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          api: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={{
          alignSelf: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          marginTop: '5%',
        }}> Find Recipes</Text>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="#023e8a"
          placeholder="Food Name"
          value={this.state.food}
          onChangeText={(text) => {
            this.setState({
              food: text,
            });
          }}
        />

        <Picker
          mode="dropdown"
          selectedValue={this.state.diet}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              diet: itemValue,
            })
          }>
          <Picker.Item label="Diet" value="" />
          <Picker.Item label="Balanced" value="balanced" />
          <Picker.Item label="High-Fiber" value="high-fiber" />
          <Picker.Item label="High-Protein" value="high-protein" />
          <Picker.Item label="Low-Carb" value="low-carb" />
          <Picker.Item label="Low-Fat" value="low-fat" />
          <Picker.Item label="Low-Sodium" value="low-sodium" />
        </Picker>

        <Picker
          mode="dropdown"
          selectedValue={this.state.health}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              health: itemValue,
            })
          }>
          <Picker.Item label="Health" value="" />
          <Picker.Item label="Alcohol-Cocktail" value="alcohol-cocktail" />
          <Picker.Item label="Alcohol-Free" value="alcohol-free" />
          <Picker.Item label="Celery-Free" value="celery-free" />
          <Picker.Item label="Crustcean-Free" value="crustacean-free" />
          <Picker.Item label="Dairy-Free" value="dairy-free" />
          <Picker.Item label="DASH" value="DASH" />
          <Picker.Item label="Egg-Free" value="egg-free" />
          <Picker.Item label="Fish-Free" value="fish-free" />
          <Picker.Item label="FODMAP-Free" value="fodmap-free" />
          <Picker.Item label="Gluten-Free" value="gluten-free" />
          <Picker.Item label="Immuno-Supportive" value="immuno-supportive" />
          <Picker.Item label="Keto-Friendly" value="keto-friendly" />
          <Picker.Item label="Kidney-Friendly" value="kidney-friendly" />
          <Picker.Item label="Kosher" value="kosher" />
          <Picker.Item label="Low Potassium" value="low-potassium" />
          <Picker.Item label="Low Sugar" value="low-sugar" />
          <Picker.Item label="Lupine-Free" value="lupine-free" />
          <Picker.Item label="Mediterranean" value="Mediterranean" />
          <Picker.Item label="Mollusk-Free" value="mollusk-free" />
          <Picker.Item label="Mustard-Free" value="mustard-free" />
          <Picker.Item label="No oil added" value="No-oil-added" />
          <Picker.Item label="Paleo" value="paleo" />
          <Picker.Item label="Peanut-Free" value="peanut-free" />
          <Picker.Item label="Pescatarian" value="pecatarian" />
          <Picker.Item label="Pork-Free" value="pork-free" />
          <Picker.Item label="Red-Meat-Free" value="red-meat-free" />
          <Picker.Item label="Sesame-Free" value="sesame-free" />
          <Picker.Item label="Shellfish-Free" value="shellfish-free" />
          <Picker.Item label="Soy-Free" value="soy-free" />
          <Picker.Item label="Sugar-Conscious" value="sugar-conscious" />
          <Picker.Item label="Sulfite-Free" value="sulfite-free" />
          <Picker.Item label="Tree-Nut-Free" value="tree-nut-free" />
          <Picker.Item label="Vegan" value="vegan" />
          <Picker.Item label="Vegetarian" value="vegetarian" />
          <Picker.Item label="Wheat-Free" value="wheat-free" />
        </Picker>

        <Picker
          mode="dropdown"
          selectedValue={this.state.mealType}
          style={styles.dropdown}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              mealType: itemValue,
            })
          }>
          <Picker.Item label="Meal Type" value="" />
          <Picker.Item label="Breakfast" value="Breakfast" />
          <Picker.Item label="Lunch" value="Lunch" />
          <Picker.Item label="Dinner" value="Dinner" />
          <Picker.Item label="Snack" value="Snack" />
          <Picker.Item label="Teatime" value="	Teatime" />
        </Picker>

        <TouchableOpacity onPress={() => {
          if (!this.state.food) {
            alert("Please enter food");
          } else {
            this.getRecipes();
            this.props.navigation.navigate('ListScreen'
            //, {
              //api: this.state.api
            //}
            );
          }
        }}>
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
          }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    width: '48.5%',
    height: 40,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
  },
  textInput: {
    width: '94%',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
  }
})