import {colors, typography} from '../../config/styles';

export const styles = {
  location: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  time: {
    color: colors.red,
    fontFamily: typography.fontMain,
    marginVertical: 2,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: 25,
    marginVertical: 10,
    marginLeft: -8,
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 17,
    marginVertical: 10,
    lineHeight: 27,
  },
  presentedBy: {
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
    marginVertical: 5,
    fontSize: 15,
  },
  presenter:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingVertical: 10,
  },
  image:{
    width: 50, 
    height: 50,
    borderRadius: 25,
  },
  presenterName: {
    fontFamily: typography.fontMain,
    fontSize: 15,
    paddingLeft: 20,
  }
}