import {colors, typography} from '../../config/styles';

export const styles = {
  background: {
    flex:1,
    backgroundColor: colors.black,
    paddingVertical: 25,
  },
  header:{
    flexDirection: 'row',

  },
  headingText: {
    color: colors.white,
    // position: "fixed",
    top: 10,
    left: 40,

  },
  body: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  image:{
    borderRadius: 50,
    height: 100, 
    width: 100
  }
}