import React from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import { Colors, Helpers, Images, Metrics } from 'App/Theme'
import styles from './LoginScreenStyle'
import InputComponent from 'App/Components/InputComponent/InputComponent'
import { connect } from 'react-redux'
import AuthActions from 'App/Stores/Auth/Actions'
import { PropTypes } from 'prop-types'
import ButtonComponent from 'App/Components/ButtonComponent/ButtonComponent'

class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      passwordReference: '',
    }
  }

  passwordRef(input) {
    this.state.passwordReference = input
  }

  handleChange(name, text) {
    return this.setState({
      [name]: text,
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <View style={styles.logoContainer}>
          <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'cover'}/>
        </View>
        <View style={[Helpers.fullWidth, Metrics.smallHorizontalPadding]}>
          <InputComponent
            placeholder='Login'
            onChangeText={(text) => this.handleChange('login', text)}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.state.passwordReference.focus()}
            style={Metrics.smallVerticalMargin}
          />
          <InputComponent
            placeholder='Mot de passe'
            onChangeText={(text) => this.handleChange('password', text)}
            secureTextEntry={true}
            returnKeyType={'done'}
            reference={this.passwordRef.bind(this)}
          />
        </View>
        <ButtonComponent
          onPress={() => this.props.login(this.state.login, this.state.password)}
          title='CONNEXION'
          isLoading={this.props.loginLoading}
          color={Colors.secondary}
        />
      </KeyboardAvoidingView>
    )
  }
}

LoginScreen.propTypes = {
  token: PropTypes.string,
  loginLoading: PropTypes.bool,
  loginError: PropTypes.string,
  login: PropTypes.func,
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loginLoading: state.auth.loginLoading,
  loginError: state.auth.loginError,
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(AuthActions.login(email, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)


