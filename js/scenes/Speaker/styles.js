import {colors, typography} from '../../config/styles';

export const styles = {
  background: {
    flex:1,
    backgroundColor: colors.black,
    paddingVertical: 25,
  },
  buttonWrapper: {
    height: 40
  },
  header:{
    flexDirection: 'row',
    marginHorizontal: 10,

  },
  headingText: {
    color: colors.white,
    fontFamily: typography.fontMain,
    fontSize: 20,
    textAlign: "center",
    top: 10,
    left: 40,

  },
  body: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingBottom: 30,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  image:{
    borderRadius: 60,
    height: 120, 
    width: 120,
    marginVertical: 10,
  },
  speaker:{
    fontSize: 25,
    fontFamily: typography.fontMain,
    paddingHorizontal: 20,
    marginVertical: 15,
    color: colors.black
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.black,
    lineHeight: 30,
  }
}