import {colors, typography} from '../../config/styles';

const styles = {
  time:{
    fontSize: 12,
    fontFamily: typography.fontMain,
    color: "black",
    backgroundColor: colors.lightGrey,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  textHeading:{
    fontFamily: typography.fontMain,
    // paddingVertical: 5,
    // paddingLeft: 10,
  },
  text:{
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    paddingVertical: 5,
  
  },
  textContainer:{
    paddingVertical: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  }
}

export default styles;