import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";


export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fontsLoaded: false,
      previewImage: "image_1",
      dropdownHeight: 40,
      light_theme: true,
    };
  }


  render() {
    let preview_images = {
      image_1: require("../assets/image_1.jpg"),
      image_2: require("../assets/image_2.jpg"),
      image_3: require("../assets/image_3.jpg"),
      image_4: require("../assets/image_4.jpg"),
      image_5: require("../assets/image_5.jpg"),
      image_6: require("../assets/image_6.jpg"),
      image_7: require("../assets/image_7.jpg"),
    };
    return (
      <View style={
        this.state.light_theme
          ? styles.containerLight
          : styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitleTextContainer}>
          <Text style={
            this.state.light_theme
              ? styles.appTitleTextLight
              : styles.appTitleText
          }>New Posts</Text>
        </View>

        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
              <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                  { label: "Image 6", value: "image_6" },
                  { label: "Image 7", value: "image_7" },
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={
                  this.state.light_theme
                    ? styles.dropdownBoxStyleLight
                    : styles.dropdownBoxStyle
                }
                itemStyle={{
                  justifyContent: "flex-start"
                }}
                dropDownStyle={{
                  backgroundColor: "#2a2a2a"
                }}
                labelStyle={{
                  color: "white"
                }}
                arrowStyle={{
                  color: "white"
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
                  //  fontFamily: "Bubblegum-Sans",
                }}
                onChangeItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
              />
            </View>

            <TextInput
              style={
                this.state.light_theme
                  ? styles.inputFontLight
                  : styles.inputFont
              }
              onChangeText={(caption) => {
                this.setState({ caption })
              }}

              placeholder={"Caption"}
              placeholderTextColor="white"
            />

          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  appTitleTextContainer: {
    justifyContent: "center",
    flex: 0.8,
  },
  dropdownBoxStyleLight: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
  },
  dropdownBoxStyle: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "transparent",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    //   fontFamily: "Bubblegum-Sans",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    //   fontFamily: "Bubblegum-Sans",
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    marginTop: RFValue(10),
    //fontFamily: "Bubblegum-Sans", 
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    backgroundColor: "black",
    marginTop: RFValue(10),
    //fontFamily: "Bubblegum-Sans", 
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5),
  },
  authorNameText: {
    color: "white",
    fontSize: RFValue(20)
  },
  authorNameTextLight: {
    color: "black",
    fontSize: RFValue(20)
  },
  postCard: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  postCardLight: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
  }
});




// storyImage: {
//   resizeMode: "contain",
//   width: "95%",
//   alignSelf: "center",
//   height: RFValue(250)
// },
// 
// iconContainer: {
//   flex: 0.2
// },
// storyTitleText: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(25),
//   color: "white"
// },
// storyTitleTextLight: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(25),
//   color: "black"
// },
// storyAuthorText: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(18),
//   color: "white"
// },
// storyAuthorTextLight: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(18),
//   color: "black"
// },
// descriptionContainer: {
//   marginTop: RFValue(5)
// },
// descriptionText: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(13),
//   color: "white"
// },
// descriptionTextLight: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: RFValue(13),
//   color: "black"
// },
// actionContainer: {
//   justifyContent: "center",
//   alignItems: "center",
//   padding: RFValue(10)
// },
// likeButtonLiked: {
//   width: RFValue(160),
//   height: RFValue(40),
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "row",
//   backgroundColor: "#eb3948",
//   borderRadius: RFValue(30)
// },
// likeButtonDisliked: {
//   width: RFValue(160),
//   height: RFValue(40),
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "row",
//   borderColor: "#eb3948",
//   borderWidth: 2,
//   borderRadius: RFValue(30)
// },
// likeText: {
//   color: "white",
//   fontFamily: "Bubblegum-Sans",
//   fontSize: 25,
//   marginLeft: 25,
//   marginTop: 6
// },
// likeTextLight: {
//   fontFamily: "Bubblegum-Sans",
//   fontSize: 25,
//   marginLeft: 25,
//   marginTop: 6
// }