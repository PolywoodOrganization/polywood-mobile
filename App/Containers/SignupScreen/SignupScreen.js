import React from 'react'
import { Image, KeyboardAvoidingView, StatusBar, View } from 'react-native'
import { Colors, Helpers, Images, Metrics } from 'App/Theme'
import styles from './SignupScreenStyle'
import InputComponent from 'App/Components/InputComponent/InputComponent'
import { connect } from 'react-redux'
import AuthActions from 'App/Stores/Auth/Actions'
import { PropTypes } from 'prop-types'
import ButtonComponent from 'App/Components/ButtonComponent/ButtonComponent'

class SignupScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        login: '',
        password: '',
      },
      references: {
        lastName: null,
        login: null,
        password: null,
      },
    }
  }

  handleReference(ref, input) {
    this.state.references[ref] = input
  }

  handleChange(name, text) {
    return this.setState({
      form: {
        ...this.state.form,
        [name]: text
      },
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <StatusBar backgroundColor={Colors.orange} barStyle="light-content"/>
        <View style={styles.logoContainer}>
          <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'cover'}/>
        </View>
        <View style={[Helpers.fullWidth, Metrics.smallHorizontalPadding]}>
          <InputComponent
            placeholder='Prénom'
            onChangeText={(text) => this.handleChange('firstName', text)}
            returnKeyType={'next'}
            onSubmitEditing={() => this.state.references.lastName.focus()}
            style={Metrics.smallVerticalMargin}
          />
          <InputComponent
            placeholder='Nom'
            onChangeText={(text) => this.handleChange('lastName', text)}
            returnKeyType={'next'}
            onSubmitEditing={() => this.state.references.login.focus()}
            style={Metrics.smallVerticalMargin}
            reference={(input) => this.handleReference('lastName', input)}
          />
          <InputComponent
            placeholder='Login'
            onChangeText={(text) => this.handleChange('login', text)}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            onSubmitEditing={() => this.state.references.password.focus()}
            style={Metrics.smallVerticalMargin}
            reference={(input) => this.handleReference('login', input)}
          />
          <InputComponent
            placeholder='Mot de passe'
            onChangeText={(text) => this.handleChange('password', text)}
            secureTextEntry={true}
            returnKeyType={'done'}
            style={Metrics.smallVerticalMargin}
            reference={(input) => this.handleReference('password', input)}
          />
        </View>
        <View style={Helpers.crossCenter}>
          <ButtonComponent
            onPress={() => this.props.signup(this.state.form.firstName,this.state.form.lastName,this.state.form.login,this.state.form.password)}
            title='VALIDER'
            isLoading={this.props.signupLoading}
            color={Colors.secondary}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

SignupScreen.propTypes = {
  token: PropTypes.string,
  signupLoading: PropTypes.bool,
  signupError: PropTypes.string,
  signup: PropTypes.func,
}

const mapStateToProps = (state) => ({
  signupLoading: state.auth.signupLoading,
  signupError: state.auth.signupError,
})

const mapDispatchToProps = (dispatch) => ({
  signup: (...params) => dispatch(AuthActions.signup(...params)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen)


