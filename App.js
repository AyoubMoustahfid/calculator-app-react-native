import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native';
import tw from "tailwind-react-native-classnames"

import Button from "./component/Button"

import {ThemeContext} from "./context/ThemeContext"

export default function App() {
    // Declare state variables
    const [firstNumber, setfirstNumber] = useState("")
    const [secoundNumber, setSecoundNumber] = useState("")
    const [operation, setOperation] = useState("")
    const [result, setResult] = useState(null)

    const [theme, setTheme] = useState("light")

    const handleNumberPress = (buttonValue) => {
      if(firstNumber.length < 10){
        setfirstNumber(firstNumber + buttonValue)
      }
    }

    const handleOperationPress = (bttonValue) => {
      setOperation(bttonValue)
      setSecoundNumber(firstNumber)
      setfirstNumber("")
    }

    const clear = () => {
      setfirstNumber("")
      setSecoundNumber("")
      setOperation("")
      setResult(null)
    }

    const firstNumberDisplay = () => {

      if(result !== null){
        return <Text style={[tw`text-4xl font-bold`, theme === "light" ? tw`text-black` : tw`text-white`]}>{result?.toString()}</Text>
      }

      /*
       if(firstNumber && firstNumber.length < 6){
        return <Text>{firstNumber}</Text>
      }

      if(firstNumber === ""){
        return <Text>{"0"}</Text>
      }

      if(firstNumber.length > 5 && firstNumber.length < 8){
        return (
          <Text>
            {firstNumber}
          </Text>
        )
      }
      */
     
    }

    const getResult = () => {
      switch(operation){
        case "+" : 
          clear()
          setResult(parseInt(secoundNumber) + parseInt(firstNumber))
          break;
        case "-" : 
          clear()
          setResult(parseInt(secoundNumber) - parseInt(firstNumber))
          break
        case "*" : 
          clear()
          setResult(parseInt(secoundNumber) * parseInt(firstNumber))
          break
        case "/" : 
          clear()
          setResult(parseInt(secoundNumber) / parseInt(firstNumber))
          break
        case "cos":
          clear()
          setResult(Math.cos(parseInt(secoundNumber)) * 10)
          break
        case "sin":
          clear()
          setResult(Math.sin(parseInt(secoundNumber)) * 10)
          break
        case "tan":
          clear()
          setResult(Math.tan(parseInt(secoundNumber)) * Math.PI / 180)
          break
        case "log":
          clear()
          setResult(Math.log(parseInt(firstNumber)) / Math.log(parseInt(secoundNumber)))
          break
        default:
          clear ()
          setResult(0)
          break;
      }
    }


  return (
    <SafeAreaView style={[tw` h-full px-4 flex-col justify-between`, theme === "light" ? tw`bg-white` : tw`bg-black`]}>
      <View style={tw`h-2/4 flex-col justify-around`}>
        <View style={tw`flex-row justify-center `}>
          <Switch
            value={theme === "dark"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        </View>

        <View 
          style={tw` h-2/4 flex-col items-end justify-end mx-3 `}
        >
          <Text
            style={[tw`text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          >
            {`${secoundNumber} `}
            <Text style={tw`text-2xl text-red-400 `}>{operation}</Text>
            {` ${firstNumber}`}
          </Text>
          <View style={tw`my-3`}>
            {firstNumberDisplay()}
          </View>
      </View>
      </View>
      
      <View style={tw`h-2/4 flex-col justify-end`}>
        {/* **** ROW 0 ****** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="sin"
            onPress={() => handleOperationPress("sin")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="cos"
            onPress={() => handleOperationPress("cos")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="tan"
            onPress={() => handleOperationPress("tan")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="log"
            onPress={() => handleOperationPress("log")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />
          
        </View>

        {/* *** ROW 1 ***** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="AC"
            onPress={clear}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="+/-"
            onPress={() => handleOperationPress("+/-")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="%"
            onPress={() => handleOperationPress("%")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={tw`text-green-400 font-bold text-2xl`}
          />

          <Button
            title="÷"
            onPress={() => handleOperationPress("/")}
            style={[tw`flex-row justify-center items-center py-4 rounded-xl`, {width: "18%"}]}
            text_style={tw`text-red-500 font-bold text-2xl`}
          />
          
        </View>

        {/* *** ROW 2 ***** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="7"
            onPress={() => handleNumberPress("7")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="8"
            onPress={() => handleNumberPress("8")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="9"
            onPress={() => handleNumberPress("9")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="x"
            onPress={() => handleOperationPress("*")}
            style={[tw`flex-row justify-center items-center py-4 rounded-xl`, {width: "18%"}]}
            text_style={tw`text-red-500 font-bold text-2xl`}
          />

        </View>

        {/* *** ROW 3 ***** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="4"
            onPress={() => handleNumberPress("4")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="5"
            onPress={() => handleNumberPress("5")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="6"
            onPress={() => handleNumberPress("6")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="-"
            onPress={() => handleOperationPress("-")}
            style={[tw`flex-row justify-center items-center py-4 rounded-xl`, {width: "18%"}]}
            text_style={tw`text-red-500 font-bold text-2xl`}
          />
          
        </View>
        
        {/* *** ROW 4 ***** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="1"
            onPress={() => handleNumberPress("1")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="2"
            onPress={() => handleNumberPress("2")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="3"
            onPress={() => handleNumberPress("3")}
            style={[tw` flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="+"
            onPress={() => handleOperationPress("+")}
            style={[tw`flex-row justify-center items-center py-4 rounded-xl`, {width: "18%"}]}
            text_style={tw`text-red-500 font-bold text-2xl`}
          />
        </View>

        {/* *** ROW 5 ***** */}
        <View style={tw`flex-row justify-around  my-1`}>
          <Button
            title="."
            onPress={() => handleNumberPress(".")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="0"
            onPress={() => handleNumberPress("0")}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />
          
          <Button
            title="⌫"
            onPress={() => setfirstNumber(firstNumber.slice(0, -1))}
            style={[tw`flex-row justify-center items-center py-4 rounded-lg`, {width: "18%"}]}
            text_style={[tw`font-bold text-2xl`, theme === "light" ? tw`text-black` : tw`text-white`]}
          />

          <Button
            title="="
            onPress={() => getResult()}
            style={[tw`flex-row justify-center items-center py-4 rounded-xl`, {width: "18%"}]}
            text_style={tw`text-red-500 font-bold text-2xl`}
          />
          
        </View>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
