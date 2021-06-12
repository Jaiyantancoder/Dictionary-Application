import React ,   {Component} from "react";
import {StyleSheet ,View ,Text ,TextInput ,TouchableOpacity} from "react-native";
import {Header} from "react-native-elements";
import ownDictionary from "./internal-db";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {

constructor () {
    super()
this.state = {
    input : '',
    isSearchPressed : false ,
    isLoading : false ,
    word : [],
    lexicalCategory : [],
    definition :  [] 
};
}   

getmeaning = (input) => {
  var input;
  try {
    var word = ownDictionary[this.state.input].word
    var lexicalCategory = ownDictionary[this.state.input].lexicalCategory
    var definition = ownDictionary [this.state.input].definition
      this.setState({
        word : word,
        lexicalCategory : lexicalCategory,
        definition : definition,
      })
 }  
catch (err){
  alert("Sorry this word is not available for now")
 this.setState({
     'text' : '',
     isSearchPressed : false
   })
}
}


 render () {
  return (
  <View style={{flex:1, borderWidth:2,backgroundColor:'orange',}}>
    <SafeAreaProvider>
   <Header
    backgroundColor={'skyblue'}
    centerComponent={{
    text: 'My Offline Dictionary',
    style: { color: '#fff', fontSize: 18,fontWeight:'bold',fontFamily:'san-serif' },
    }}
  />
 <View style={styles.inputBoxContainer}> 
   <TextInput
        type= "text"
        placeholder = "Enter the word"
        style = {styles.inputBox}
        onChangeText={input => {
      this.setState({
        input : input,
        isSearchPressed : false,
        world : 'Loading...',
        lexicalCategory : '',
        examples : [],
        definition : ''
      })}}
      value = {this.state.input}
    />
 </View> 

 <View>
   <TouchableOpacity
     style={styles.searchButton}
     onPress={() => {
       this.setState({isSearchPressed : true})
       this.getmeaning(this.state.text)
     }}>
   <Text style={styles.searchText}>Search</Text>  
   </TouchableOpacity>
 </View>

   <View style={styles.outputContainer}>
   <Text style={{fontSize:20}}>
    {
      this.isSearchPressed && this.state.word === "Loading..."
      ? this.state.word
      : ""
    }
   </Text>
   {
     this.state.word !== "Loading..." ?
     (
    <View style={{justifyContent:'center', marginLeft:10 }}>
        
         <View style={styles.detailsContainer}>
           <Text >
             Word : {""}
           </Text>
           <Text style={{fontSize:18 }}>
             {this.state.word}
           </Text>
         </View>

         <View style={styles.detailsContainer}>
            <Text >
              Type :{" "}
              
            </Text>
           <Text style={{fontSize:18}}>
             {this.state.lexicalCategory}
           </Text>
         </View>

         <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
            <Text >
              Definition :{" "}
            </Text>
           <Text style={{ fontSize:18}}>
             {this.state.definition}
           </Text>
         </View>

    </View>
        
     )
     : null
   }
    </View>
    </SafeAreaProvider>
</View>
      
    );
  }

}

const styles = StyleSheet.create({
  
  inputBoxContainer: {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center',
    
  },
  inputBox: {
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    marginTop:25,
    color:'balck',
    fontFamily:'san-serif'
  },
  searchButton: {
    width: '40%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'skyblue'
    
   },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'san-serif',
    color:'#FFFFFF'
  },
  outputContainer:{
    flex:0.7,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
    color:'orange',
    fontSize:20,
    fontWeight:'bold'
  }

})  