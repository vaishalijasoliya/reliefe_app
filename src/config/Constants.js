import { Dimensions } from 'react-native';

const is_in_beta = true;

const BASEURL = is_in_beta
	? 'http://localhost:3000/'
	: '';

const API_BASEURL = is_in_beta
	? BASEURL + 'api/'
	: '';

export default ({
    BASEURL : BASEURL,
    API_BASEURL: API_BASEURL,
    COLOR_PRIMARY: '#00589C',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLACK: '#000000',
    COLOR_GRAY_TEXT: '#707070',
    COLOR_TRANSPARENT: 'rgba(0,0,0,0)',
    emailReg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
    ROOT_NAVIGATION: null,
    showLoader: '',
    showDialog: '',
    USER_TOKEN : 'USER_TOKEN',
    
    USER_DATA: {
		token: ''
	},
    FONT_REGULAR : 'HelveticaNeue'

})